import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "glassmorphism py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img 
              src="/lovable-uploads/c5d9b402-10bb-4e02-bf19-6f563bda581c.png" 
              alt="MairieMe.org Logo" 
              className="h-10 w-auto" 
            />
          </Link>
          <Link to="/" className="font-display font-bold text-gray-900 text-2xl md:text-3xl">MairieMe.org</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#fonctionnalites" className="text-gray-700 hover:text-mairie-600 transition-colors">Fonctionnalités</a>
          <a href="#avantages" className="text-gray-700 hover:text-mairie-600 transition-colors">Avantages</a>
          <a href="#tarifs" className="text-gray-700 hover:text-mairie-600 transition-colors">Tarifs</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hover:text-mairie-600 border-gray-200" onClick={scrollToContact}>Demander une démo</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-mairie-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden",
        isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
          <a href="#fonctionnalites" className="text-gray-700 hover:text-mairie-600 py-2 transition-colors" onClick={toggleMobileMenu}>Fonctionnalités</a>
          <a href="#avantages" className="text-gray-700 hover:text-mairie-600 py-2 transition-colors" onClick={toggleMobileMenu}>Avantages</a>
          <a href="#tarifs" className="text-gray-700 hover:text-mairie-600 py-2 transition-colors" onClick={toggleMobileMenu}>Tarifs</a>
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
            <Button 
              className="w-full justify-center bg-mairie-600 hover:bg-mairie-700" 
              onClick={scrollToContact}
            >
              Demander une démo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
