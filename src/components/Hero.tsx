import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Awaken your inner light — one crystal at a time.";
  const title = "Mira Crystals";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("quotes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Particles with Spark Trails */}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}>
            <div className="w-3 h-3 bg-gold-400 rounded-full animate-sparkle" />
            <motion.div
              className="absolute inset-0 w-6 h-6 bg-gold-300/30 rounded-full blur-sm -translate-x-1.5 -translate-y-1.5"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12">
          {/* Animated Title with Floating Letters */}
          <div className="mb-8">
            <div className="flex justify-center items-center flex-wrap gap-2">
              {title.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-6xl md:text-8xl font-serif font-bold text-sage-800 inline-block"
                  whileHover={{
                    scale: 1.2,
                    color: "#D97706",
                    textShadow: "0 0 20px rgba(217, 119, 6, 0.5)",
                  }}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle with Mist Effect */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="h-20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-100/30 to-transparent animate-mist" />
            <p className="text-2xl md:text-3xl text-sage-600 font-sans font-medium relative z-10">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-gold-500">
                |
              </motion.span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="space-y-8">
          <motion.p
            className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-serif"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}>
            Discover the healing power of authentic crystals, carefully selected
            to guide your spiritual journey and restore your natural balance
            through ancient wisdom and modern energy healing.
          </motion.p>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5, type: "spring" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(90, 122, 90, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="relative bg-gradient-to-r from-sage-600 to-sage-700 text-white px-10 py-4 rounded-full font-medium text-xl shadow-xl hover:from-sage-700 hover:to-sage-800 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Explore Our Sacred Collection</span>

            {/* Pulsating Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-sage-400/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToNext}>
        <div className="relative">
          <ChevronDown className="h-10 w-10 text-sage-600 group-hover:text-gold-500 transition-colors duration-300" />
          <motion.div
            className="absolute inset-0 border-2 border-sage-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
