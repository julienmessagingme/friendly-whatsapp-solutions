
import { 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Shield, 
  RefreshCw, 
  Users 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="feature-card"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-mairie-50 text-mairie-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Conversations automatisées",
      description: "Répondez automatiquement aux demandes courantes des citoyens grâce à notre système de chatbot intelligent.",
      delay: 0.1
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analyse de données",
      description: "Obtenez des insights précieux sur les préoccupations de vos citoyens grâce à des tableaux de bord analytiques.",
      delay: 0.2
    },
    {
      icon: <Clock size={24} />,
      title: "Disponibilité 24/7",
      description: "Offrez un service client disponible à tout moment, même en dehors des heures d'ouverture de la mairie.",
      delay: 0.3
    },
    {
      icon: <Shield size={24} />,
      title: "Sécurité garantie",
      description: "Protection des données conforme au RGPD et chiffrement de bout en bout pour toutes les conversations.",
      delay: 0.1
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Intégration facile",
      description: "Mise en place rapide sans infrastructure technique complexe à gérer par votre équipe.",
      delay: 0.2
    },
    {
      icon: <Users size={24} />,
      title: "Gestion multi-agents",
      description: "Permettez à plusieurs agents municipaux de gérer les conversations simultanément avec des rôles personnalisés.",
      delay: 0.3
    }
  ];

  return (
    <section id="fonctionnalites" className="section bg-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-mairie-100 text-mairie-700 rounded-full text-sm font-medium">
            Fonctionnalités principales
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Une solution complète pour votre communication municipale</h2>
          <p className="text-xl text-gray-600">
            Notre plateforme offre tous les outils nécessaires pour transformer votre communication avec les citoyens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
