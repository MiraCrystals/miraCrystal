import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // ✅ Redirect if not authenticated
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/admin"); // Redirect to login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-sage-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-sage-800">
            👨‍💼 Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 border border-sage-200 rounded-xl hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate("/admin/products")}>
            <h2 className="text-xl font-semibold text-sage-800 mb-2">
              📦 Manage Products
            </h2>
            <p className="text-sm text-sage-600">
              Add, edit, or remove crystal products.
            </p>
          </div>

          <div
            className="p-6 border border-sage-200 rounded-xl hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate("/admin/orders")}>
            <h2 className="text-xl font-semibold text-sage-800 mb-2">
              📋 Manage Orders
            </h2>
            <p className="text-sm text-sage-600">
              Track and fulfill user orders efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
