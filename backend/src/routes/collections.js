import express from "express";
import {
  getCollections,
  getCollection,
  createCollection,
  addImageToCollection,
  removeImageFromCollection,
  getCollectionImages
} from "../controllers/collectionController.js";
import { ensureDbConnection } from "../middleware/dbMiddleware.js";

const router = express.Router();

// Apply database connection middleware to all routes
router.use(ensureDbConnection);

// GET /api/collections - Retrieve all collections
router.get("/", getCollections);

// POST /api/collections - Create new collection
router.post("/", createCollection);

// GET /api/collections/:id - Retrieve specific collection
router.get("/:id", getCollection);

// POST /api/collections/:id/images - Add image to collection
router.post("/:id/images", addImageToCollection);

// DELETE /api/collections/:id/images/:imageId - Remove image from collection
router.delete("/:id/images/:imageId", removeImageFromCollection);

// GET /api/collections/:id/images - Get images in collection
router.get("/:id/images", getCollectionImages);

export default router;