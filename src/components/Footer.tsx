import { useState, useEffect } from "react";
import { Sparkles, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [mantraWords, setMantraWords] = useState<string[]>([]);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-sage-800 via-sage-900 to-sage-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="h-10 w-10 text-gold-300" />
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
              <a
                href="#"
                className="bg-sage-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-sage-600/50 transition-all duration-300 hover:scale-105">
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="bg-sage-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-sage-600/50 transition-all duration-300 hover:scale-105">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="bg-sage-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-sage-600/50 transition-all duration-300 hover:scale-105">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
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
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-gold-300 transition-colors duration-300 font-sans text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-gold-300 transition-colors duration-300 font-sans text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sacred Mantra Section */}
        <div className="border-t border-sage-700/50 mt-12 pt-12 text-center">
          <div className="mb-8">
            <h4 className="font-serif text-lg text-gold-300 mb-4">
              Sacred Affirmation
            </h4>
            <div className="flex flex-wrap justify-center items-center space-x-2 text-xl font-sans">
              {mantraWords.map((word, index) => (
                <span
                  key={index}
                  className="text-sage-200 hover:text-gold-300 transition-colors duration-300">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sage-300 flex items-center justify-center space-x-2 font-sans text-lg">
            <span>© {year} Mira Crystals. Crafted with</span>
            <Heart className="h-5 w-5 text-rose-400 fill-current" />
            <span>for your sacred journey</span>
            <Sparkles className="h-4 w-4 text-gold-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
