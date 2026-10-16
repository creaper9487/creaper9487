"use client";
import Navigation from '../components/Navigation';

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Web3 dApp on Sui",
      description: "A decentralized application built on the Sui blockchain, showcasing smart contract integration and modern web technologies.",
      tech: ["React", "TypeScript", "Sui", "Web3"],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS, optimized for GitHub Pages deployment.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      status: "Completed",
      github: "https://github.com/creaper9487/creaper9487",
      demo: "#"
    },
    {
      id: 3,
      title: "CTF Security Tools",
      description: "Collection of cybersecurity tools and scripts for Capture The Flag competitions and security analysis.",
      tech: ["Python", "Bash", "Security", "CTF"],
      status: "Ongoing",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Open Source Contributions",
      description: "Various contributions to open source projects, focusing on frontend development and developer tools.",
      tech: ["JavaScript", "Vue.js", "React", "Open Source"],
      status: "Ongoing",
      github: "https://github.com/creaper9487",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-600';
      case 'In Development':
        return 'bg-blue-600';
      case 'Ongoing':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my work in web development, Web3, and open source contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl p-8 card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-8">Want to see more of my work?</p>
          <a 
            href="https://github.com/creaper9487"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Repositories
          </a>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;