import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const crystalQuotes = [
  {
    crystal: "Amethyst",
    quote: "Peace comes from within. Do not seek it without.",
    color: "from-purple-400 to-purple-600",
    chakra: "Crown",
    energy: "Spiritual Awakening",
  },
  {
    crystal: "Rose Quartz",
    quote: "Love yourself first and everything else falls into line.",
    color: "from-pink-400 to-rose-500",
    chakra: "Heart",
    energy: "Unconditional Love",
  },
  {
    crystal: "Clear Quartz",
    quote: "Clarity of mind brings clarity of purpose.",
    color: "from-gray-200 to-gray-400",
    chakra: "Crown",
    energy: "Amplification",
  },
  {
    crystal: "Citrine",
    quote: "Abundance flows to those who believe in their worth.",
    color: "from-yellow-400 to-orange-500",
    chakra: "Solar Plexus",
    energy: "Manifestation",
  },
  {
    crystal: "Green Aventurine",
    quote: "Growth begins at the end of your comfort zone.",
    color: "from-green-400 to-emerald-500",
    chakra: "Heart",
    energy: "Emotional Healing",
  },
  {
    crystal: "Black Tourmaline",
    quote: "Protection comes from inner strength and grounded energy.",
    color: "from-gray-800 to-black",
    chakra: "Root",
    energy: "Protection",
  },
];

const QuoteShowcase = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % crystalQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="quotes"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-sage-200/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-gold-200/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
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
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-sage-800 mb-8">
            Sacred Wisdom
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            Each crystal holds ancient wisdom waiting to guide your spiritual
            journey
          </p>
        </motion.div>

        {/* Circular Quote Carousel */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Chakra Symbol */}
          <motion.div
            className="absolute z-20 w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <motion.div
              className="text-4xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              🕉️
            </motion.div>
          </motion.div>

          {/* Orbiting Quotes */}
          <div className="relative w-[500px] h-[500px]">
            {crystalQuotes.map((item, index) => {
              const angle = (index * 360) / crystalQuotes.length;
              const isActive = index === currentQuote;

              return (
                <motion.div
                  key={index}
                  className="absolute w-24 h-24 cursor-pointer"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "12px 12px",
                  }}
                  animate={{
                    rotate: angle - (currentQuote * 360) / crystalQuotes.length,
                    scale: isActive ? 1.3 : 1,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  onClick={() => {
                    setCurrentQuote(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 8000);
                  }}>
                  <motion.div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: isActive
                        ? "0 0 30px rgba(217, 119, 6, 0.6)"
                        : "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}>
                    <div className="text-white font-bold text-sm text-center px-2">
                      {item.crystal.split(" ")[0]}
                    </div>

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 border-4 border-gold-400 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 0.4, 0.8],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Quote Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-full mt-16 text-center max-w-2xl">
              <motion.blockquote
                className="text-2xl md:text-3xl font-serif italic text-sage-800 mb-6 leading-relaxed"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}>
                "{crystalQuotes[currentQuote].quote}"
              </motion.blockquote>

              <div className="space-y-2">
                <h3 className="text-xl font-sans font-bold text-gold-600">
                  {crystalQuotes[currentQuote].crystal}
                </h3>
                <div className="flex justify-center space-x-6 text-sm text-sage-600">
                  <span>Chakra: {crystalQuotes[currentQuote].chakra}</span>
                  <span>•</span>
                  <span>Energy: {crystalQuotes[currentQuote].energy}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-20">
          {crystalQuotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentQuote(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 8000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuote ? "bg-gold-500" : "bg-sage-300"
              }`}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: index === currentQuote ? 1.2 : 1,
                boxShadow:
                  index === currentQuote
                    ? "0 0 15px rgba(217, 119, 6, 0.5)"
                    : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteShowcase;
