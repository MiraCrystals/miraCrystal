import { Mail, MessageCircle, MapPin, Heart, Sparkles } from "lucide-react";

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
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-sage-800 mb-8">
            Sacred Connection
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-sans">
            Ready to begin your crystal journey? Let's connect and find the
            perfect stones for your soul's path
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-sage-800 mb-8">
                Reach Out to Our Sacred Space
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:miracrystals365@gmail.com"
                  className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                  <div className="bg-sage-100 p-4 rounded-full">
                    <Mail className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sage-800 text-lg">
                      Sacred Correspondence
                    </div>
                    <div className="text-sage-600 font-sans">
                      miracrystals365@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/1234567890"
                  className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                  <div className="bg-green-100 p-4 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sage-800 text-lg">
                      Instant Spiritual Guidance
                    </div>
                    <div className="text-sage-600 font-sans">
                      WhatsApp for immediate crystal wisdom
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="bg-earth-100 p-4 rounded-full">
                    <MapPin className="h-6 w-6 text-earth-600" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sage-800 text-lg">
                      Global Energy Network
                    </div>
                    <div className="text-sage-600 font-sans">
                      Serving souls worldwide with love
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sage-50 via-gold-50 to-sage-50 p-8 rounded-3xl border border-sage-200/50">
              <h4 className="font-serif font-bold text-sage-800 mb-4 text-xl flex items-center space-x-2">
                <Heart className="h-5 w-5 text-rose-500" />
                <span>Personal Crystal Consultation</span>
              </h4>
              <p className="text-sage-600 leading-relaxed font-sans text-lg">
                Not sure which crystal resonates with your energy? Book a sacred
                consultation with Mira to discover the perfect stone allies for
                your unique spiritual journey and healing intentions.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-serif font-bold text-sage-800 mb-8 text-center">
              Send Your Sacred Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    placeholder="Your sacred name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    placeholder="Your family essence"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  placeholder="your.soul@universe.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-3 font-sans">
                  Your Sacred Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full px-4 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-none bg-white/50 backdrop-blur-sm"
                  placeholder="Share your crystal journey, intentions, or questions about your spiritual path..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sage-600 to-sage-700 text-white py-4 rounded-xl font-medium text-lg hover:from-sage-700 hover:to-sage-800 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Sacred Message</span>
                  <Sparkles className="h-5 w-5" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
