import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueDeConfidentialite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <h2 className="text-xl font-semibold mb-4">Qui sommes-nous ?</h2>
          <p className="mb-6">
            L'adresse de notre site est : https://www.mairiemeorg.org
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Commentaires</h2>
          <p className="mb-6">
            Quand vous laissez un commentaire sur notre site, les données inscrites dans le formulaire de commentaire, 
            ainsi que votre adresse IP et l'agent utilisateur de votre navigateur sont collectés pour nous aider à la 
            détection des commentaires indésirables.
            <br /><br />
            Une chaîne anonymisée créée à partir de votre adresse e-mail (également appelée hash) peut être envoyée au 
            service Gravatar pour vérifier si vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar 
            sont disponibles ici : https://automattic.com/privacy/. Après validation de votre commentaire, votre photo de 
            profil sera visible publiquement à coté de votre commentaire.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Médias</h2>
          <p className="mb-6">
            Si vous téléversez des images sur le site, nous vous conseillons d'éviter de téléverser des images contenant 
            des données EXIF de coordonnées GPS. Les personnes visitant votre site peuvent télécharger et extraire des 
            données de localisation depuis ces images.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <p className="mb-6">
            Si vous déposez un commentaire sur notre site, il vous sera proposé d'enregistrer votre nom, adresse e-mail et 
            site dans des cookies. C'est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si 
            vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d'un an.
            <br /><br />
            Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur 
            accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de 
            votre navigateur.
            <br /><br />
            Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations 
            de connexion et vos préférences d'écran. La durée de vie d'un cookie de connexion est de deux jours, celle d'un cookie 
            d'option d'écran est d'un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant 
            deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.
            <br /><br />
            En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie 
            ne comprend aucune donnée personnelle. Il indique simplement l'ID de la publication que vous venez de modifier. Il expire 
            au bout d'un jour.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Contenu embarqué depuis d'autres sites</h2>
          <p className="mb-6">
            Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu 
            intégré depuis d'autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.
            <br /><br />
            Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, 
            suivre vos interactions avec ces contenus embarqués si vous disposez d'un compte connecté sur leur site web.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Utilisation et transmission de vos données personnelles</h2>
          <p className="mb-6">
            Si vous demandez une réinitialisation de votre mot de passe, votre adresse IP sera incluse dans l'e-mail de réinitialisation.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Durées de stockage de vos données</h2>
          <p className="mb-6">
            Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître 
            et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération.
            <br /><br />
            Pour les comptes qui s'inscrivent sur notre site (le cas échéant), nous stockons également les données personnelles indiquées 
            dans leur profil. Tous les comptes peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l'exception 
            de leur identifiant). Les gestionnaires du site peuvent aussi voir et modifier ces informations.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Les droits que vous avez sur vos données</h2>
          <p className="mb-6">
            Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant 
            toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également 
            demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins 
            administratives, légales ou pour des raisons de sécurité.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Transmission de vos données personnelles</h2>
          <p className="mb-6">
            Les commentaires des visiteurs peuvent être vérifiés à l'aide d'un service automatisé de détection des commentaires indésirables.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueDeConfidentialite;
