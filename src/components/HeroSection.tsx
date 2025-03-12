
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import WhatsAppConversation from './WhatsAppConversation';

const HeroSection = () => {
  const urbanismConversation = [
    {
      sender: 'city' as const,
      content: "Bonjour et bienvenue sur le compte WhatsApp officiel de votre mairie de Ludon sur Oise ! 🏫"
    },
    {
      sender: 'city' as const,
      content: "Ici vous posez toutes vos questions et vous pourrez aussi être mis en relation avec nos services ! 🚀"
    },
    {
      sender: 'city' as const,
      content: "",
      image: "/lovable-uploads/d590a352-d4dd-45c7-aa69-43e532d2f013.png"
    },
    {
      sender: 'citizen' as const,
      content: "Bonjour, je voudrais rajouter un étage à ma maison mais je ne sais pas comment trouver les règles d'urbanisme possibles ?"
    },
    {
      sender: 'city' as const,
      content: "Pour savoir si vous pouvez rajouter un étage à votre maison vous devez :\n1) consulter le PLU à l'adresse suivante https://www.ludonsuroise.fr/urbanisme/PlanLocalUrbanismev23\n2) demander une étude de votre permis de construire sur notre plate forme dédiée aux demandes d'urbanisme\n3) Demander l'autorisation préalable de votre copropriété le cas échéant."
    },
    {
      sender: 'city' as const,
      content: "Voulez vous télécharger le plan de zonage pour savoir dans quelle zone se situe votre bien ?"
    },
    {
      sender: 'citizen' as const,
      content: "Oui"
    },
    {
      sender: 'city' as const,
      content: "",
      image: "/lovable-uploads/3e76276a-ee20-403e-8fa3-500e693d0ad1.png"
    }
  ];

  const schoolConversation = [
    {
      sender: 'citizen' as const,
      content: "Bonjour, je suis nouvel arrivant dans la ville et je voudrais inscrire mes enfants à l'école maternelle pour la prochaine rentrée. Comment puis je faire ?"
    },
    {
      sender: 'city' as const,
      content: <div>
        Bonjour, pour s'inscrire à l'école maternelle, il faut que vous nous retourniez avant le 15 mai le{' '}
        <a href="#" className="text-blue-600 underline">remplir le fichier d'inscription</a>
      </div>
    },
    {
      sender: 'citizen' as const,
      content: "Je souhaiterais prendre RDV avec le service \"petite enfance\" pour éventuellement venir faire une visite de l'école. Est ce possible ?"
    },
    {
      sender: 'city' as const,
      content: <div>
        Oui, vous pouvez prendre RDV en cliquant sur le lien suivant. L'école se situe rue de la République, près de la mairie.{' '}
        <a href="#" className="text-blue-600 underline">Prendre RDV à la mairie</a>
      </div>
    },
    {
      sender: 'citizen' as const,
      content: "J'ai une question différente... existe t il une association qui organise de la baby Gym dans la commune ?"
    },
    {
      sender: 'city' as const,
      content: "Oui, il s'agit de l'association Baby & Sport qui propose plein d'activités d'éveil au sport..\nVous pouvez les contacter au 06.12.34.56.87 ou leur envoyer un mail à babyandsport@gmail.com"
    }
  ];

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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gray-900 tracking-tight mb-6">
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-mairie-400/30 to-mairie-600/30 p-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 place-items-center h-full">
                  <div className="phone-frame">
                    <WhatsAppConversation messages={urbanismConversation} />
                  </div>
                  {/* Only show the second phone on medium screens and larger */}
                  <div className="phone-frame hidden md:block">
                    <WhatsAppConversation messages={schoolConversation} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animation elements */}
            <div className="absolute -right-16 top-1/4 w-32 h-32 bg-mairie-50 rounded-full animate-float opacity-80" />
            <div className="absolute -left-12 bottom-1/4 w-24 h-24 bg-mairie-100 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
            <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-mairie-200 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
            <div className="absolute right-1/4 bottom-1/3 w-20 h-20 bg-mairie-300/50 rounded-full animate-pulse-soft" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
