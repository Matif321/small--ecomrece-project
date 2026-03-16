import { connectDB } from './config/database.js';
import { Product } from './models/Product.js';

const check = async () => {
  try {
    await connectDB();
    const count = await Product.countDocuments();
    console.log(`\n=== DATABASE CHECK ===`);
    console.log(`Products in DB: ${count}`);
    if (count > 0) {
      const sample = await Product.findOne({});
      console.log('Sample product:\n', JSON.stringify(sample, null, 2));
    }
    console.log(`======================\n`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

check();
