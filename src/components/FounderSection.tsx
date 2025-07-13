import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Feathers */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            animate={{
              y: [100, -100],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          >
            🪶
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-sage-800 mb-8">
            Meet the Soul Behind the Crystals
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            A journey of healing, discovery, and sharing the transformative power of Earth's sacred gifts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src="/1.png"
                alt="MiraCrystals - Founder"
                className="w-full h-100 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Mystical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 via-transparent to-gold-200/20" />
              
              {/* Aura Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-gold-400/20 via-transparent to-transparent"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
            
            {/* Floating Spiritual Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl"
            >
              <Sparkles className="h-8 w-8 text-gold-500" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl"
            >
              <Heart className="h-8 w-8 text-rose-500" />
            </motion.div>

            {/* Energy Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-gold-400/30 rounded-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-4xl font-serif font-bold text-sage-800 mb-6"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Unmesh Journey
              </motion.h3>
              
              <div className="space-y-6 text-sage-700 leading-relaxed font-serif text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  In a world driven by technology and constant evolution, finding inner peace can feel like a distant dream. As a B.Tech student in Computer Science and Business Systems (CSBS), I’ve lived in both these worlds — one where logic, innovation, and data shape our future, and another where ancient crystals, energy healing, and inner alignment shape our soul.

                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                 This platform was born from my desire to bring those worlds together. Here, you’ll find ethically sourced crystals, energy-infused bracelets, and healing tools designed to not only adorn your body but elevate your energy.

                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                 Every product is chosen with care, infused with intention, and aligned with the belief that real wellness comes from balancing mind, body, and spirit — just as systems and solutions work best when they are in harmony.

Whether you seek protection, clarity, love, or alignment — youre in the right space to start your sacred journey.


                </motion.p>
              </div>
            </div>

            {/* Sacred Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-sage-50 to-sage-100 rounded-2xl shadow-lg relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Users className="h-10 w-10 text-sage-600 mx-auto mb-3" />
                </motion.div>
                <div className="text-3xl font-bold text-sage-800 mb-1">1000+</div>
                <div className="text-sm text-sage-600 font-sans">customers satisfied</div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-200/20 to-transparent"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl shadow-lg relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="h-10 w-10 text-gold-600 mx-auto mb-3" />
                </motion.div>
                <div className="text-3xl font-bold text-gold-800 mb-1">10+</div>
                <div className="text-sm text-gold-600 font-sans">Years of Wisdom</div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sage-200/20 to-transparent"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl shadow-lg relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-10 w-10 text-rose-600 mx-auto mb-3" />
                </motion.div>
                <div className="text-3xl font-bold text-rose-800 mb-1">∞</div>
                <div className="text-sm text-rose-600 font-sans">Love & Light</div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-200/20 to-transparent"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
              </motion.div>
            </div>

            {/* Sacred Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-sage-100 via-gold-50 to-sage-100 p-8 rounded-3xl border border-sage-200/50 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <blockquote className="text-sage-800 font-sans italic text-xl leading-relaxed relative z-10">
                "My sacred mission is to help you discover the crystal allies that will support your soul's journey, awaken your inner healer, and guide you home to your truest self."
              </blockquote>
              
              {/* Signature Animation */}
              <motion.div
                className="mt-6 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <svg
                  width="120"
                  height="40"
                  viewBox="0 0 120 40"
                  className="text-sage-600"
                >
                  <motion.path
                    d="M10 30 Q 30 10, 50 30 T 90 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </svg>
                <p className="text-sage-600 font-sans text-lg">— Unmesh ✨</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;