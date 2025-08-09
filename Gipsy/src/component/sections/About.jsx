import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaRust, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiDart } from 'react-icons/si';
// ===== 1. PERBAIKAN: Menghapus import MouseEvent yang tidak perlu & menyebabkan error =====
import { useState, useRef } from 'react'; 

// Data skills, educationData, dan experienceData tidak berubah
const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "Rust", icon: <FaRust /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

const educationData = [
  {
    icon: <FaGraduationCap size={20} />,
    date: '2024 - 2026',
    title: 'Associate Degree in Information Technology',
    institution: 'Brawijaya University',
  },
  {
    icon: <FaGraduationCap size={20} />,
    date: '2021 - 2024',
    title: 'Mathematics and Natural Sciences',
    institution: 'State Senior High School 3 of Cilacap',
  },
];

const experienceData = [
  {
    icon: <FaBriefcase size={20} />,
    date: '2025 - Sekarang',
    title: 'Staff Expert of Research and Technology',
    institution: 'HMPSTI Brawijaya University',
  },
  {
    icon: <FaBriefcase size={20} />,
    date: '2024',
    title: 'Editor & Script Assistant',
    institution: 'State Senior High School 3 of Cilacap',
  },
];


// Komponen SpotlightCard dengan sintaks JavaScript yang BENAR
const SpotlightCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  // ===== 2. PERBAIKAN: Menghapus sintaks TypeScript ": MouseEvent" dari parameter =====
  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setStyle({
      '--spotlight-x': `${x}px`,
      '--spotlight-y': `${y}px`,
    });
  };

  const onMouseLeave = () => {
    setStyle({});
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`relative bg-gray-900/60 p-8 rounded-2xl border border-white/10 transition-all duration-300 group ${className}`}
    >
      {children}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{
             background: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), hsla(200, 100%, 70%, 0.15), transparent 80%)`
           }}>
      </div>
    </div>
  );
};


export const About = () => {
  return (
    // Gunakan kelas 'bg-modern-dark' dari CSS Anda atau 'bg-gray-900' jika belum dibuat
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-modern-dark"> 
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Halo! Saya Adam, seorang video editor, developer, dan blockchain enthusiast dengan minat besar dalam dunia teknologi dan kreativitas. Saya selalu terbuka untuk kolaborasi dan proyek baru yang menantang. 🚀
            </p>
          </div>
          
          <div className="bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">My Skillset</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="group flex flex-col items-center justify-center text-center p-3 transition-all duration-300">
                    <div className="text-4xl text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        {skill.icon}
                    </div>
                    <span className="mt-2 font-medium text-gray-400 group-hover:text-white text-sm transition-colors duration-300">{skill.name}</span>
                  </div>
                ))}
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kolom Pendidikan */}
            <SpotlightCard>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
                <div className="relative space-y-10">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative pl-12 group/item">
                            <div className="absolute left-0 top-0 flex items-center">
                                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/80 border-2 border-cyan-500/50 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div className={`absolute left-5 top-10 h-full w-0.5 bg-gray-700 ${index === educationData.length - 1 ? 'hidden' : ''}`}></div>
                            <div className="transform transition-transform duration-300 group-hover/item:translate-x-2">
                                <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SpotlightCard>

            {/* Kolom Pengalaman */}
            <SpotlightCard>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Experience</h3>
                 <div className="relative space-y-10">
                    {experienceData.map((item, index) => (
                        <div key={index} className="relative pl-12 group/item">
                            <div className="absolute left-0 top-0 flex items-center">
                                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/80 border-2 border-cyan-500/50 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div className={`absolute left-5 top-10 h-full w-0.5 bg-gray-700 ${index === experienceData.length - 1 ? 'hidden' : ''}`}></div>
                            <div className="transform transition-transform duration-300 group-hover/item:translate-x-2">
                                <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SpotlightCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Jangan lupa untuk menambahkan ini di file CSS global Anda (misal: index.css)
/*
.bg-modern-dark {
  background-color: #0b1120;
  background-image: radial-gradient(at top, hsla(214, 60%, 15%, 1), transparent 50%),
                    radial-gradient(at bottom, hsla(240, 40%, 10%, 1), transparent 60%);
}
*/