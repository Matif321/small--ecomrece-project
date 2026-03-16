import { Product } from '../models/Product.js';
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { asyncHandler } from '../middleware/asyncHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @desc    Get all products with filtering, sorting, and pagination
 * @route   GET /api/products
 * @access  Public
 */
export const getAllProducts = asyncHandler(async (req, res) => {
  const { category, minPrice, maxPrice, skinType, search, sort, limit, page } = req.query;

  const queryInfo = {};
  if (category) queryInfo.category = category;
  if (skinType) queryInfo.skinType = skinType;

  // Price range logic
  if (minPrice || maxPrice) {
    const priceNumericExpr = {
      $toInt: {
        $replaceAll: {
          input: {
            $replaceAll: { input: "$price", find: "Rs ", replacement: "" }
          },
          find: ",", replacement: ""
        }
      }
    };

    const priceConditions = [];
    if (minPrice) priceConditions.push({ $gte: [priceNumericExpr, parseInt(minPrice)] });
    if (maxPrice) priceConditions.push({ $lte: [priceNumericExpr, parseInt(maxPrice)] });

    if (priceConditions.length > 0) {
      queryInfo.$expr = { $and: priceConditions };
    }
  }

  // Keyword search logic
  if (search) {
    queryInfo.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  // Sorting logic
  let sortOption = { _id: 1 };
  if (sort) {
    switch (sort) {
      case 'price_asc':
      case 'price_desc':
        sortOption = sort === 'price_asc' ? { price: 1 } : { price: -1 };
        break;
      case 'name_asc':
        sortOption = { name: 1 };
        break;
      case 'newest':
        sortOption = { created_at: -1 };
        break;
    }
  }

  // Pagination logic
  const queryLimit = parseInt(limit) || 0;
  let querySkip = 0;
  if (queryLimit > 0 && page) {
    querySkip = (parseInt(page) - 1) * queryLimit;
  }

  let products = await Product.find(queryInfo)
    .sort(sortOption)
    .skip(querySkip)
    .limit(queryLimit);

  // Custom manual numeric sorting for price strings
  if (sort === 'price_asc' || sort === 'price_desc') {
    products.sort((a, b) => {
      const valA = parseInt((a.price || '0').replace('Rs ', '').replace(/,/g, ''));
      const valB = parseInt((b.price || '0').replace('Rs ', '').replace(/,/g, ''));
      return sort === 'price_asc' ? valA - valB : valB - valA;
    });
    // Apply pagination post-sort if necessary
    if (queryLimit && products.length > queryLimit) {
      products = products.slice(querySkip, querySkip + queryLimit);
    }
  }

  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

/**
 * @desc    Get single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(404);
    throw new Error('Product not found (Invalid ID format)');
  }

  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json({
    success: true,
    data: product
  });
});

/**
 * @desc    Get products by category
 * @route   GET /api/products/category/:category
 * @access  Public
 */
export const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });

  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Admin/Private
 */
export const createProduct = asyncHandler(async (req, res) => {
  const {
    name, category, price, original_price, stock,
    finish, skin_type, benefits, description, how_to_use
  } = req.body;

  if (!name || !category || !price) {
    res.status(400);
    throw new Error('Name, category, and price are required');
  }

  let imagePath = null;
  if (req.file) {
    imagePath = `/uploads/${req.file.filename}`;
  }

  const productData = {
    name, category, price, original_price,
    stock: stock || 0,
    finish, skin_type, benefits, description, how_to_use,
    image: imagePath
  };

  const product = await Product.create(productData);

  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: product
  });
});

/**
 * @desc    Update a product details
 * @route   PUT /api/products/:id
 * @access  Admin/Private
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name, category, price, original_price, stock,
    finish, skin_type, benefits, description, how_to_use
  } = req.body;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(404);
    throw new Error('Product not found (Invalid ID format)');
  }

  const existingProduct = await Product.findById(id);
  if (!existingProduct) {
    res.status(404);
    throw new Error('Product not found');
  }

  let imagePath = existingProduct.image;
  if (req.file) {
    if (existingProduct.image) {
      const oldImagePath = join(__dirname, '..', 'uploads', existingProduct.image.split('/').pop());
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }
    imagePath = `/uploads/${req.file.filename}`;
  }

  const productData = {
    name, category, price, original_price, stock,
    finish, skin_type, benefits, description, how_to_use,
    image: imagePath
  };

  const product = await Product.findByIdAndUpdate(id, productData, { new: true, runValidators: true });

  res.json({
    success: true,
    message: 'Product updated successfully',
    data: product
  });
});

/**
 * @desc    Delete a product
 * @route   DELETE /api/products/:id
 * @access  Admin/Private
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(404);
    throw new Error('Product not found (Invalid ID format)');
  }

  const product = await Product.findById(id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  // Cleanup Image
  if (product.image) {
    const imagePath = join(__dirname, '..', 'uploads', product.image.split('/').pop());
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  await Product.findByIdAndDelete(id);

  res.json({
    success: true,
    message: 'Product deleted successfully'
  });
});

/**
 * @desc    Search for products
 * @route   GET /api/products/search?q=query
 * @access  Public
 */
export const searchProducts = asyncHandler(async (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.status(400);
    throw new Error('Search query is required');
  }

  const products = await Product.find({
    $or: [
      { name: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
      { category: { $regex: q, $options: 'i' } }
    ]
  });

  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

/**
 * @desc    Get all unique categories
 * @route   GET /api/products/categories
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Product.distinct('category');

  res.json({
    success: true,
    data: categories
  });
});

/**
 * @desc    Update only the stock of a product
 * @route   PATCH /api/products/:id/stock
 * @access  Admin/Private
 */
export const updateStock = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(404);
    throw new Error('Product not found (Invalid ID format)');
  }

  if (stock === undefined || stock < 0) {
    res.status(400);
    throw new Error('Valid stock quantity is required');
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { stock },
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json({
    success: true,
    message: 'Stock updated successfully',
    data: updatedProduct
  });
});



// import { Product } from '../models/Product.js';
// import fs from 'fs';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { asyncHandler } from '../middleware/asyncHandler.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // ================= Get All Products =================
// export const getAllProducts = asyncHandler(async (req, res) => {
//   const { category, minPrice, maxPrice, skinType, search, sort, limit, page } = req.query;

//   const queryInfo = {};

//   if (category) queryInfo.category = category;
//   if (skinType) queryInfo.skin_type = skinType;

//   if (search) {
//     queryInfo.$or = [
//       { name: { $regex: search, $options: 'i' } },
//       { description: { $regex: search, $options: 'i' } }
//     ];
//   }

//   // Price filter
//   if (minPrice || maxPrice) {
//     queryInfo.price = {};
//     if (minPrice) queryInfo.price.$gte = parseInt(minPrice);
//     if (maxPrice) queryInfo.price.$lte = parseInt(maxPrice);
//   }

//   // Sorting
//   let sortOption = { created_at: -1 };
//   if (sort === 'price_asc') sortOption = { price: 1 };
//   if (sort === 'price_desc') sortOption = { price: -1 };
//   if (sort === 'name_asc') sortOption = { name: 1 };

//   // Pagination
//   const queryLimit = parseInt(limit) || 0;
//   const querySkip = page ? (parseInt(page) - 1) * queryLimit : 0;

//   const products = await Product.find(queryInfo)
//     .sort(sortOption)
//     .skip(querySkip)
//     .limit(queryLimit);

//   res.json({
//     success: true,
//     count: products.length,
//     products
//   });
// });

// // ================= Get Product by ID =================
// export const getProductById = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//     res.status(404);
//     throw new Error('Product not found (Invalid ID)');
//   }

//   const product = await Product.findById(id);
//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   res.json({
//     success: true,
//     product
//   });
// });

// // ================= Get Products by Category =================
// export const getProductsByCategory = asyncHandler(async (req, res) => {
//   const { category } = req.params;
//   const products = await Product.find({ category });
//   res.json({
//     success: true,
//     count: products.length,
//     products
//   });
// });

// // ================= Create Product =================
// export const createProduct = asyncHandler(async (req, res) => {
//   const { name, category, price, original_price, stock, finish, skin_type, benefits, description, how_to_use } = req.body;

//   if (!name || !category || !price) {
//     res.status(400);
//     throw new Error('Name, category, and price are required');
//   }

//   let imagePath = null;
//   if (req.file) {
//     imagePath = `/uploads/${req.file.filename}`;
//   }

//   const product = await Product.create({
//     name,
//     category,
//     price,
//     original_price: original_price || price,
//     stock: stock || 0,
//     finish,
//     skin_type,
//     benefits,
//     description,
//     how_to_use,
//     image: imagePath
//   });

//   res.status(201).json({
//     success: true,
//     message: 'Product created successfully',
//     product
//   });
// });

// // ================= Update Product =================
// export const updateProduct = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { name, category, price, original_price, stock, finish, skin_type, benefits, description, how_to_use } = req.body;

//   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//     res.status(404);
//     throw new Error('Product not found (Invalid ID)');
//   }

//   const existingProduct = await Product.findById(id);
//   if (!existingProduct) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   // Handle image update
//   let imagePath = existingProduct.image;
//   if (req.file) {
//     if (existingProduct.image) {
//       const oldImagePath = join(__dirname, '..', 'uploads', existingProduct.image.split('/').pop());
//       if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
//     }
//     imagePath = `/uploads/${req.file.filename}`;
//   }

//   const updatedProduct = await Product.findByIdAndUpdate(
//     id,
//     { name, category, price, original_price, stock, finish, skin_type, benefits, description, how_to_use, image: imagePath },
//     { new: true, runValidators: true }
//   );

//   res.json({
//     success: true,
//     message: 'Product updated successfully',
//     product: updatedProduct
//   });
// });

// // ================= Delete Product =================
// export const deleteProduct = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//     res.status(404);
//     throw new Error('Product not found (Invalid ID)');
//   }

//   const product = await Product.findById(id);
//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   // Remove image
//   if (product.image) {
//     const imagePath = join(__dirname, '..', 'uploads', product.image.split('/').pop());
//     if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
//   }

//   await Product.findByIdAndDelete(id);

//   res.json({
//     success: true,
//     message: 'Product deleted successfully'
//   });
// });

// // ================= Search Products =================
// export const searchProducts = asyncHandler(async (req, res) => {
//   const { q } = req.query;
//   if (!q) {
//     res.status(400);
//     throw new Error('Search query is required');
//   }

//   const products = await Product.find({
//     $or: [
//       { name: { $regex: q, $options: 'i' } },
//       { description: { $regex: q, $options: 'i' } },
//       { category: { $regex: q, $options: 'i' } }
//     ]
//   });

//   res.json({
//     success: true,
//     count: products.length,
//     products
//   });
// });

// // ================= Get Categories =================
// export const getCategories = asyncHandler(async (req, res) => {
//   const categories = await Product.distinct('category');
//   res.json({
//     success: true,
//     categories
//   });
// });

// // ================= Update Stock Only =================
// export const updateStock = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { stock } = req.body;

//   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   if (stock === undefined || stock < 0) {
//     res.status(400);
//     throw new Error('Valid stock quantity is required');
//   }

//   const updatedProduct = await Product.findByIdAndUpdate(id, { stock }, { new: true, runValidators: true });

//   if (!updatedProduct) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   res.json({
//     success: true,
//     message: 'Stock updated successfully',
//     product: updatedProduct
//   });
// });