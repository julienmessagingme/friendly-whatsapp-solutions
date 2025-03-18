
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
          
          <p className="mb-6">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
            il est précisé aux utilisateurs du site MairieMe.org l'identité des différents intervenants dans le cadre de sa 
            réalisation et de son suivi.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 underline">Edition du site</h2>
          <p className="mb-4">
            Le présent site, accessible à l'URL https://www.mairiemeorg.org/ (le « Site »), est édité par :
          </p>
          <p className="mb-4">
            Messaging Me, société au capital de 3000 euros, inscrite au R.C.S. de PARIS sous le numéro Paris B 948 692 231,
            dont le siège social est situé au 6 rue d'Armaillé 75017 PARIS, représenté(e) par Geoffrey Boulakia dûment habilité(e)
          </p>
          <p className="mb-6">
            Le numéro individuel TVA de l'éditeur est : FR93948692231.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 underline">Hébergement</h2>
          <p className="mb-6">
            Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1, 
            (contact téléphonique ou email : 1007).
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Directeur de publication</h2>
          <p className="mb-6">
            Le Directeur de la publication du Site est Julien Dumas.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Nous contacter</h2>
          <p className="mb-2">Par téléphone : +33664251677</p>
          <p className="mb-2">Par email : contact@messagingme.fr</p>
          <p className="mb-6">Par courrier : 6 rue d'Armaillé 75017 PARIS</p>
          
          <h2 className="text-xl font-semibold mb-4">Données personnelles</h2>
          <p className="mb-4">
            Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, 
            disponible depuis la section « Charte de Protection des Données Personnelles », conformément au 
            Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
