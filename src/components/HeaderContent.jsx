import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeaderContent() {
  return (
    <div className="header-content-wrapper">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hovedtekstområde */}
        <div className="max-w-xl text-white pt-24 md:pt-32 lg:pt-40">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Hayalindeki üniversiteye özel oluşturulan eğitim patikan...
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-8 bg-black bg-opacity-30 p-2 rounded-lg inline-block">
            Okul derslerindeki akademik başarılarına ek olarak hayallerindeki üniversiteyi kazanman için gerekli olan tüm becerileri edin.
          </p>

          {/* Knapper */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-xl">
              Giriş Yap
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-green-600 transition duration-300">
              Şimdi Başla!
            </button>
          </div>
          
          {/* Mobil navigationspile */}
          <div className="flex mt-12 gap-8 text-white">
            <button aria-label="Forrige Slide" className="bg-green-600 p-3 rounded-full opacity-70 hover:opacity-100 transition">
              <ChevronRight className="w-6 h-6 transform rotate-180" />
            </button>
            <button aria-label="Næste Slide" className="bg-green-600 p-3 rounded-full opacity-70 hover:opacity-100 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}