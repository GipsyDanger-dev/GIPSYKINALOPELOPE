import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { FaGithub, FaInstagram, FaWhatsapp, FaTwitter, FaDiscord, FaTimes } from "react-icons/fa";

// --- DATA UNTUK FOOTER ---
const socialLinks = [
  { href: 'https://github.com/GipsyDanger-dev', Icon: FaGithub, name: 'GitHub' },
  { href: 'https://www.instagram.com/adam_akmal18/?hl=id', Icon: FaInstagram, name: 'Instagram' },
  { href: 'https://discordapp.com/users/747396909399801856', Icon: FaDiscord, name: 'Discord' },
  { href: 'https://x.com/AdamF184953', Icon: FaTwitter, name: 'Twitter' },
  { href: 'https://wa.me/6281229497848', Icon: FaWhatsapp, name: 'WhatsApp' },
];

const apiEndpoints = Array(30).fill("GipsyDanger-dev™");

// --- DATA UNTUK EASTER EGG (DENGAN LINK GITHUB) ---
const creators = [
  { name: 'GipsyDanger-dev (Adam Fairuz)', role: 'Lead Developer & Designer', link: 'https://github.com/GipsyDanger-dev' },
  { name: 'znlumins (Daffa Ahmad Al Attas)', role: 'Front-End Refinement & UI/UX', link: 'https://github.com/znlumins' }, // Pastikan link ini benar
  { name: 'Gemini AI by Google', role: 'Code Assistant & Idea Generator', link: null }, // Tidak punya link, jadi tombol tidak akan muncul
];


// --- Komponen Modal untuk Easter Egg (DENGAN TOMBOL GITHUB) ---
const CreditsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="relative bg-gray-800/80 backdrop-blur-lg border border-gray-100/10 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <FaTimes size={20} />
        </button>
        <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dibuat Oleh</h3>
        
        {/* Kontainer untuk daftar kreator */}
        <div className="space-y-3">
          {creators.map(creator => (
            // Setiap baris kreator sekarang menggunakan flexbox
            <div key={creator.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              
              {/* Bagian Kiri: Nama dan Peran */}
              <div>
                <p className="font-semibold text-lg text-white">{creator.name}</p>
                <p className="text-sm text-gray-400">{creator.role}</p>
              </div>

              {/* Bagian Kanan: Tombol GitHub (Hanya muncul jika link ada) */}
              {creator.link && (
                <a 
                  href={creator.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-md transition-colors duration-200"
                  aria-label={`Lihat profil GitHub ${creator.name}`}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export const Footer = () => {
  // --- STATE & LOGIC UNTUK EASTER EGG (TIDAK BERUBAH) ---
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickTimeout = useRef(null);
  const CLICKS_TO_TRIGGER = 7;

  useEffect(() => {
    if (clickCount > 0) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = setTimeout(() => {
        setClickCount(0);
      }, 2000);
    }
    return () => clearTimeout(clickTimeout.current);
  }, [clickCount]);

  const handleCopyrightClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === CLICKS_TO_TRIGGER) {
      setIsModalOpen(true);
      setClickCount(0);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="py-3 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700/50">
        <Marquee gradient={false} speed={50}>
          {apiEndpoints.map((api, index) => (
            <code key={index} className="text-gray-500 dark:text-gray-400 text-sm mx-8">{api}</code>
          ))}
        </Marquee>
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span 
            className="text-sm text-gray-500 sm:text-center dark:text-gray-400 cursor-pointer select-none"
            onClick={handleCopyrightClick}
            title="Sesuatu yang tersembunyi..."
          >
            © 2025 <a href="https://github.com/GipsyDanger-dev" className="hover:underline">GipsyDanger-dev™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
             {socialLinks.map(({ href, Icon, name }) => (
                 <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-white transition-transform hover:scale-110">
                    <Icon className="w-5 h-5" /><span className="sr-only">{name}</span>
                </a>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <CreditsModal onClose={() => setIsModalOpen(false)} />}
    </footer>
  );
};

export default Footer;