
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordPressBlogTemplate from "@/components/WordPressBlogTemplate";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Blog MairieMe.org</h1>
          <p className="text-lg text-gray-600 mb-10">
            Utilisez ce formulaire pour créer et publier du contenu sur votre site WordPress.
          </p>
          <WordPressBlogTemplate />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
