import { Heart, Sparkles, Users } from "lucide-react";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-sage-800 mb-8">
            Meet the Soul Behind the Crystals
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            A journey of healing, discovery, and sharing the transformative
            power of Earth's sacred gifts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/1.png"
                alt="MiraCrystals - Founder"
                className="w-full h-100 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 via-transparent to-gold-200/20" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-serif font-bold text-sage-800 mb-6">
                Unmesh Journey
              </h3>

              <div className="space-y-6 text-sage-700 leading-relaxed font-serif text-lg">
                <p>
                  In a world driven by technology and constant evolution,
                  finding inner peace can feel like a distant dream. As a B.Tech
                  student in Computer Science and Business Systems (CSBS), I’ve
                  lived in both these worlds — one where logic, innovation, and
                  data shape our future, and another where ancient crystals,
                  energy healing, and inner alignment shape our soul.
                </p>
                <p>
                  This platform was born from my desire to bring those worlds
                  together. Here, you’ll find ethically sourced crystals,
                  energy-infused bracelets, and healing tools designed to not
                  only adorn your body but elevate your energy.
                </p>
                <p>
                  Every product is chosen with care, infused with intention, and
                  aligned with the belief that real wellness comes from
                  balancing mind, body, and spirit — just as systems and
                  solutions work best when they are in harmony. Whether you seek
                  protection, clarity, love, or alignment — you're in the right
                  space to start your sacred journey.
                </p>
              </div>
            </div>

            {/* Sacred Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 bg-gradient-to-br from-sage-50 to-sage-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <Users className="h-10 w-10 text-sage-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-sage-800 mb-1">
                  1000+
                </div>
                <div className="text-sm text-sage-600 font-sans">
                  customers satisfied
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <Sparkles className="h-10 w-10 text-gold-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold-800 mb-1">10+</div>
                <div className="text-sm text-gold-600 font-sans">
                  Years of Wisdom
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <Heart className="h-10 w-10 text-rose-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-rose-800 mb-1">∞</div>
                <div className="text-sm text-rose-600 font-sans">
                  Love & Light
                </div>
              </div>
            </div>

            {/* Sacred Message */}
            <div className="bg-gradient-to-r from-sage-100 via-gold-50 to-sage-100 p-8 rounded-3xl border border-sage-200/50 relative">
              <blockquote className="text-sage-800 font-sans italic text-xl leading-relaxed">
                "My sacred mission is to help you discover the crystal allies
                that will support your soul's journey, awaken your inner healer,
                and guide you home to your truest self."
              </blockquote>
              <div className="mt-6">
                <p className="text-sage-600 font-sans text-lg">— Unmesh ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
