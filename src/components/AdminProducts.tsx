"use client";

import { useState, useEffect } from "react";

const apiUrl = import.meta.env.BASE_URLL;

const AdminProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    moreDetails: "",
    photo: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `http://miracrystal-backend.onrender.com/api/product/getAllProducts`
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({
      name: "",
      price: "",
      description: "",
      moreDetails: "",
      photo: "",
    });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setEditId(product._id);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      moreDetails: product.moreDetails || "",
      photo: product.photo,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isEditing
        ? `http://miracrystal-backend.onrender.com/api/product/update/${editId}`
        : `http://miracrystal-backend.onrender.com/api/product/create`;

      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Saved:", result);

      setShowModal(false);
      setEditId(null);
      setIsEditing(false);
      setFormData({
        name: "",
        price: "",
        description: "",
        moreDetails: "",
        photo: "",
      });
      fetchProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/api/product/delete/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log("Deleted:", result);
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-sage-50 py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-sage-800">
            📦 Manage Products
          </h2>
          <button
            onClick={openAddModal}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg shadow">
            + Add Product
          </button>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-sage-200">
            <thead className="bg-sage-100 text-sage-700">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod._id} className="border-b">
                  <td className="p-3">{prod.name}</td>
                  <td className="p-3">₹{prod.price}</td>
                  <td className="p-3">
                    <img
                      src={prod.photo}
                      alt={prod.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => openEditModal(prod)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(prod._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-400">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
                value={formData.name}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                value={formData.price}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Short Description"
                onChange={handleChange}
                value={formData.description}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="moreDetails"
                placeholder="More Details"
                onChange={handleChange}
                value={formData.moreDetails}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="photo"
                placeholder="Image URL"
                onChange={handleChange}
                value={formData.photo}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setIsEditing(false);
                    setEditId(null);
                  }}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700">
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
