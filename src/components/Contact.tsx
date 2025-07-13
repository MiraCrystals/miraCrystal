import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Heart,
  Sparkles,
} from "lucide-react";

const apiUrl = import.meta.env.BASE_URLL;

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch(
      `https://miracrystal-backend.onrender.com/api/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();
    alert(result.message);
    form.reset(); // optional
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message");
  }
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-sage-200/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-gold-200/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
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
            Sacred Connection
          </motion.h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            Ready to begin your crystal journey? Let's connect and find the
            perfect stones for your soul's path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-sage-800 mb-8">
                Reach Out to Our Sacred Space
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:hello@mayracrystals.com"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <motion.div
                    className="bg-sage-100 p-4 rounded-full group-hover:bg-sage-200 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <Mail className="h-6 w-6 text-sage-600" />
                  </motion.div>
                  <div>
                    <div className="font-serif font-bold text-sage-800 text-lg">
                      Sacred Correspondence
                    </div>
                    <div className="text-sage-600 font-sans">
                      hello@mayracrystals.com
                    </div>
                  </div>

                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.a>

                <motion.a
                  href="https://wa.me/1234567890"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <motion.div
                    className="bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}>
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </motion.div>
                  <div>
                    <div className="font-serif font-bold text-sage-800 text-lg">
                      Instant Spiritual Guidance
                    </div>
                    <div className="text-sage-600 font-sans">
                      WhatsApp for immediate crystal wisdom
                    </div>
                  </div>

                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group relative overflow-hidden">
                  <motion.div
                    className="bg-earth-100 p-4 rounded-full"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}>
                    <MapPin className="h-6 w-6 text-earth-600" />
                  </motion.div>
                  <div>
                    <div className="font-serif font-bold text-sage-800 text-lg">
                      Global Energy Network
                    </div>
                    <div className="text-sage-600 font-sans">
                      Serving souls worldwide with love
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-sage-50 via-gold-50 to-sage-50 p-8 rounded-3xl border border-sage-200/50 relative overflow-hidden">
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}>
                <Sparkles className="h-6 w-6 text-gold-500" />
              </motion.div>

              <h4 className="font-serif font-bold text-sage-800 mb-4 text-xl flex items-center space-x-2">
                <Heart className="h-5 w-5 text-rose-500" />
                <span>Personal Crystal Consultation</span>
              </h4>
              <p className="text-sage-600 leading-relaxed font-sans text-lg">
                Not sure which crystal resonates with your energy? Book a sacred
                consultation with Mira to discover the perfect stone allies for
                your unique spiritual journey and healing intentions.
              </p>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            {/* Mystical Border Animation */}
            <motion.div
              className="absolute inset-0 border-2 border-gold-400/30 rounded-3xl"
              animate={{
                borderColor: [
                  "rgba(217, 119, 6, 0.3)",
                  "rgba(90, 122, 90, 0.3)",
                  "rgba(217, 119, 6, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h3 className="text-3xl font-serif font-bold text-sage-800 mb-8 text-center">
              Send Your Sacred Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                    First Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Your sacred name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                    Last Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Your family essence"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="your.soul@universe.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                  Your Sacred Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows={5}
                  name="message"
                  className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                  placeholder="Share your crystal journey, intentions, or questions about your spiritual path..."></motion.textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(90, 122, 90, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-sage-600 to-sage-700 text-white py-4 rounded-xl font-medium text-lg hover:from-sage-700 hover:to-sage-800 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Sacred Message</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}>
                    <Sparkles className="h-5 w-5" />
                  </motion.div>
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-sage-400/20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
