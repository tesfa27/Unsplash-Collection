import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import collectionRoutes from './routes/collections.js';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/collections', collectionRoutes);

// Root Route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

// Export the "app" object
export default app;