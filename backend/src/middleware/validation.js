export const validateCollection = (req, res, next) => {
  const { name } = req.body;
  
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Collection name is required' });
  }
  
  next();
};

export const validateImage = (req, res, next) => {
  const { imageId, url } = req.body;
  
  if (!imageId || !url) {
    return res.status(400).json({ error: 'Image ID and URL are required' });
  }
  
  next();
};