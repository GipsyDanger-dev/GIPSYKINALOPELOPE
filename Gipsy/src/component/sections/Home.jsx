import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Latar Belakang Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted className="object-cover w-full h-full">
          {/* Ganti 'src' dengan path video Anda */}
          <source src="/path-to-your-background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Gelap untuk Keterbacaan Teks */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>
      
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent loading-right">
            Hi, I'm Gipsy.Dev
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Halo, saya Adam Fairuz Akmal Aryaguna, seorang video editor, developer, dan blockchain enthusiast yang menggabungkan kreativitas dan teknologi dalam setiap proyek. Berpengalaman di Adobe Premiere Pro, After Effects, pengembangan web, dan blockchain. Saya selalu tertarik untuk menciptakan solusi digital inovatif. 🚀
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-blue-700 shadow-lg">
              View Project
            </a>
            <a href="#contact" className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};