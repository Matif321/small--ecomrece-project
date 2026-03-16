import { connectDB } from './config/database.js';
import { Product } from './models/Product.js';

const seedProducts = [
  {
      name: 'Slim Brown Eyeliner',
      category: 'Eyes Products',
      price: '899',
      original_price: '1299',
      stock: 12,
      finish: 'Matte & Natural',
      benefits: 'Long-lasting, smudge-proof, easy application',
      description: 'Slim Brown Eyeliner gives a natural and soft eye look.',
      how_to_use: 'Start with clean, dry eyelids. Gently draw a thin line.',
      image: '/placeholder-image.png'
  },
  {
      name: 'Volume Mascara',
      category: 'Eyes Products',
      price: '999',
      original_price: '1399',
      stock: 15,
      finish: 'Intense Black',
      benefits: 'Thickening, lengthening, clump-free',
      description: 'Volume mascara makes eyelashes look thicker, fuller, and darker.',
      how_to_use: 'Start with clean, dry eyelashes. Apply mascara from root to tip.',
      image: '/placeholder-image.png'
  },
  {
      name: 'Peachmanu Glow Cream',
      category: 'Face Products',
      price: '3499',
      original_price: '4899',
      stock: 14,
      skin_type: 'Sensitive & Normal',
      benefits: 'Hydrating, soothing, skin-smoothing',
      description: 'Peach Manu Glow Cream by Parnell is a K-beauty moisturizing cream.',
      how_to_use: 'Cleanse your face first. Take a small amount and massage.',
      image: '/placeholder-image.png'
  },
  {
      name: 'Cleaderm Lip Serum',
      category: 'Lip Products',
      price: '2999',
      original_price: '4299',
      stock: 18,
      finish: 'Glossy & Plump',
      benefits: 'Collagen-infused, blurs lip wrinkles',
      description: 'A viscous, collagen textured lip serum.',
      how_to_use: 'Spread evenly across the lips.',
      image: '/placeholder-image.png'
  },
  {
      name: 'Grace Day Sheet Mask - Aloe Vera',
      category: 'Skincare',
      price: '899',
      original_price: '1270',
      stock: 35,
      skin_type: 'Sensitive & Dry',
      benefits: 'Soothing, cooling, moisturizing',
      description: 'Infused with Aloe Vera, this mask provides immediate relief.',
      how_to_use: 'Place on face for 15-20 minutes.',
      image: '/placeholder-image.png'
  },
  {
      name: 'Hansam Korean Herbal Hair Oil',
      category: 'Herbal Wellness',
      price: '3699',
      original_price: '3499',
      stock: 45,
      benefits: 'Growth boost, strengthening, silky shine',
      description: 'Korean Herbal Traditional Oil that boosts hair growth.',
      how_to_use: 'Apply a small amount to the scalp and hair roots.',
      image: '/placeholder-image.png'
  }
];

const runSeed = async () => {
  try {
    await connectDB();
    console.log('Clearing old products...');
    await Product.deleteMany({});
    
    console.log('Inserting sample valid products...');
    await Product.insertMany(seedProducts);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
};

runSeed();
