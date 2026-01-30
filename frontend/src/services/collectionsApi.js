import { backendApiClient } from './backendApiClient'

export const collectionsApi = {
  getCollections: () => 
    backendApiClient('/api/collections'),
  
  getCollection: (id) => 
    backendApiClient(`/api/collections/${id}`),
  
  createCollection: (name) => 
    backendApiClient('/api/collections', {
      method: 'POST',
      body: JSON.stringify({ name })
    }),
  
  addImageToCollection: (collectionId, imageData) => 
    backendApiClient(`/api/collections/${collectionId}/images`, {
      method: 'POST',
      body: JSON.stringify(imageData)
    }),
  
  removeImageFromCollection: (collectionId, imageId) => 
    backendApiClient(`/api/collections/${collectionId}/images/${imageId}`, {
      method: 'DELETE'
    }),
  
  getCollectionImages: (collectionId) => 
    backendApiClient(`/api/collections/${collectionId}/images`)
}