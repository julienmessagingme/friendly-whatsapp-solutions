
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-70">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-mairie-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-mairie-50 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block mb-4 px-3 py-1 bg-mairie-50 text-mairie-700 rounded-full text-sm font-medium">
              Solution WhatsApp pour les collectivités
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 tracking-tight mb-6">
              Transformez la communication <br className="hidden sm:block" />
              <span className="text-mairie-600">avec vos citoyens</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Plateforme conversationnelle qui permet aux mairies d'interagir avec leurs citoyens sur WhatsApp de manière simple, efficace et sécurisée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="btn-primary group">
                <span>Démarrer l'essai gratuit</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                Demander une démo
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-mairie-400/20 to-mairie-600/20 flex items-center justify-center">
                <div className="glassmorphism p-8 rounded-xl max-w-md text-center">
                  <img src="/logo.png" alt="MairieMe Logo" className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interface WhatsApp MairieMe</h3>
                  <p className="text-gray-700">Visualisez ici l'interface de conversation entre la mairie et les citoyens</p>
                </div>
              </div>
            </div>
            
            {/* Animation elements */}
            <div className="absolute -right-16 top-1/4 w-32 h-32 bg-mairie-50 rounded-full animate-float opacity-80" />
            <div className="absolute -left-12 -bottom-8 w-24 h-24 bg-mairie-100 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
