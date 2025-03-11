
import { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Essentiel",
      description: "Idéal pour les petites communes débutant avec WhatsApp",
      monthlyPrice: 149,
      annualPrice: 129,
      features: [
        "1 compte administrateur",
        "Jusqu'à 3 agents simultanés",
        "500 conversations par mois",
        "Réponses automatisées basiques",
        "Support par email"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      description: "Solution complète pour les communes moyennes",
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        "3 comptes administrateurs",
        "Jusqu'à 8 agents simultanés",
        "2000 conversations par mois",
        "Réponses automatisées avancées",
        "Intégration avec le site web de la mairie",
        "Analyses et rapports détaillés",
        "Support prioritaire"
      ],
      highlighted: true
    },
    {
      name: "Entreprise",
      description: "Pour les grandes villes avec des besoins spécifiques",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Administrateurs illimités",
        "Agents simultanés illimités",
        "Volume de conversations sur mesure",
        "Solutions personnalisées",
        "Intégrations API avancées",
        "Formation personnalisée",
        "Gestionnaire de compte dédié"
      ],
      highlighted: false
    }
  ];
  
  return (
    <section id="tarifs" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-mairie-100 text-mairie-700 rounded-full text-sm font-medium">
            Nos tarifs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un prix adapté à chaque commune</h2>
          <p className="text-xl text-gray-600 mb-10">
            Des solutions flexibles et abordables pour toutes les mairies, quelle que soit leur taille.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={cn("mr-3 text-sm", isAnnual ? "text-gray-500" : "text-gray-900 font-medium")}>Mensuel</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-mairie-600"
            />
            <span className={cn("ml-3 text-sm", isAnnual ? "text-gray-900 font-medium" : "text-gray-500")}>Annuel</span>
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              -15%
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "rounded-2xl p-8 border transition-all duration-300",
                plan.highlighted 
                  ? "border-mairie-200 shadow-xl relative z-10 scale-105 bg-white" 
                  : "border-gray-200 bg-white hover:border-mairie-200 hover:shadow-lg"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mairie-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Le plus populaire
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm h-10">{plan.description}</p>
                
                {plan.monthlyPrice !== null ? (
                  <div className="mt-6">
                    <div className="text-4xl font-bold">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}€
                      <span className="text-base font-normal text-gray-500">/mois</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-gray-500 mt-1">Facturé annuellement</div>
                    )}
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="text-2xl font-bold">Sur devis</div>
                    <div className="text-sm text-gray-500 mt-1">Contactez-nous</div>
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-mairie-100 text-mairie-600 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={cn(
                  "w-full",
                  plan.highlighted 
                    ? "bg-mairie-600 hover:bg-mairie-700 text-white" 
                    : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                )}
              >
                {plan.monthlyPrice !== null ? "Commencer l'essai" : "Contacter un conseiller"}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-mairie-50 rounded-xl p-6 flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="w-12 h-12 rounded-full bg-mairie-100 flex items-center justify-center text-mairie-600">
              <HelpCircle size={24} />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-1">Vous avez des questions ?</h4>
            <p className="text-gray-600 mb-0">Notre équipe est disponible pour vous aider à choisir la formule adaptée à vos besoins.</p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <Button variant="outline" className="whitespace-nowrap">Nous contacter</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
