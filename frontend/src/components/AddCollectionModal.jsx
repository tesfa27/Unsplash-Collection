import { useState } from "react"
import { useCollectionsStore } from "../stores/collectionsStore"

const AddCollectionModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("")
  const { createCollection, loading } = useCollectionsStore()

  const handleSave = async () => {
    if (!name.trim()) return
    
    try {
      await createCollection(name.trim())
      setName("")
      onClose()
    } catch (error) {
      console.error("Failed to create collection:", error)
    }
  }

  const handleCancel = () => {
    setName("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 shadow-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Collection</h2>
        
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter collection name"
            autoFocus
          />
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleSave}
            disabled={!name.trim() || loading}
            className="px-4 py-2 bg-gray-200  rounded-sm text-sm text-bold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            disabled={loading}
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  )
}

export default AddCollectionModal