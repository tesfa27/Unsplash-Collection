import Collection from "../models/Collection.js";

// Get all collections
export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find().select('-images');
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get specific collection
export const getCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }
    res.json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new collection
export const createCollection = async (req, res) => {
  try {
    const { name } = req.body;
    const collection = new Collection({ name });
    await collection.save();
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add image to collection
export const addImageToCollection = async (req, res) => {
  try {
    const { imageId, url, thumbnailUrl, altDescription } = req.body;
    const collection = await Collection.findById(req.params.id);
    
    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    // Check if image already exists
    const existingImage = collection.images.find(img => img.imageId === imageId);
    if (existingImage) {
      return res.status(400).json({ error: "Image already in collection" });
    }

    collection.images.push({ imageId, url, thumbnailUrl, altDescription });
    await collection.save();
    
    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove image from collection
export const removeImageFromCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    
    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    collection.images = collection.images.filter(img => img.imageId !== req.params.imageId);
    await collection.save();
    
    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get images in collection
export const getCollectionImages = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).select('images');
    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }
    res.json(collection.images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};