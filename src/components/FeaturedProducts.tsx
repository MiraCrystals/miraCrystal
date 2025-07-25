"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://miracrystal-backend.onrender.com/api/product/getAllProducts`
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
          {products.map((product, index) => (
            <div
              key={product._id || index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden group relative cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              onClick={() => navigate(`/product/${product._id}`)}>
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-gold-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-sage-800 mb-2 hover:underline">
                  {product.name}
                </h3>

                <p className="text-sage-600 text-sm mb-4 leading-relaxed font-handwritten">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sage-800">
                    ₹{product.price}
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
            <p className="col-span-full text-center text-sage-400">
              No products found.
            </p>
          )}
        </div>

        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-sage-600 text-sage-600 px-10 py-4 rounded-full font-medium text-lg hover:bg-sage-600 hover:text-white transition-all duration-300">
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
