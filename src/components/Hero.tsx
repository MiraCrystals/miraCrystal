import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Awaken your inner light one crystal at a time.";
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="mb-12">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-sage-800">
              {title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-sage-600 font-sans font-medium">
              {displayText}
              <span className="text-gold-500">|</span>
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-serif">
            Discover the healing power of authentic crystals, carefully selected
            to guide your spiritual journey and restore your natural balance
            through ancient wisdom and modern energy healing.
          </p>

          <button
            onClick={scrollToNext}
            className="relative bg-gradient-to-r from-sage-600 to-sage-700 text-white px-10 py-4 rounded-full font-medium text-xl shadow-xl hover:from-sage-700 hover:to-sage-800 transition-all duration-300">
            Explore Our Sacred Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
