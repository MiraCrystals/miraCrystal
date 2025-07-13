import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chakraData = [
  {
    name: "Root Chakra",
    sanskrit: "Muladhara",
    color: "from-red-500 to-red-700",
    crystal: "Red Jasper",
    affirmation: "I am grounded, safe, and secure.",
    element: "Earth",
    description:
      "Located at the base of the spine, it represents our foundation and sense of grounding.",
  },
  {
    name: "Sacral Chakra",
    sanskrit: "Svadhisthana",
    color: "from-orange-400 to-orange-600",
    crystal: "Carnelian",
    affirmation: "I embrace creativity, pleasure, and passion.",
    element: "Water",
    description:
      "Situated below the navel, it governs emotions, sensuality, and creative energy.",
  },
  {
    name: "Solar Plexus Chakra",
    sanskrit: "Manipura",
    color: "from-yellow-400 to-yellow-600",
    crystal: "Citrine / Tiger's Eye",
    affirmation: "I am confident, powerful, and determined.",
    element: "Fire",
    description:
      "Located above the navel, it's the core of self-esteem, willpower, and inner strength.",
  },
  {
    name: "Heart Chakra",
    sanskrit: "Anahata",
    color: "from-green-400 to-emerald-500",
    crystal: "Green Aventurine",
    affirmation: "I give and receive love freely and fully.",
    element: "Air",
    description:
      "At the center of the chest, it bridges the physical and spiritual through love and compassion.",
  },
  {
    name: "Throat Chakra",
    sanskrit: "Vishuddha",
    color: "from-blue-400 to-blue-600",
    crystal: "Lapis Lazuli",
    affirmation: "I express my truth with clarity and love.",
    element: "Sound",
    description:
      "Located in the throat, it rules communication and self-expression.",
  },
  {
    name: "Third Eye Chakra",
    sanskrit: "Ajna",
    color: "from-indigo-500 to-indigo-700",
    crystal: "Amethyst",
    affirmation: "I trust my intuition and inner wisdom.",
    element: "Light",
    description:
      "Between the brows, it governs insight, clarity, and spiritual awareness.",
  },
  {
    name: "Crown Chakra",
    sanskrit: "Sahasrara",
    color: "from-purple-500 to-white",
    crystal: "Clear Quartz",
    affirmation: "I am connected to the divine and universal energy.",
    element: "Cosmic",
    description:
      "At the crown of the head, it connects us to the universe and higher consciousness.",
  },
];

const ChakraShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % chakraData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const chakra = chakraData[current];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-sage-50 to-sage-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Chakra Circle and Animation */}
        <div
          className="relative flex items-center justify-center min-h-[600px]"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          >
            {chakraData.map((chakra, index) => {
              const angle = (index * 360) / chakraData.length;
              const radius = 220;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);
              const active = index === current;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 48px)`,
                    top: `calc(50% + ${y}px - 48px)`,
                    zIndex: active ? 30 : 10,
                  }}
                  animate={{ scale: active ? 1.6 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onClick={() => {
                    setCurrent(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 8000);
                  }}
                >
                  <motion.div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${chakra.color} flex items-center justify-center text-white shadow-xl relative`}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: active
                        ? "0 0 35px 12px rgba(255,255,255,0.8)"
                        : "0 4px 15px rgba(0, 0, 0, 0.2)",
                      filter: active ? "brightness(1.5)" : "brightness(1)",
                    }}
                  >
                    <span className="text-sm font-bold text-center">
                      {chakra.name.split(" ")[0]}
                    </span>
                    {active && (
                      <motion.div
                        className="absolute inset-0 border-4 border-white rounded-full"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 0.2, 0.6],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center OM */}
          <motion.div
            className="absolute z-30 w-32 h-32 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="text-4xl text-white"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              🕉
            </motion.div>
          </motion.div>
        </div>

        {/* Chakra Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
              {chakra.name}{" "}
              <span className="text-gold-500">({chakra.sanskrit})</span>
            </h2>
            <p className="text-lg text-sage-700 mb-6">{chakra.description}</p>
            <blockquote className="italic text-2xl text-sage-800 font-serif mb-4">
              “{chakra.affirmation}”
            </blockquote>
            <p className="text-sm text-sage-600">
              <strong>Crystal:</strong> {chakra.crystal} &nbsp;|&nbsp;
              <strong>Element:</strong> {chakra.element}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-16 space-x-3">
        {chakraData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoPlay(false);
              setTimeout(() => setAutoPlay(true), 8000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-purple-500" : "bg-sage-300"
            }`}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: index === current ? 1.2 : 1,
              boxShadow:
                index === current
                  ? "0 0 12px rgba(168, 85, 247, 0.5)"
                  : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ChakraShowcase;
