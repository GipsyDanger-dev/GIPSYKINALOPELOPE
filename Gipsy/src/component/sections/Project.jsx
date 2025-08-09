import { RevealOnScroll } from "../RevealOnScroll";

// === DATA PROYEK (TETAP SAMA) ===
const projectsData = [
  {
    title: "AI-Powered Inventory System",
    description: "Developed a warehouse management system using AI for demand forecasting and route optimization, reducing operational costs.",
    tags: ["React", "Python", "FastAPI", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop",
    projectUrl: "#",
  },
  {
    title: "Cinematic Short Movie: 'Echoes'",
    description: "Lead editor and script consultant. Responsible for editing, color grading, motion graphics, and refining the narrative flow.",
    tags: ["Premiere Pro", "After Effects", "Blender"],
    imageUrl: "https://images.unsplash.com/photo-1754630551378-e1ecffe9da6b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    projectUrl: "#",
  },
  {
    title: "Decentralized Voting Platform",
    description: "A secure and transparent voting application built on a custom blockchain solution to ensure data integrity and immutability.",
    tags: ["Rust", "Next.js", "GraphQL", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop",
    projectUrl: "#",
  },
  {
    title: "Modern Portfolio Website",
    description: "The portfolio you are looking at now. Designed with a dark aesthetic, built with React and Tailwind CSS for fluid animations.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "#",
  },
  {
    title: "E-Commerce Cloud Platform",
    description: "Scalable e-commerce backend deployed on AWS, handling thousands of transactions per second with a microservices architecture.",
    tags: ["Java", "Spring Boot", "AWS", "Kubernetes"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "#",
  },
  {
    title: "Interactive Data Visualization",
    description: "A web-based tool for visualizing complex datasets with interactive charts and maps, built using D3.js and React.",
    tags: ["D3.js", "React", "Node.js", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "#",
  },
];

// ===== KARTU PROYEK DENGAN FIX TOTAL =====
const ProjectCard = ({ project }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-lg 
                   transform hover:-translate-y-2 transition-all duration-500
                   hover:shadow-2xl hover:shadow-cyan-500/40">
      
      {/* Gambar */}
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Gradien gelap di atas gambar */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

      {/* Kontainer untuk semua konten teks */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        
        {/* Judul Proyek (Selalu terlihat) */}
        <h3 className="text-xl font-bold text-white transition-all duration-300 transform group-hover:-translate-y-2">
          {project.title}
        </h3>

        {/* Detail Proyek (Muncul saat hover) */}
        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, key) => (
              <span 
                key={key} 
                className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold
                           transform hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg 
                       hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};


// === KOMPONEN UTAMA (BACKGROUND HITAM PEKAT) ===
export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black" 
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4"> 
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};