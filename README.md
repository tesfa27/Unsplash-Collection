# Unsplash Collection

A full-stack web application for browsing and organizing Unsplash images into custom collections.


## ✨ Features

- Browse high-quality images from Unsplash API
- Search images by keywords
- Create custom collections
- Add/remove images to/from collections
- Responsive design with Tailwind CSS
- Real-time collection management

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Styling
- **Zustand** - State management
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
Unsplash-Collection/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── services/      # API clients
│   │   ├── stores/        # Zustand stores
│   │   └── hooks/         # Custom React hooks
│   ├── public/           # Static assets
│   └── vercel.json       # Vercel routing config
├── backend/
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Route handlers
│   │   ├── models/       # MongoDB schemas
│   │   ├── routes/       # API routes
│   │   └── middleware/   # Custom middleware
│   └── server.js         # Entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Unsplash API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Unsplash-Collection
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create `.env` file:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/unsplash-collection?retryWrites=true&w=majority
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```
   
   Create `.env.local` file:
   ```env
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
   VITE_BACKEND_URL=http://localhost:3000
   ```

### Development

1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

Visit `http://localhost:5173` to view the application.

## 📡 API Endpoints

### Collections
- `GET /api/collections` - Get all collections
- `GET /api/collections/:id` - Get specific collection
- `POST /api/collections` - Create new collection
- `POST /api/collections/:id/images` - Add image to collection
- `DELETE /api/collections/:id/images/:imageId` - Remove image from collection
- `GET /api/collections/:id/images` - Get collection images

## 🌐 Deployment

### Vercel Deployment

1. **Backend**
   - Deploy to Vercel
   - Add environment variables in Vercel dashboard
   - Configure MongoDB Atlas IP whitelist

2. **Frontend**
   - Update `VITE_BACKEND_URL` to production URL
   - Deploy to Vercel
   - `vercel.json` handles client-side routing

### Environment Variables

**Backend (Vercel)**
- `MONGO_URI` - MongoDB connection string

**Frontend (Vercel)**
- `VITE_UNSPLASH_ACCESS_KEY` - Unsplash API key
- `VITE_BACKEND_URL` - Backend API URL
