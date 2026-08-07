"use client";
import Navigation from './components/Navigation';

function HomePage() {
  const skills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Git', icon: '📝' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hey, I&apos;m <span className="gradient-text">Lun</span>!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Web Front End Developer, Web3 Enthusiast & Open Source Contributor
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              A motivated developer who wants to push Information Literacy in various areas and fields. 
              I write dynamic front-end applications and create dApps on Sui. 
              Cyber security isn&apos;t my main focus, but I can give solid daily advice and crack some CTFs. (L337 frfr)
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Projects
            </a>
            <a 
              href="/contact" 
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-800 rounded-lg p-6 text-center card-hover">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-medium text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-800 rounded-2xl px-8">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Current Focus</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🧠 Learning Smart Contract Development and UI/UX Design</li>
                  <li>⚡ Actively promotes, contributes and uses Open Source</li>
                  <li>🔥 Building dynamic front-end applications</li>
                  <li>🌐 Creating dApps on the Sui blockchain</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Competitions & Events</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🏆 Sitcon Hackathon 2024</li>
                  <li>💻 雙北春季程式設計節 2025</li>
                  <li>🚀 Sui Overflow 2025</li>
                  <li>🛡️ 資安技能金盾獎</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;