
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Clock, 
  Check,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };
  
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-mairie-100 text-mairie-700 rounded-full text-sm font-medium">
              Contactez-nous
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à digitaliser la communication de votre mairie ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Laissez-nous vos coordonnées et un expert vous contactera pour discuter de vos besoins spécifiques.
            </p>
            
            <div className="space-y-6 max-w-md">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-mairie-100 flex items-center justify-center text-mairie-600">
                    <Mail size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">julien@messagingme.fr</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-mairie-100 flex items-center justify-center text-mairie-600">
                    <Phone size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Téléphone</h4>
                  <p className="text-gray-600">06.33.92.15.77</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-mairie-100 flex items-center justify-center text-mairie-600">
                    <Clock size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Horaires</h4>
                  <p className="text-gray-600">Du lundi au vendredi, 9h à 18h</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-mairie-100 flex items-center justify-center text-mairie-600">
                    <MessageSquare size={18} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Démo gratuite</h4>
                  <p className="text-gray-600">Réservez une démo personnalisée avec l'un de nos experts</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/33633921577" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={20} />
                  Nous contacter sur WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Votre prénom" 
                        required 
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Votre nom" 
                        required 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.fr" 
                      required 
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mairie" className="text-sm font-medium text-gray-700">
                      Nom de votre mairie
                    </label>
                    <Input 
                      id="mairie" 
                      placeholder="Mairie de..." 
                      required 
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      rows={4} 
                      className="rounded-lg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-mairie-600 hover:bg-mairie-700 text-white"
                  >
                    Envoyer ma demande
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Nous ne partagerons jamais vos données.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    Merci pour votre message. Un membre de notre équipe vous contactera très prochainement.
                  </p>
                  <Button 
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
