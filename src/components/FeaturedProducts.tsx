"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://miracrystal-backend.onrender.com/api/product`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status}`);
      }

      const response = await res.json();

      if (response.success) {
        // Transform products to consistent format
        const formattedProducts = response.data.map((product) => ({
          ...product,
          // Normalize image URL
          imageUrl: product.image?.url || product.photo || "/placeholder.jpg",
          // Ensure other fields have fallbacks
          name: product.name || "Unnamed Product",
          description: product.description || "No description available",
          price: product.price || 0,
        }));
        setProducts(formattedProducts);
      } else {
        throw new Error(response.error || "Failed to load products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>Loading sacred crystals...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-red-500">
          <p>Error: {error}</p>
          <button
            onClick={fetchProducts}
            className="mt-4 bg-sage-600 text-white px-4 py-2 rounded hover:bg-sage-700 transition">
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-sage-800 mb-8">
            Sacred Crystal Collection
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            Handpicked crystals to support your healing journey and spiritual
            awakening
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden group relative cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              onClick={() => navigate(`/product/${product._id}`)}>
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.jpg";
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-sage-800 mb-2">
                  {product.name}
                </h3>

                <p className="text-sage-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sage-800">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product._id}`);
                    }}
                    className="bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:from-sage-700 hover:to-sage-800 transition-all duration-300 shadow-lg">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-sage-400 text-lg">No sacred crystals found.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <button
            className="bg-transparent border-2 border-sage-600 text-sage-600 px-10 py-4 rounded-full font-medium text-lg hover:bg-sage-600 hover:text-white transition-all duration-300"
            onClick={() => navigate("/products")}>
            <span className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Explore Full Collection</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
