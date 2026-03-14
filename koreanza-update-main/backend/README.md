# Koreanza Backend API

Backend API for Koreanza - Korean Beauty Products E-commerce Platform.

## Features

- RESTful API for product management
- SQLite database for data storage
- Image upload functionality
- Product CRUD operations
- Search and filter products
- Category-based product listing
- Stock management

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite3** - Database
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

3. (Optional) Seed the database with sample products:
```bash
npm run seed
```

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (with filters) |
| GET | `/api/products/:id` | Get single product by ID |
| GET | `/api/products/category/:category` | Get products by category |
| GET | `/api/products/search?q=query` | Search products |
| GET | `/api/products/categories` | Get all categories |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| PATCH | `/api/products/:id/stock` | Update product stock |

### Query Parameters (for GET /api/products)

| Parameter | Type | Description |
|-----------|------|-------------|
| category | string | Filter by category |
| minPrice | number | Minimum price |
| maxPrice | number | Maximum price |
| skinType | string | Filter by skin type |
| search | string | Search in name/description |
| sort | string | Sort by: `price_asc`, `price_desc`, `name_asc`, `newest` |
| limit | number | Limit number of results |
| page | number | Page number (for pagination) |

## Request Examples

### Get All Products
```bash
curl http://localhost:3000/api/products
```

### Get Products by Category
```bash
curl http://localhost:3000/api/products/category/Skincare
```

### Search Products
```bash
curl http://localhost:3000/api/products/search?q=serum
```

### Create Product (with image)
```bash
curl -X POST http://localhost:3000/api/products \
  -F "name=New Product" \
  -F "category=Skincare" \
  -F "price=Rs 999" \
  -F "stock=50" \
  -F "image=@/path/to/image.jpg"
```

### Update Product
```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Product Name",
    "price": "Rs 1099",
    "stock": 45
  }'
```

### Delete Product
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Database Schema

### Products Table
```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price TEXT NOT NULL,
  original_price TEXT,
  stock INTEGER DEFAULT 0,
  finish TEXT,
  skin_type TEXT,
  benefits TEXT,
  description TEXT,
  how_to_use TEXT,
  image TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Project Structure

```
backend/
├── config/
│   └── database.js       # Database configuration
├── controllers/
│   └── productController.js  # Product logic
├── middleware/
│   └── upload.js         # Multer configuration
├── models/
│   └── Product.js        # Product model
├── routes/
│   └── productRoutes.js  # API routes
├── scripts/
│   └── seedProducts.js   # Database seeder
├── uploads/              # Uploaded images
├── data/                 # Database files
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── server.js             # Main server file
└── README.md
```

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=3000
NODE_ENV=development
```

## Image Upload

- Supported formats: JPEG, PNG, WebP, GIF
- Maximum file size: 5MB
- Upload endpoint: POST `/api/products` with `image` field
- Images are stored in `/uploads` directory
- Image URL format: `/uploads/filename.jpg`

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error"
}
```

## License

ISC
