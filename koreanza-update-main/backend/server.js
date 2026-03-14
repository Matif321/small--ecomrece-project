import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productRoutes from './routes/productRoutes.js';
import { connectDB } from './config/database.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory with CORS headers
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}, express.static(join(__dirname, 'uploads')));

// API Routes
app.use('/api/products', productRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Koreanza API is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Koreanza API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      productById: '/api/products/:id',
      byCategory: '/api/products/category/:category',
      search: '/api/products/search?q=query',
      categories: '/api/products/categories'
    }
  });
});

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║           Koreanza Backend API                 ║
╠════════════════════════════════════════════════╣
║  Server running on: http://localhost:${PORT}      ║
║  API Health:      http://localhost:${PORT}/api/health
║                                                ║
║  Available Endpoints:                          ║
║  - GET    /api/products                        ║
║  - GET    /api/products/:id                    ║
║  - GET    /api/products/category/:category     ║
║  - GET    /api/products/search?q=query         ║
║  - POST   /api/products                        ║
║  - PUT    /api/products/:id                    ║
║  - DELETE /api/products/:id                    ║
╚════════════════════════════════════════════════╝
  `);
});
