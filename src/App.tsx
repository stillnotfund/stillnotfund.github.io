import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showSquare, setShowSquare] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setShowSquare(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-black overflow-y-auto">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4">404notfund</h1>
          <p className="text-xl text-gray-400">Welcome to our innovative projects</p>
          <div className="mt-8">
            <a href="#content" className="text-white animate-bounce">
              ↓ Scroll down ↓
            </a>
          </div>
        </div>
      </div>
      
      <div id="content" className={`h-screen flex items-center justify-center transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-white text-2xl">
          404 Github
          <a href="https://github.com/hollow-leaf" target="_blank" rel="noopener noreferrer" className="ml-4 inline-block">
            <FontAwesomeIcon icon={faGithub} className="text-white text-4xl animate-bounce-subtle" />
          </a>
        </div>
        {showSquare && (
          <div className="absolute w-8 h-8 bg-white animate-fall" />
        )}
      </div>
    </div>
  )
}

export default App