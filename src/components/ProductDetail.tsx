import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://miracrystal-backend.onrender.com/api/product/${productId}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.status}`);
        }

        const response = await res.json();

        if (response.success) {
          // Normalize the product data structure
          const normalizedProduct = {
            ...response.data,
            // Handle both image.url and photo fields
            imageUrl:
              response.data.image?.url ||
              response.data.photo ||
              "/placeholder.jpg",
            name: response.data.name || "Unnamed Product",
            description:
              response.data.description || "No description available",
            price: response.data.price || 0,
          };
          setProduct(normalizedProduct);
        } else {
          throw new Error(response.error || "Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      setTimeout(() => navigate("/cart"), 150);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-sage-600">
          Loading sacred crystal details...
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-red-600 text-xl">
          {error || "Product not found"}
        </div>
        <button
          onClick={() => navigate("/products")}
          className="bg-sage-600 text-white px-4 py-2 rounded hover:bg-sage-700 transition">
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-16 px-6 bg-gradient-to-br from-sage-50 via-white to-gold-50 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Image */}
          <div className="relative h-[450px]">
            <motion.img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg";
              }}
            />
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              {/* Rating */}
              <div className="flex items-center mb-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
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

              {product.moreDetails && (
                <div className="mb-6 p-4 bg-sage-50 rounded-lg">
                  <h3 className="font-semibold text-sage-800 mb-2">Details:</h3>
                  <p className="text-sage-700">{product.moreDetails}</p>
                </div>
              )}

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
                  ₹{product.price.toLocaleString()}
                </span>
                <div className="flex items-center gap-2">
                  <label htmlFor="qty" className="text-sm text-sage-700">
                    Qty:
                  </label>
                  <input
                    type="number"
                    id="qty"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value || "1")))
                    }
                    className="w-16 px-2 py-1 border border-sage-300 rounded"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all">
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
