import express from "express";
import {
  getCollections,
  getCollection,
  createCollection,
  addImageToCollection,
  removeImageFromCollection,
  getCollectionImages
} from "../controllers/collectionController.js";
import { validateCollection, validateImage } from "../middleware/validation.js";

const router = express.Router();

// GET /api/collections - Retrieve all collections
router.get("/", getCollections);

// POST /api/collections - Create new collection
router.post("/", validateCollection, createCollection);

// GET /api/collections/:id - Retrieve specific collection
router.get("/:id", getCollection);

// POST /api/collections/:id/images - Add image to collection
router.post("/:id/images", validateImage, addImageToCollection);

// DELETE /api/collections/:id/images/:imageId - Remove image from collection
router.delete("/:id/images/:imageId", removeImageFromCollection);

// GET /api/collections/:id/images - Get images in collection
router.get("/:id/images", getCollectionImages);

export default router;