import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { productId } = useParams(); // this should be the MongoDB ID
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${process.env.BASE_URL}/api/product/${productId}`
        );
        const data = await res.json();
        if (res.ok) {
          setProduct(data);
        } else {
          console.error("Error:", data.error);
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Loading or product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setTimeout(() => navigate("/cart"), 150);
  };

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-16 px-6 bg-gradient-to-br from-sage-50 via-white to-gold-50 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Image */}
          <motion.img
            src={product.photo}
            alt={product.name}
            className="w-full h-[450px] object-cover"
            initial={{ opacity: 0.7, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              {/* Rating */}
              <div className="flex items-center mb-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-gold-400 fill-current"
                  />
                ))}
              </div>

              <h1 className="text-4xl font-serif font-bold text-sage-800 mb-3">
                {product.name}
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-sage-100 px-3 py-1 text-xs rounded-full">
                  Energy Boost
                </span>
                <span className="bg-gold-100 px-3 py-1 text-xs rounded-full">
                  Heart Chakra
                </span>
              </div>

              <p className="text-sage-600 mb-6 font-handwritten text-lg">
                {product.description}
              </p>

              <div className="space-y-4 text-sm text-sage-700">
                <div>
                  <h4 className="font-semibold text-sage-900">
                    ✨ Healing Benefits:
                  </h4>
                  <p>
                    Supports emotional clarity, peace, and balance. Resonates
                    deeply with your inner self.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900">
                    🌍 Crystal Origin:
                  </h4>
                  <p>Ethically sourced from sacred mines in Brazil.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900">
                    🧼 Care Instructions:
                  </h4>
                  <ul className="list-disc list-inside ml-2">
                    <li>Cleanse under moonlight monthly</li>
                    <li>Avoid harsh sunlight</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Price & Cart */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center space-x-6">
                <span className="text-3xl font-bold text-sage-800">
                  ₹{product.price}
                </span>
                <div className="flex items-center gap-2">
                  <label htmlFor="qty" className="text-sm text-sage-700">
                    Qty:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value)))
                    }
                    className="w-16 px-2 py-1 border border-sage-300 rounded"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
