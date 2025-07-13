import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [mantraWords, setMantraWords] = useState<string[]>([]);
  const mantra = "I am aligned. I am light. I am whole.";
  const words = mantra.split(" ");
  const year = new Date().getFullYear();

  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        setMantraWords((prev) => [...prev, words[wordIndex]]);
        wordIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-sage-800 via-sage-900 to-sage-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <Sparkles className="h-10 w-10 text-gold-300" />
              </motion.div>
              <span className="font-serif text-3xl font-bold">
                MiraCrystals
              </span>
            </div>

            <p className="text-sage-200 leading-relaxed mb-8 max-w-md font-sans text-lg">
              Awakening your inner light through the sacred healing power of
              authentic crystals. Each stone is lovingly selected to support
              your spiritual journey and divine transformation.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-sage-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-sage-600/50 transition-all duration-300 group relative overflow-hidden">
                <Instagram className="h-6 w-6 relative z-10" />
                <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-sage-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-sage-600/50 transition-all duration-300 group relative overflow-hidden">
                <Facebook className="h-6 w-6 relative z-10" />
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-sage-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-sage-600/50 transition-all duration-300 group relative overflow-hidden">
                <Twitter className="h-6 w-6 relative z-10" />
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="font-serif font-bold text-xl mb-6">
              Sacred Navigation
            </h3>
            <ul className="space-y-3 text-sage-200">
              {[
                "Home",
                "Crystal Collection",
                "About Mira",
                "Healing Guide",
                "Sacred Contact",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <a
                    href="#"
                    className="hover:text-gold-300 transition-colors duration-300 font-sans text-lg relative group">
                    {item}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="font-serif font-bold text-xl mb-6">
              Sacred Support
            </h3>
            <ul className="space-y-3 text-sage-200">
              {[
                "Crystal Care",
                "Energy Cleansing",
                "Spiritual Returns",
                "Healing FAQ",
                "Privacy Sacred",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <a
                    href="#"
                    className="hover:text-gold-300 transition-colors duration-300 font-sans text-lg relative group">
                    {item}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sacred Mantra Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-sage-700/50 mt-12 pt-12 text-center">
          <div className="mb-8">
            <h4 className="font-serif text-lg text-gold-300 mb-4">
              Sacred Affirmation
            </h4>
            <div className="flex flex-wrap justify-center items-center space-x-2 text-xl font-sans">
              {mantraWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-sage-200 hover:text-gold-300 transition-colors duration-300 cursor-default">
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="text-sage-300 flex items-center justify-center space-x-2 font-sans text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}>
            <span>© {year} Mira Crystals. Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}>
              <Heart className="h-5 w-5 text-rose-400 fill-current" />
            </motion.div>
            <span>for your sacred journey</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="h-4 w-4 text-gold-400" />
            </motion.div>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
