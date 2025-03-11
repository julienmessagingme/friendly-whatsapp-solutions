
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "Grâce à MairieChat, nous avons réduit le nombre d'appels à l'accueil de 40% et les citoyens sont ravis de la rapidité des réponses.",
    author: "Marie Dupont",
    position: "Maire de Saint-Clair-sur-Mer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "La mise en place a été d'une simplicité déconcertante. En quelques jours, toute notre équipe maîtrisait l'outil et nos citoyens l'ont adopté immédiatement.",
    author: "Thomas Bernard",
    position: "Directeur du service communication, Villefranche",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Nos seniors, que nous pensions réticents, sont finalement les plus grands utilisateurs ! Ils apprécient de pouvoir contacter la mairie sans se déplacer.",
    author: "Laura Martin",
    position: "Responsable des services aux citoyens, Beaumont",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-mairie-100 text-mairie-700 rounded-full text-sm font-medium">
            Témoignages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent nos utilisateurs</h2>
          <p className="text-xl text-gray-600">
            Découvrez comment des mairies de toutes tailles transforment leur communication avec MairieChat.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-0 flex items-center">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md text-gray-700 hover:text-mairie-600 transition-colors -ml-5 focus:outline-none focus:ring-2 focus:ring-mairie-200"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-mairie-500 rounded-full flex items-center justify-center text-white">
                        <MessageSquare size={14} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 text-mairie-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-mairie-500 inline-block mr-1">★</span>
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 font-medium italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
                      <div className="text-gray-600 text-sm">{testimonials[currentIndex].position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute top-0 bottom-0 right-0 flex items-center">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md text-gray-700 hover:text-mairie-600 transition-colors -mr-5 focus:outline-none focus:ring-2 focus:ring-mairie-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${index === currentIndex ? 'bg-mairie-600 w-6' : 'bg-mairie-200'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
