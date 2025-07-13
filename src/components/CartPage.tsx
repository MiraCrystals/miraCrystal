import { useState } from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const apiUrl = import.meta.env.BASE_URLL;

const CartPage = () => {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, address } = form;
    return name && email && phone && address;
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill all fields");
      return;
    }
    setShowPaymentOptions(true);
  };

  const handleCOD = async () => {
    try {
      const response = await fetch(
        `https://miracrystal-backend.onrender.com/api/order/place-cod-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            address: form.address,
            cartItems: cart,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setOrderPlaced(true);
        clearCart();
      } else {
        alert("Failed to place order: " + result.message);
      }
    } catch (error) {
      alert("Error placing order. Please try again.");
      console.error(error);
    }
  };

  const handleRazorpay = () => {
    const options = {
      key: "rzp_test_YourKeyHere", // Replace with real key
      amount: totalPrice * 100,
      currency: "INR",
      name: "Mira Crystals",
      description: "Crystal Purchase",
      prefill: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      notes: {
        address: form.address,
      },
      handler: function (response: any) {
        console.log("Payment success", response);
        setOrderPlaced(true);
        clearCart();
      },
      theme: {
        color: "#7C9A92",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Navbar />
      <div className="pt-28 px-6 pb-20 min-h-screen bg-gradient-to-br from-sage-50 via-white to-gold-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 backdrop-blur-md border border-sage-200 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-serif font-bold text-sage-800 mb-8 text-center">
              🛒 Your Cart
            </h2>

            {cart.length === 0 && !orderPlaced ? (
              <p className="text-sage-600 text-lg text-center">
                Your cart is currently empty.
              </p>
            ) : orderPlaced ? (
              <div className="text-center py-10">
                <motion.h3
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-green-600">
                  🎉 Order Confirmed!
                </motion.h3>
                <p className="text-sage-700 mt-3">
                  Thank you for shopping with{" "}
                  <span className="font-semibold">Mira Crystals</span> ✨
                </p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <ul className="space-y-6 mb-10">
                  {cart.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex justify-between items-center border-b border-sage-200 pb-4">
                      <div>
                        <h3 className="text-xl font-bold text-sage-800">
                          {item.name}
                        </h3>
                        <p className="text-sage-600 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="text-lg font-semibold text-sage-700">
                        ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="text-right text-xl font-bold text-sage-800 mb-8">
                  Total: ₹{totalPrice.toFixed(2)}
                </div>

                {/* Checkout Form */}
                {!showPaymentOptions && (
                  <form onSubmit={handleInitialSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="border border-sage-300 rounded-xl px-4 py-2"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border border-sage-300 rounded-xl px-4 py-2"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border border-sage-300 rounded-xl px-4 py-2"
                        required
                      />
                      <textarea
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Shipping Address"
                        className="border border-sage-300 rounded-xl px-4 py-2 md:col-span-2"
                        rows={3}
                        required
                      />
                    </div>
                    <p className="text-center text-sm mt-4 text-gray-600">
                      To receive order updates on WhatsApp,&nbsp;
                      <a
                        href="https://wa.me/14155238886?text=join%20rice-slave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800">
                        click here to get WhatsApp Updates
                      </a>
                      .
                    </p>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      className="w-full mt-4 bg-sage-700 text-white py-3 rounded-full text-lg">
                      Place Order
                    </motion.button>
                  </form>
                )}

                {/* Payment Options */}
                {showPaymentOptions && (
                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-sage-800 mb-4">
                      Choose Payment Method
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <button
                        onClick={handleCOD}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold">
                        💰 Cash on Delivery
                      </button>
                      <button
                        onClick={handleRazorpay}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
                        💳 UPI Payment (Razorpay)
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
