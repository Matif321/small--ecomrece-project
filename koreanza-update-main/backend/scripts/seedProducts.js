import mongoose from 'mongoose';
import { connectDB } from '../config/database.js';
import { Product } from '../models/Product.js';

// All products from frontend
const products = [
    // Eyes Products
    {
        id: 1,
        name: 'Slim Brown Eyeliner',
        category: 'Eyes Products',
        price: 'Rs 899',
        original_price: 'Rs 1299',
        stock: 12,
        finish: 'Matte & Natural',
        benefits: 'Long-lasting, smudge-proof, easy application',
        description: 'Slim Brown Eyeliner gives a natural and soft eye look. It is easy to apply and helps define the eyes smoothly. The brown color is perfect for everyday makeup.',
        how_to_use: '1. Start with clean, dry eyelids.\n2. Gently draw a thin line along the upper lash line.\n3. Begin from the inner corner and move outward.\n4. For a darker look, apply another layer.\n5. You can also lightly apply on the lower lash line for a soft finish.',
        image: '/uploads/eyeliner-removebg-preview.png'
    },
    {
        id: 2,
        name: 'Volume Mascara',
        category: 'Eyes Products',
        price: 'Rs 999',
        original_price: 'Rs 1399',
        stock: 15,
        finish: 'Intense Black',
        benefits: 'Thickening, lengthening, clump-free',
        description: 'Volume mascara makes eyelashes look thicker, fuller, and darker. It adds volume to the lashes and makes the eyes look bigger and more defined. It is suitable for daily and party makeup.',
        how_to_use: '1. Start with clean, dry eyelashes.\n2. Apply mascara from the root of the lashes to the tips.\n3. Move the brush in a zig-zag motion for more volume.\n4. Apply a second coat if you want extra thickness.',
        image: '/uploads/mascara-removebg-preview.png'
    },
    {
        id: 3,
        name: 'Twinkle Pop Eye Shadow',
        category: 'Eyes Products',
        price: 'Rs 3499',
        original_price: 'Rs 4799',
        stock: 8,
        finish: 'Shimmer & Glitter',
        benefits: 'High pigment, easy to blend, radiant glow',
        description: 'Twinkle Pop eye shadow palette is a Korean makeup palette with soft, pretty colors. It usually has light, medium, and shimmer shades that are easy to blend. The colors give a natural, fresh, and glowing look, perfect for daily and party makeup.',
        how_to_use: '1. Use a brush or your finger to apply matte shade over your eyelid.\n2. Apply the shimmer shade to your lid and lower lash line for a touch of sparkle.\n3. Use the glitter shade to highlight the center of your lid or corner of your eyes.\n4. Blend well for a smooth and soft finish.',
        image: '/uploads/twinkle_pop_eye_shadow-removebg-preview.png'
    },
    {
        id: 4,
        name: 'Twoedit Eye Shimmer - Gold Dawn',
        category: 'Eyes Products',
        price: 'Rs 1999',
        original_price: 'Rs 2799',
        stock: 10,
        finish: 'Metallic Shimmer',
        benefits: 'Luminous finish, creamy texture',
        description: 'A luxurious eye shimmer that provides a metallic glow. Its creamy formula blends seamlessly, offering a multidimensional sparkle that stays all day.',
        how_to_use: 'Dab onto the center of the eyelid with your fingertip or a flat brush. Blend edges for a soft, radiant look.',
        image: '/uploads/twoedit_eue_shimmer_2-removebg-preview.png'
    },
    {
        id: 5,
        name: 'Twoedit Eye Shimmer - Rose Glow',
        category: 'Eyes Products',
        price: 'Rs 1999',
        original_price: 'Rs 2799',
        stock: 10,
        finish: 'Rose Metallic',
        benefits: 'Soft glow, crease-resistant',
        description: 'Add a touch of elegance with our Rose Glow shimmer. Highly pigmented and easy to apply, it creates a romantic, sparkling eye look in seconds.',
        how_to_use: 'Apply directly to the eyelid and blend. Can be used alone or as a topper for matte eye shadows.',
        image: '/uploads/twoedit_eye_shimmer_1-removebg-preview.png'
    },

    // Face Products
    {
        id: 6,
        name: 'Personal Cushion Blusher',
        category: 'Face Products',
        price: 'Rs 1500',
        original_price: 'Rs 2000',
        stock: 50,
        finish: 'Radiant & Dewy',
        benefits: 'Instant vitality, idol-like glow',
        description: 'A radiant cushion blusher that boosts vitality, giving you a 100% idol-like glow.',
        how_to_use: 'At the final step of your base makeup, take an appropriate amount onto a puff and gently pat it around the cheeks.',
        image: '/uploads/cushion_blush-removebg-preview.png'
    },
    {
        id: 7,
        name: 'Peachmanu Foundation',
        category: 'Face Products',
        price: 'Rs 3499',
        original_price: 'Rs 4899',
        stock: 12,
        finish: 'Dewy Finish',
        skin_type: 'All Skin Types',
        benefits: 'SPF 50+ PA+++, hydrating, serum-infused',
        description: 'A serum-infused cushion foundation that gives a dewy, natural glow. It provides light to medium coverage, keeps skin hydrated, and blends smoothly without feeling heavy. Enriched with peach, cica, and honey, plus SPF 50+ PA+++ for daily sun protection. Ideal for a fresh, natural look.',
        how_to_use: '1. Clean and moisturize your face.\n2. Press the cushion puff lightly into the foundation.\n3. Gently tap the puff onto your face (do not rub).\n4. Start from the center and blend outward.\n5. Build coverage by adding more if needed.',
        image: '/uploads/peachmanu_foundation-removebg-preview.png'
    },
    {
        id: 8,
        name: 'Peachmanu Glow Cream',
        category: 'Face Products',
        price: 'Rs 3499',
        original_price: 'Rs 4899',
        stock: 14,
        skin_type: 'Sensitive & Normal',
        benefits: 'Hydrating, soothing, skin-smoothing',
        description: 'Peach Manu Glow Cream by Parnell is a K-beauty moisturizing cream designed to provide a natural, radiant glow, improve hydration, soothe sensitive skin, and smooth texture, often featuring peach and cica extracts for skin health, working as a daily hydrator or night treatment for luminous, clear skin.',
        how_to_use: '1. Cleanse your face first.\n2. Apply your toner/serum (optional).\n3. Take a small amount of Peachmanu Glow Cream on your fingers.\n4. Gently massage it all over your face and neck.\n5. Use it morning and night for best results.',
        image: '/uploads/peachmnu_glow_cream-removebg-preview.png'
    },
    {
        id: 9,
        name: 'Advanced Wrinkle Cream',
        category: 'Face Products',
        price: 'Rs 2999',
        original_price: 'Rs 4299',
        stock: 15,
        skin_type: 'Mature Skin',
        benefits: 'Anti-aging, firming, melanin removal',
        description: 'Formulated with Avocado tree butter and Carbomer, this cream targets facial wrinkles and improves elasticity. It helps firm the skin, removes melanin, and provides anti-oxidation protection with hydrolyzed silk to regenerate vitality.',
        how_to_use: '1. Cleanse and tone your face.\n2. Take a pea-sized amount of wrinkle cream.\n3. Gently massage it onto your face and neck, focusing on areas with fine lines.\n4. Use morning and night for best results.',
        image: '/uploads/wrinkle_cream-removebg-preview.png'
    },

    // Lip Products
    {
        id: 10,
        name: 'Cleaderm Lip Serum - Milky Blue',
        category: 'Lip Products',
        price: 'Rs 2999',
        original_price: 'Rs 4299',
        stock: 18,
        finish: 'Glossy & Plump',
        benefits: 'Collagen-infused, blurs lip wrinkles',
        description: 'A viscous, collagen textured lip serum that forms a milky layer to blur and plump lip wrinkles, giving a dewy, moisturized look.',
        how_to_use: 'Spread evenly across the lips.',
        image: '/uploads/cleaderm lip serum milky blue.jpg'
    },
    {
        id: 11,
        name: 'Cleaderm Lip Serum - Plum Pink',
        category: 'Lip Products',
        price: 'Rs 2999',
        original_price: 'Rs 4299',
        stock: 18,
        finish: 'Soft Pink Gloss',
        benefits: 'Deep hydration, plumping effect',
        description: 'A viscous, collagen textured lip serum that forms a milky layer to blur and plump lip wrinkles, giving a dewy, moisturized look.',
        how_to_use: 'Spread evenly across the lips.',
        image: '/uploads/cleaderm lip serum plim pink.jpg'
    },
    {
        id: 12,
        name: 'Peachmanu Glow Lip Serum',
        category: 'Lip Products',
        price: 'Rs 2999',
        original_price: 'Rs 4299',
        stock: 22,
        finish: 'Soft Glossy Shine',
        benefits: 'Lightweight, non-sticky, hydrating',
        description: 'A lightweight, hydrating lip serum that gives lips a soft, glossy shine while keeping them smooth and moisturized.',
        how_to_use: 'Apply a thin layer on your lips anytime you want hydration or shine. Reapply as needed throughout the day.',
        image: '/uploads/peachmanu glow lip serum.jpg'
    },
    {
        id: 29,
        name: 'Lip Tag Tint',
        category: 'Lip Products',
        price: 'Rs 2999',
        original_price: 'Rs 4299',
        stock: 30,
        finish: 'Velvet Matte',
        benefits: 'High pigment, long wear',
        description: 'A vibrant lip tint that provides long-lasting color with a soft velvet matte finish. Perfect for all-day wear.',
        how_to_use: 'Apply to center of lips and blend outwards for a gradient effect.',
        image: '/uploads/Tag.jpg'
    },
    {
        id: 30,
        name: 'Lip Shades Palette',
        category: 'Lip Products',
        price: 'Rs 2999',
        original_price: 'Rs 4299',
        stock: 15,
        finish: 'Multi-finish',
        benefits: 'Versatile, moisturizing',
        description: 'A collection of our most popular lip shades in one palette. Choose from matte to glossy finishes to suit any mood.',
        how_to_use: 'Use a lip brush to apply and mix shades for a custom look.',
        image: '/uploads/Tag.jpg'
    },

    // Skincare Products
    {
        id: 13,
        name: 'Grace Day Sheet Mask - Collagen',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 40,
        description: 'Grace Day sheet masks are Korean skincare products featuring a soft cellulose sheet infused with various essences (like Snail, Collagen, Hyaluronic Acid, Honey, Tea Tree, Rose, or Aloe) to deliver targeted hydration, nourishment, soothing, or anti-aging benefits, leaving skin soft, glowing, elastic, and revitalized for all skin types, often with a focus on natural ingredients and a gentle feel.',
        how_to_use: '1. Clean your face with face wash and pat dry.\n2. Open the mask and gently place it on your face, aligning eyes, nose, and lips.\n3. Leave it on for 15–20 minutes.\n4. Remove the mask and gently massage the remaining serum into your skin.\n5. Do not wash your face after.\n6. Finish with moisturizer if needed.',
        image: '/uploads/collagn.png'
    },
    {
        id: 14,
        name: 'Grace Day Sheet Mask - Aloe Vera',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 35,
        skin_type: 'Sensitive & Dry',
        benefits: 'Soothing, cooling, moisturizing',
        description: 'Infused with Aloe Vera, this mask provides immediate relief to tired skin, offering deep hydration and a soothing effect.',
        how_to_use: 'Place on face for 15-20 minutes. Best used after high sun exposure.',
        image: '/uploads/alove.png'
    },
    {
        id: 15,
        name: 'Grace Day Sheet Mask - Tea Tree',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 30,
        skin_type: 'Oily & Acne-Prone',
        benefits: 'Anti-bacterial, calming, oil-control',
        description: 'The Tea Tree sheet mask helps control excess sebum and calms irritation, perfect for clearer skin.',
        how_to_use: 'Apply for 15-20 minutes on clean skin.',
        image: '/uploads/tea_tree-removebg-preview.png'
    },
    {
        id: 16,
        name: 'Grace Day Sheet Mask - Honey',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 25,
        skin_type: 'Dry Skin',
        benefits: 'Nourishing, glowing, softening',
        description: 'Enriched with honey extract, this mask provides deep nourishment and a natural glow, leaving skin feeling silky smooth.',
        how_to_use: 'Apply to clean face for 15-20 minutes and massage in essence.',
        image: '/uploads/face_mask_honey.png'
    },
    {
        id: 17,
        name: 'Grace Day Sheet Mask - Pomegranate',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 20,
        skin_type: 'Aging Skin',
        benefits: 'Firming, revitalizing, antioxidant',
        description: 'Pomegranate extract helps firm and revitalize the skin while providing strong antioxidant protection.',
        how_to_use: 'Use 2-3 times a week for 20 minutes for best results.',
        image: '/uploads/face_mask_pome.png'
    },
    {
        id: 18,
        name: 'Grace Day Sheet Mask - Rose',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 15,
        skin_type: 'Dull Skin',
        benefits: 'Brightening, hydrating, calming',
        description: 'The Rose mask focuses on brightening the complexion and providing deep hydration with a calming floral scent.',
        how_to_use: 'Apply to face and relax for 15-20 minutes.',
        image: '/uploads/face_maskrose.png'
    },
    {
        id: 19,
        name: 'Grace Day Sheet Mask - Vitamin C',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 12,
        skin_type: 'Tired Skin',
        benefits: 'Instant radiance, brightening',
        description: 'Packed with Vitamin C to revitalize dull and tired skin, providing an instant radiation boost.',
        how_to_use: 'Massage remaining serum into neck and chest after removing mask.',
        image: '/uploads/vitamin_c-removebg-preview.png'
    },
    {
        id: 20,
        name: 'Grace Day Sheet Mask - Cucumber',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 18,
        skin_type: 'All Skin Types',
        benefits: 'Cooling, hydrating, refreshing',
        description: 'Cucumber extract provides a cool, refreshing sensation while deeply hydrating the skin.',
        how_to_use: 'Perfect for use after a long day in the sun.',
        image: '/uploads/cucumber.png'
    },
    {
        id: 21,
        name: 'Grace Day Sheet Mask - Hyaluronic Acid',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 22,
        skin_type: 'Very Dry Skin',
        benefits: 'Intense hydration, plumping',
        description: 'Infused with Hyaluronic Acid for intense hydration that plumps the skin and reduces fine lines.',
        how_to_use: 'Apply to clean face and leave for 20 minutes.',
        image: '/uploads/hydration.png'
    },
    {
        id: 22,
        name: 'Grace Day Sheet Mask - Pearl Essence',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1270',
        stock: 10,
        skin_type: 'All Skin Types',
        benefits: 'Luminous glow, evening skin tone',
        description: 'Pearl extract helps even out skin tone and provides a luminous, pearlescent glow to the face.',
        how_to_use: 'Use weekly for maintained radiance.',
        image: '/uploads/face_mask_shee.png'
    },
    {
        id: 23,
        name: 'Jas Perfect Foam - Collagen',
        category: 'Skincare',
        price: 'Rs 1899',
        original_price: 'Rs 2700',
        stock: 15,
        description: 'Jas Perfect Foam is a gentle facial cleanser that creates a soft, foamy lather to remove dirt, oil, and makeup from your skin. It leaves your face clean, fresh, and smooth without feeling tight or dry.',
        how_to_use: '1. Wet your face with water.\n2. Squeeze a small amount of the foam onto your palms.\n3. Gently massage the foam onto your face in circular motions.\n4. Rinse thoroughly with water.\n5. Pat dry with a towel.',
        image: '/uploads/jas_perfect_face_wash__2.png'
    },
    {
        id: 24,
        name: 'Jas Perfect Foam - White',
        category: 'Skincare',
        price: 'Rs 1899',
        original_price: 'Rs 2700',
        stock: 20,
        skin_type: 'Dull Skin',
        benefits: 'Brightening, deep cleaning',
        description: 'The White variant focuses on brightening the skin tone during your daily cleansing routine.',
        how_to_use: 'Use morning and evening for best results.',
        image: '/uploads/jas_perfect_face_wash.png'
    },
    {
        id: 25,
        name: 'Jas Perfect Foam - Acne Care',
        category: 'Skincare',
        price: 'Rs 1899',
        original_price: 'Rs 2700',
        stock: 12,
        skin_type: 'Acne-Prone Skin',
        benefits: 'Oil control, clearing, soothing',
        description: 'Specifically formulated to help clear acne and control excess oil without drying out the skin.',
        how_to_use: 'Gently massage onto affected areas and rinse well.',
        image: '/uploads/jas_perfect_facewash-removebg-preview.png'
    },
    {
        id: 26,
        name: 'Jas Perfect Foam - Hydro',
        category: 'Skincare',
        price: 'Rs 1899',
        original_price: 'Rs 2700',
        stock: 18,
        skin_type: 'Dry & Sensitive',
        benefits: 'Moisturizing wash, soft foam',
        description: 'The Hydro variant provides a moisturizing cleanse that leaves skin feeling soft and hydrated.',
        how_to_use: 'Perfect for a gentle morning cleanse.',
        image: '/uploads/jas_perfect_facewash__2_.png'
    },
    {
        id: 27,
        name: 'Pure Micro Whip Cleansing Foam',
        category: 'Skincare',
        price: 'Rs 1999',
        original_price: 'Rs 2850',
        stock: 10,
        skin_type: 'All Skin Types',
        benefits: 'Pore-purifying, ultra-fine lather',
        description: 'A "pure micro whip cleansing foam" is a facial cleanser known for its rich, dense, ultra-fine foam that deeply cleans pores by lifting dirt, oil, and dead skin cells while remaining gentle and hydrating.',
        how_to_use: '1. Wet your face with water.\n2. Take a small amount of cleansing foam on your hand.\n3. Gently massage on face in circular motions.\n4. Rinse well with lukewarm water.\n5. Pat dry with a towel.',
        image: '/uploads/misha_face_cleansing-removebg-preview.png'
    },
    {
        id: 28,
        name: 'Green Tea Deep Cleansing Foam',
        category: 'Skincare',
        price: 'Rs 1999',
        original_price: 'Rs 2850',
        stock: 14,
        skin_type: 'Oily & Combination',
        benefits: 'Antioxidant, refreshing cleanse',
        description: 'Enriched with green tea extract to provide a refreshing and antioxidant-rich cleansing experience.',
        how_to_use: 'Rinse with lukewarm water after massaging face.',
        image: '/uploads/skincare-removebg-preview.png'
    },
    {
        id: 31,
        name: 'Hyaluronic Acid Essence',
        category: 'Skincare',
        price: 'Rs 1999',
        original_price: 'Rs 2850',
        stock: 12,
        skin_type: 'Dry Skin',
        benefits: 'Intense moisture, smooth texture',
        description: 'A powerful hydrating essence that locks in moisture for a plump and youthful appearance.',
        how_to_use: 'Apply after toner. Pat gently onto face.',
        image: '/uploads/hydration.png'
    },
    {
        id: 32,
        name: 'Collagen Firming Cream',
        category: 'Skincare',
        price: 'Rs 1999',
        original_price: 'Rs 2999',
        stock: 8,
        skin_type: 'Aging Skin',
        benefits: 'Firming, reduces fine lines',
        description: 'Rich in collagen, this cream helps restore skin elasticity and firmness.',
        how_to_use: 'Use as the last step of your skincare routine.',
        image: '/uploads/collagn.png'
    },
    {
        id: 33,
        name: 'Vitamin C Brightening Serum',
        category: 'Skincare',
        price: 'Rs 899',
        original_price: 'Rs 1299',
        stock: 15,
        skin_type: 'All Skin Types',
        benefits: 'Brightening, antioxidant',
        description: 'Vibrant and effective, this serum targets dark spots and dullness.',
        how_to_use: 'Apply 2-3 drops before moisturizer.',
        image: '/uploads/vitamin_c-removebg-preview.png'
    }
];

// Clear existing products and seed new ones
async function seedProducts() {
  console.log('Starting to connect and seed products...');

  try {
    await connectDB();
    
    // Clear existing products
    console.log('Clearing existing products...');
    await Product.deleteMany({});

    for (const product of products) {
      // Remove id before creating to let MongoDB generate _id, 
      // but if we want to preserve exact old ids, we can set _id: new mongoose.Types.ObjectId(...)
      // Or just let it be a new _id. We'll simply let MongoDB handle it.
      const { id, ...productData } = product;

      const newProduct = new Product(productData);
      await newProduct.save();

      console.log(`✓ Product "${product.name}" added`);
    }

    console.log('\n✅ All products seeded successfully!');
    console.log(`   Total products: ${products.length}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error.message);
    process.exit(1);
  }
}

seedProducts();
