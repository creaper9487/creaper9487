"use client";
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

function PlaygroundPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [colorScheme, setColorScheme] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const colorSchemes = [
    { name: 'Purple-Blue', from: 'from-purple-600', to: 'to-blue-600' },
    { name: 'Green-Teal', from: 'from-green-600', to: 'to-teal-600' },
    { name: 'Orange-Red', from: 'from-orange-600', to: 'to-red-600' },
    { name: 'Pink-Purple', from: 'from-pink-600', to: 'to-purple-600' }
  ];

  const experiments = [
    {
      title: "Animated Gradient Text",
      description: "Experimenting with CSS gradients and animations",
      component: (
        <div className={`text-4xl font-bold bg-gradient-to-r ${colorSchemes[colorScheme].from} ${colorSchemes[colorScheme].to} bg-clip-text text-transparent animate-pulse`} style={{ animationDuration: `${animationSpeed}s` }}>
          Hello, World! 🌟
        </div>
      )
    },
    {
      title: "Live Clock",
      description: "Real-time clock using React hooks",
      component: (
        <div className="text-2xl font-mono bg-gray-800 p-4 rounded-lg">
          <div className="text-blue-400">Current Time:</div>
          <div className="text-white">{currentTime}</div>
        </div>
      )
    },
    {
      title: "Interactive Cards",
      description: "Hover effects and transitions",
      component: (
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg card-hover cursor-pointer">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm text-gray-400">Card {i}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "CSS Shapes",
      description: "Playing with CSS shapes and transforms",
      component: (
        <div className="flex justify-center space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-16 h-16 bg-green-500 transform rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="w-16 h-16 bg-purple-500 clip-path-triangle animate-pulse"></div>
        </div>
      )
    }
  ];

  const tools = [
    {
      name: "Color Picker",
      description: "Random color generator",
      action: () => {
        const colors = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'orange', 'teal'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        alert(`Random color: ${randomColor} 🎨`);
      }
    },
    {
      name: "Text Generator",
      description: "Lorem ipsum generator",
      action: () => {
        const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        navigator.clipboard.writeText(text);
        alert("Lorem ipsum copied to clipboard! 📝");
      }
    },
    {
      name: "Random Quote",
      description: "Dev inspiration quotes",
      action: () => {
        const quotes = [
          "Code is poetry. 💫",
          "First, solve the problem. Then, write the code. 🚀",
          "The best error message is the one that never shows up. ✨",
          "Simplicity is the ultimate sophistication. 🎯"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert(randomQuote);
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Playground</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A space for experimentation, prototyping, and creative coding
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12 p-6 bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">Interactive Controls</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Color Scheme: {colorSchemes[colorScheme].name}
              </label>
              <div className="flex gap-2">
                {colorSchemes.map((scheme, index) => (
                  <button
                    key={index}
                    onClick={() => setColorScheme(index)}
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${scheme.from} ${scheme.to} ${colorScheme === index ? 'ring-2 ring-white' : ''}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Animation Speed: {animationSpeed}s
              </label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Experiments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-white">Creative Experiments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiments.map((experiment, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{experiment.title}</h3>
                <p className="text-gray-400 mb-6">{experiment.description}</p>
                <div className="flex justify-center items-center min-h-[100px]">
                  {experiment.component}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-white">Developer Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <button
                key={index}
                onClick={tool.action}
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-left transition-colors card-hover"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-400">{tool.name}</h3>
                <p className="text-gray-400">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Code Snippet */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">Code Snippet of the Day</h2>
          <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Generate a random hex color
const randomColor = () => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
};

// Usage
console.log(randomColor()); // #a3c4f7`}
            </pre>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            💡 This playground is constantly evolving. New experiments and tools are added regularly!
          </p>
        </div>

        {/* Fun Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-800 rounded-full px-8 py-4">
            <span className="text-2xl">🎮</span>
            <span className="ml-2 text-gray-300">Keep experimenting, keep learning!</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PlaygroundPage;