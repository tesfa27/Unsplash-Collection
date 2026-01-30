import { create } from 'zustand'
import { collectionsApi } from '../services/collectionsApi'

export const useCollectionsStore = create((set, get) => ({
  collections: [],
  currentCollection: null,
  loading: false,
  error: null,
  hasLoaded: false,

  fetchCollections: async () => {
    const { hasLoaded, loading } = get()
    if (hasLoaded || loading) return
    
    set({ loading: true, error: null })
    try {
      const collections = await collectionsApi.getCollections()
      set({ collections, loading: false, hasLoaded: true })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  fetchCollection: async (id) => {
    set({ loading: true, error: null })
    try {
      const collection = await collectionsApi.getCollection(id)
      set({ currentCollection: collection, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  createCollection: async (name) => {
    set({ loading: true, error: null })
    try {
      const newCollection = await collectionsApi.createCollection(name)
      set(state => ({ 
        collections: [...state.collections, newCollection], 
        loading: false 
      }))
      return newCollection
    } catch (error) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  addImageToCollection: async (collectionId, imageData) => {
    try {
      const updatedCollection = await collectionsApi.addImageToCollection(collectionId, imageData)
      set(state => ({
        collections: state.collections.map(c => 
          c._id === collectionId ? updatedCollection : c
        ),
        currentCollection: state.currentCollection?._id === collectionId ? updatedCollection : state.currentCollection
      }))
    } catch (error) {
      set({ error: error.message })
      throw error
    }
  },

  removeImageFromCollection: async (collectionId, imageId) => {
    try {
      const updatedCollection = await collectionsApi.removeImageFromCollection(collectionId, imageId)
      set(state => ({
        collections: state.collections.map(c => 
          c._id === collectionId ? updatedCollection : c
        ),
        currentCollection: state.currentCollection?._id === collectionId ? updatedCollection : state.currentCollection
      }))
    } catch (error) {
      set({ error: error.message })
      throw error
    }
  },

  clearError: () => set({ error: null }),
  clearCurrentCollection: () => set({ currentCollection: null })
}))