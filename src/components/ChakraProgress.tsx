import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chakraData = [
  {
    name: "Root Chakra",
    sanskrit: "Muladhara",
    color: "from-red-500 to-red-700",
    crystal: "Red Jasper, Garnet, Black Tourmaline",
    affirmation: "I am grounded, safe, and secure.",
    element: "Earth",
    location: "Base of spine",
    governs: "Survival, stability, basic needs",
    imbalance: "Anxiety, fear, financial insecurity",
    balanced: "Security, stability, physical health",
    yoga: "Mountain pose, Child's pose",
    description:
      "The Root Chakra forms our foundation. It represents our connection to the earth, physical body, and material world. When balanced, we feel secure in our environment and trust life's process.",
    benefits: [
      "Enhances feelings of safety and security",
      "Improves focus and concentration",
      "Strengthens connection to physical body",
      "Promotes financial stability",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="45" y="20" width="10" height="60" fill="currentColor" />
        <rect x="20" y="45" width="60" height="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Sacral Chakra",
    sanskrit: "Svadhisthana",
    color: "from-orange-400 to-orange-600",
    crystal: "Carnelian, Moonstone, Orange Calcite",
    affirmation: "I embrace creativity, pleasure, and passion.",
    element: "Water",
    location: "Lower abdomen, below navel",
    governs: "Emotions, sexuality, creativity",
    imbalance: "Emotional instability, creative blocks",
    balanced: "Healthy relationships, creative flow",
    yoga: "Hip openers, Goddess pose",
    description:
      "The Sacral Chakra is the center of our emotions, sensuality, and creative energy. It governs how we relate to our emotions and the emotions of others, as well as our ability to experience pleasure.",
    benefits: [
      "Enhances creativity and inspiration",
      "Improves emotional intelligence",
      "Supports healthy sexuality",
      "Encourages adaptability to change",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M50,10 A40,40 0 0,1 50,90 A40,40 0 0,1 50,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M50,10 A40,40 0 0,0 50,90 A40,40 0 0,0 50,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Solar Plexus Chakra",
    sanskrit: "Manipura",
    color: "from-yellow-400 to-yellow-600",
    crystal: "Citrine, Tiger's Eye, Pyrite",
    affirmation: "I am confident, powerful, and determined.",
    element: "Fire",
    location: "Upper abdomen, stomach area",
    governs: "Personal power, will, metabolism",
    imbalance: "Low self-esteem, digestive issues",
    balanced: "Confidence, motivation, vitality",
    yoga: "Warrior poses, Boat pose",
    description:
      "The Solar Plexus Chakra is our power center. It governs self-esteem, willpower, and the ability to make decisions and take action in the world. When balanced, we feel capable and in control of our lives.",
    benefits: [
      "Boosts self-confidence and willpower",
      "Improves digestion and metabolism",
      "Enhances leadership abilities",
      "Supports healthy boundaries",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polygon
          points="50,10 80,90 20,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polygon
          points="50,90 80,10 20,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Heart Chakra",
    sanskrit: "Anahata",
    color: "from-green-400 to-emerald-500",
    crystal: "Green Aventurine, Rose Quartz, Rhodonite",
    affirmation: "I give and receive love freely and fully.",
    element: "Air",
    location: "Center of chest",
    governs: "Love, compassion, relationships",
    imbalance: "Co-dependency, isolation",
    balanced: "Unconditional love, compassion",
    yoga: "Camel pose, Cobra pose",
    description:
      "The Heart Chakra bridges the physical and spiritual realms. It governs our ability to give and receive love—from others and ourselves. When open, we experience deep compassion, forgiveness, and acceptance.",
    benefits: [
      "Enhances capacity for love and compassion",
      "Improves relationships and social connections",
      "Supports immune system function",
      "Promotes emotional healing",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M50,30 L60,50 L50,70 L40,50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M30,50 L50,60 L70,50 L50,40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Throat Chakra",
    sanskrit: "Vishuddha",
    color: "from-blue-400 to-blue-600",
    crystal: "Lapis Lazuli, Aquamarine, Blue Lace Agate",
    affirmation: "I express my truth with clarity and love.",
    element: "Sound",
    location: "Throat",
    governs: "Communication, self-expression",
    imbalance: "Fear of speaking, excessive talking",
    balanced: "Clear communication, active listening",
    yoga: "Shoulder stand, Fish pose",
    description:
      "The Throat Chakra governs all forms of communication—speaking, listening, writing, and even telepathic communication. When balanced, we express ourselves clearly and truthfully while respecting others.",
    benefits: [
      "Improves communication skills",
      "Enhances creative expression",
      "Supports thyroid health",
      "Promotes truthful self-expression",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="10" fill="currentColor" />
        <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Third Eye Chakra",
    sanskrit: "Ajna",
    color: "from-indigo-500 to-indigo-700",
    crystal: "Amethyst, Sodalite, Labradorite",
    affirmation: "I trust my intuition and inner wisdom.",
    element: "Light",
    location: "Forehead, between eyebrows",
    governs: "Intuition, imagination, wisdom",
    imbalance: "Lack of clarity, poor judgment",
    balanced: "Intuition, insight, mental clarity",
    yoga: "Child's pose, Forward folds",
    description:
      "The Third Eye Chakra is our center of intuition and foresight. It governs our ability to see the big picture, connect with our inner guidance, and perceive beyond the physical senses.",
    benefits: [
      "Enhances intuition and psychic abilities",
      "Improves concentration and memory",
      "Supports dream recall and interpretation",
      "Promotes clarity of thought",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M30,50 A20,20 0 1,1 70,50 A20,20 0 1,1 30,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Crown Chakra",
    sanskrit: "Sahasrara",
    color: "from-purple-500 to-white",
    crystal: "Clear Quartz, Amethyst, Selenite",
    affirmation: "I am connected to the divine and universal energy.",
    element: "Cosmic",
    location: "Top of head",
    governs: "Spirituality, enlightenment",
    imbalance: "Disconnection, cynicism",
    balanced: "Spiritual connection, bliss",
    yoga: "Headstand, Lotus pose",
    description:
      "The Crown Chakra connects us to universal consciousness and divine wisdom. When open, we experience spiritual awakening, transcendence, and a profound sense of oneness with all that is.",
    benefits: [
      "Deepens spiritual connection",
      "Enhances sense of purpose",
      "Promotes peace and contentment",
      "Supports connection to higher guidance",
    ],
    symbol: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M50,10 L50,90" stroke="currentColor" strokeWidth="2" />
        <path d="M10,50 L90,50" stroke="currentColor" strokeWidth="2" />
        <path d="M25,25 L75,75" stroke="currentColor" strokeWidth="2" />
        <path d="M25,75 L75,25" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const ChakraShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovering) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % chakraData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoPlay, isHovering]);

  const chakra = chakraData[current];

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            The Seven Chakras
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Explore the energy centers of your body and their profound impact on
            your physical, emotional, and spiritual well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Chakra Orbital System */}
          <div
            className="relative flex items-center justify-center min-h-[500px] lg:min-h-[700px]"
            onMouseEnter={() => {
              setAutoPlay(false);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setAutoPlay(true);
              setIsHovering(false);
            }}>
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${chakra.color
                  .split(" ")[0]
                  .replace("from-", "")} 0%, transparent 70%)`,
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbital Path */}
            <motion.div
              className="absolute w-[320px] h-[320px] lg:w-[520px] lg:h-[520px] rounded-full border border-slate-600 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />

            {/* Secondary Orbital Path */}
            <motion.div
              className="absolute w-[220px] h-[220px] lg:w-[420px] lg:h-[420px] rounded-full border border-slate-600 opacity-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />

            {/* Chakra Points with Symbols */}
            <motion.div
              className="absolute w-[320px] h-[320px] lg:w-[520px] lg:h-[520px] rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}>
              {chakraData.map((chakra, index) => {
                const angle = (index * 360) / chakraData.length;
                const radius = window.innerWidth < 1024 ? 140 : 240;
                const rad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);
                const active = index === current;

                return (
                  <motion.div
                    key={index}
                    className="absolute cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                      zIndex: active ? 30 : 10,
                    }}
                    animate={{
                      scale: active ? [1, 1.2, 1] : 1,
                      y: active ? [0, -10, 0] : 0,
                    }}
                    transition={{
                      duration: active ? 2 : 0.6,
                      repeat: active ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    onClick={() => {
                      setCurrent(index);
                      setAutoPlay(false);
                      setTimeout(() => setAutoPlay(true), 10000);
                    }}>
                    <motion.div
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${chakra.color} flex items-center justify-center text-white shadow-xl relative overflow-hidden`}
                      whileHover={{ scale: 1.3 }}
                      animate={{
                        boxShadow: active
                          ? `0 0 35px 12px ${chakra.color
                              .split(" ")[0]
                              .replace("from-", "")
                              .replace("-", "")}80`
                          : "0 4px 15px rgba(0, 0, 0, 0.3)",
                        filter: active ? "brightness(1.5)" : "brightness(1)",
                      }}>
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                          background: `radial-gradient(circle, white 0%, transparent 70%)`,
                          scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Chakra Symbol Container */}
                      <motion.div
                        className="w-10 h-10 text-white relative z-10"
                        animate={{
                          rotate: active ? 360 : 0,
                          scale: active ? 1.2 : 1,
                        }}
                        transition={{
                          duration: active ? 8 : 0.5,
                          repeat: active ? Infinity : 0,
                          ease: "linear",
                        }}>
                        {chakra.symbol}
                      </motion.div>

                      {active && (
                        <>
                          <motion.div
                            className="absolute inset-0 border-2 border-white rounded-full"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.6, 0.2, 0.6],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute inset-0 border-2 border-white rounded-full"
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.4, 0.1, 0.4],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: 0.5,
                            }}
                          />
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center OM Symbol with 3D Effect */}
            <motion.div
              className="absolute z-30 w-24 h-24 lg:w-36 lg:h-36 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                rotate: 360,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                boxShadow: "0 0 30px 5px rgba(124, 58, 237, 0.5)",
              }}>
              <motion.div
                className="text-3xl lg:text-5xl text-white"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                🕉
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>

          {/* Chakra Information */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                x: -50,
                transition: { duration: 0.5 },
              }}
              className="px-4 lg:px-8">
              <motion.div
                animate={{
                  background: `linear-gradient(45deg, ${
                    chakra.color.split(" ")[0]
                  }, ${chakra.color.split(" ")[2]})`,
                }}
                className="inline-block px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-semibold text-white">
                  {chakra.location}
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {chakra.name}{" "}
                <span className="text-amber-300">({chakra.sanskrit})</span>
              </h2>

              <motion.div
                className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />

              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {chakra.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  className="bg-slate-800 bg-opacity-50 p-4 rounded-xl border-l-4 border-amber-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}>
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    GOVERNING
                  </h4>
                  <p className="text-white">{chakra.governs}</p>
                </motion.div>

                <motion.div
                  className="bg-slate-800 bg-opacity-50 p-4 rounded-xl border-l-4 border-amber-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}>
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    WHEN BALANCED
                  </h4>
                  <p className="text-white">{chakra.balanced}</p>
                </motion.div>

                <motion.div
                  className="bg-slate-800 bg-opacity-50 p-4 rounded-xl border-l-4 border-amber-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}>
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    WHEN IMBALANCED
                  </h4>
                  <p className="text-white">{chakra.imbalance}</p>
                </motion.div>

                <motion.div
                  className="bg-slate-800 bg-opacity-50 p-4 rounded-xl border-l-4 border-amber-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}>
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">
                    YOGA POSES
                  </h4>
                  <p className="text-white">{chakra.yoga}</p>
                </motion.div>
              </div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}>
                <h4 className="text-sm font-semibold text-amber-400 mb-2">
                  BENEFITS
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {chakra.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-slate-300 text-sm"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}>
                      <svg
                        className="w-4 h-4 mt-0.5 mr-2 text-amber-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}>
                <div className="bg-slate-800 bg-opacity-50 px-4 py-3 rounded-lg shadow-sm border border-slate-700">
                  <p className="text-sm">
                    <span className="font-semibold text-amber-400">
                      Crystal:
                    </span>{" "}
                    <span className="text-white">{chakra.crystal}</span>
                  </p>
                </div>
                <div className="bg-slate-800 bg-opacity-50 px-4 py-3 rounded-lg shadow-sm border border-slate-700">
                  <p className="text-sm">
                    <span className="font-semibold text-amber-400">
                      Element:
                    </span>{" "}
                    <span className="text-white">{chakra.element}</span>
                  </p>
                </div>
              </motion.div>

              <motion.blockquote
                className="relative italic text-xl md:text-2xl text-white font-serif mb-6 p-6 bg-slate-800 bg-opacity-50 rounded-xl border-l-4 border-amber-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}>
                <div className="absolute top-0 left-0 text-6xl text-amber-400 opacity-20 -mt-4 -ml-2">
                  "
                </div>
                <div className="relative z-10">{chakra.affirmation}</div>
                <div className="absolute bottom-0 right-0 text-6xl text-amber-400 opacity-20 -mb-6 -mr-2">
                  "
                </div>
              </motion.blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center mt-16 space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}>
          {chakraData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrent(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-amber-400" : "bg-slate-600"
              }`}
              whileHover={{ scale: 1.5 }}
              animate={{
                scale: index === current ? 1.5 : 1,
                boxShadow:
                  index === current
                    ? `0 0 12px ${chakraData[index].color
                        .split(" ")[0]
                        .replace("from-", "")
                        .replace("-", "")}80`
                    : "none",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full animate-spin bg-white opacity-10"
          style={{
            width: Math.random() * 5 + 2 + "px",
            height: Math.random() * 5 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default ChakraShowcase;
