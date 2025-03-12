
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    "Réduction des appels téléphoniques à la mairie",
    "Amélioration de la satisfaction des citoyens",
    "Économie de temps pour le personnel municipal",
    "Meilleure accessibilité des services publics",
    "Communication plus directe et transparente",
    "Réduction des déplacements inutiles en mairie"
  ];

  const communityBenefits = [
    "Faites des sondages",
    "Stimulez la vie citoyenne",
    "Gérez les communautés",
    "Améliorez le quotidien et la sécurité"
  ];

  return (
    <section id="avantages" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mr-0">
              <div className="absolute inset-0 bg-gradient-to-br from-mairie-100 to-mairie-200 rounded-3xl rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-6">
                <div className="relative w-full h-full bg-mairie-50 rounded-2xl overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg shadow-sm flex items-center px-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <div className="ml-2 text-sm text-gray-800 font-medium">MairieMe</div>
                  </div>
                  
                  <div className="absolute top-20 left-4 right-4 bottom-4 bg-gray-50 rounded-lg overflow-hidden">
                    <div className="flex flex-col h-full">
                      <div className="flex-1 p-4 overflow-auto">
                        <div className="flex mb-4">
                          <div className="max-w-[70%] bg-gray-200 rounded-lg rounded-bl-none p-3">
                            <p className="text-sm">Bonjour, je souhaite savoir comment renouveler ma carte d'identité ?</p>
                            <span className="text-xs text-gray-500 mt-1">09:32</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mb-4">
                          <div className="max-w-[70%] bg-mairie-100 rounded-lg rounded-br-none p-3">
                            <p className="text-sm">Bonjour ! Pour renouveler votre carte d'identité, vous devez prendre rendez-vous en ligne sur notre site ou via cette conversation. Quand souhaitez-vous venir ?</p>
                            <span className="text-xs text-gray-500 mt-1">09:33</span>
                          </div>
                        </div>
                        
                        <div className="flex mb-4">
                          <div className="max-w-[70%] bg-gray-200 rounded-lg rounded-bl-none p-3">
                            <p className="text-sm">Je préfère la semaine prochaine, mardi si possible.</p>
                            <span className="text-xs text-gray-500 mt-1">09:34</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="max-w-[70%] bg-mairie-100 rounded-lg rounded-br-none p-3">
                            <p className="text-sm">Parfait ! Je vous propose mardi prochain à 14h30. Cela vous convient-il ?</p>
                            <span className="text-xs text-gray-500 mt-1">09:35</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 p-3 flex items-center">
                        <input 
                          type="text" 
                          placeholder="Votre message..." 
                          className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mairie-300"
                        />
                        <button className="ml-2 w-8 h-8 flex items-center justify-center bg-mairie-500 text-white rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:max-w-lg"
          >
            <div className="inline-block mb-4 px-3 py-1 bg-mairie-100 text-mairie-700 rounded-full text-sm font-medium">
              Pourquoi choisir MairieMe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformez la relation citoyen-mairie</h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre solution permet de moderniser la communication municipale en l'adaptant aux habitudes numériques actuelles des citoyens.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-mairie-100 text-mairie-600 flex items-center justify-center">
                    <Check size={12} />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Nouvelle section communication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:max-w-lg order-2 lg:order-1"
          >
            <div className="inline-block mb-4 px-3 py-1 bg-mairie-100 text-mairie-700 rounded-full text-sm font-medium">
              Communication efficace
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Communiquez sur tous vos événements et créez de l'engagement</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nous vous permettons d'utiliser le potentiel des chaînes WhatsApp pour pousser directement du contenu de communication vers vos citoyens.
            </p>
            
            <div className="space-y-4">
              {communityBenefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-mairie-100 text-mairie-600 flex items-center justify-center">
                    <Check size={12} />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:ml-0">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-200 rounded-3xl rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-6">
                <div className="relative w-full h-full bg-mairie-50 rounded-2xl overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-12 bg-green-500 rounded-lg shadow-sm flex items-center px-4">
                    <div className="w-6 h-6 rounded-full bg-white mr-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </div>
                    <div className="text-sm text-white font-medium">Chaîne d'infos Mairie de Ludon</div>
                  </div>
                  
                  <div className="absolute top-20 left-4 right-4 bottom-4 bg-gray-50 rounded-lg overflow-hidden">
                    <div className="flex flex-col h-full">
                      <div className="flex-1 p-4 overflow-auto">
                        <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                          <div className="font-medium text-sm mb-1">Événements de la semaine</div>
                          <p className="text-sm text-gray-600">Le marché nocturne aura lieu ce vendredi à partir de 18h sur la place de la mairie.</p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                          <div className="font-medium text-sm mb-1">Travaux en cours</div>
                          <p className="text-sm text-gray-600">Attention, la rue de la République sera fermée mardi pour travaux de voirie.</p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                          <div className="font-medium text-sm mb-1">Sondage citoyen</div>
                          <p className="text-sm text-gray-600">Participez à notre consultation sur les horaires d'ouverture de la médiathèque !</p>
                          <div className="flex mt-2 space-x-2">
                            <button className="bg-mairie-100 text-mairie-600 text-xs px-3 py-1 rounded-full">Voter</button>
                            <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Résultats</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
