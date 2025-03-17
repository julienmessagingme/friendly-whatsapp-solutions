
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA measurement ID

// Initialize Google Analytics
const initGA = () => {
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
};

// Track page views
const trackPageView = (path: string) => {
  if (!(window as any).gtag) return;
  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

export default Analytics;
