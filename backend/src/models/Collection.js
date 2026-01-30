import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  images: [{
    imageId: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    thumbnailUrl: String,
    altDescription: String,
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

collectionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("Collection", collectionSchema);