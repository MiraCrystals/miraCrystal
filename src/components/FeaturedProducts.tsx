"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/product/getAllProducts`
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
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-bold text-sage-800 mb-8"
            animate={{
              textShadow: [
                "0 0 0px rgba(90, 122, 90, 0)",
                "0 0 20px rgba(90, 122, 90, 0.3)",
                "0 0 0px rgba(90, 122, 90, 0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}>
            Sacred Crystal Collection
          </motion.h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            Handpicked crystals to support your healing journey and spiritual
            awakening
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id || index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, rotateY: 5, rotateX: 5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden group relative cursor-pointer"
              onClick={() => navigate(`/product/${product._id}`)}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-sage-200/20 via-transparent to-gold-200/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ scale: [1, 1.05, 1], opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative overflow-hidden">
                <motion.img
                  src={product.photo}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-6 relative">
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
                  <motion.span
                    className="text-2xl font-bold text-sage-800"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}>
                    ₹{product.price}
                  </motion.span>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product._id}`);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:from-sage-700 hover:to-sage-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

          {products.length === 0 && (
            <p className="col-span-full text-center text-sage-400">
              No products found.
            </p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(90, 122, 90, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-sage-600 text-sage-600 px-10 py-4 rounded-full font-medium text-lg hover:bg-sage-600 hover:text-white transition-all duration-300">
            <span className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Explore Full Collection</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
