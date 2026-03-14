import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  price: {
    type: String,
    required: [true, 'Price is required']
  },
  original_price: {
    type: String
  },
  stock: {
    type: Number,
    default: 0
  },
  finish: {
    type: String
  },
  skin_type: {
    type: String
  },
  benefits: {
    type: String
  },
  description: {
    type: String
  },
  how_to_use: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  toJSON: {
    transform: function(doc, ret) {
      // Map MongoDB _id to id for backwards compatibility
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes for optimization
productSchema.index({ category: 1 });
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ price: 1 });

// Create and export the model
export const Product = mongoose.model('Product', productSchema);
