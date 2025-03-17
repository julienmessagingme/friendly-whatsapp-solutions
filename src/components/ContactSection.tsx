
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Clock, 
  Check,
  MessageCircle,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Initialize EmailJS with your user ID
      emailjs.init("wUm05OeoxUACEqPfu"); // Updated with your EmailJS User ID
      
      const formData = new FormData(e.currentTarget);
      const firstName = formData.get('firstName') as string;
      const lastName = formData.get('lastName') as string;
      const email = formData.get('email') as string;
      const mairie = formData.get('mairie') as string;
      const message = formData.get('message') as string;
      
      // Prepare template parameters
      const templateParams = {
        firstName,
        lastName,
        email,
        mairie,
        message,
        to_email: 'julien@messagingme.fr'
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_qu6psyd', // Updated with your EmailJS Service ID
        'template_yr7apo2', // Updated with your EmailJS Template ID
        templateParams
      );
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Show success message
      setIsSubmitted(true);
      
      // Show success toast
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        duration: 5000,
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error toast
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
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
                  href="https://wa.link/lbiqqu" 
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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="Votre prénom" 
                        required 
                        className="rounded-lg"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Votre nom" 
                        required 
                        className="rounded-lg"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="votre@email.fr" 
                      required 
                      className="rounded-lg"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mairie" className="text-sm font-medium text-gray-700">
                      Nom de votre mairie
                    </label>
                    <Input 
                      id="mairie" 
                      name="mairie"
                      placeholder="Mairie de..." 
                      required 
                      className="rounded-lg"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Comment pouvons-nous vous aider ?" 
                      rows={4} 
                      className="rounded-lg"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-mairie-600 hover:bg-mairie-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer ma demande"
                    )}
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
