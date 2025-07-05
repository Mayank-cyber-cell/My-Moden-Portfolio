import React from 'react';
import { Sparkles, Code, Zap } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Animated Logo */}
        <div className="relative mb-12">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-cyan-400/30 rounded-full animate-spin"></div>
          {/* Middle Ring */}
          <div className="absolute inset-2 w-28 h-28 border-4 border-purple-500/40 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          {/* Inner Ring */}
          <div className="absolute inset-4 w-24 h-24 border-4 border-pink-400/50 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          
          {/* Center Logo */}
          <div className="relative w-32 h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-2xl animate-pulse">
            <span className="relative z-10">MKS</span>
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white animate-bounce">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white animate-bounce delay-500">
            <Code className="w-4 h-4" />
          </div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white animate-bounce delay-1000">
            <Zap className="w-3 h-3" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animate-pulse">
            Mayank Kumar Shah
          </h2>
          <p className="text-xl text-blue-200 animate-pulse">
            Loading Portfolio...
          </p>
          
          {/* Loading Bar */}
          <div className="w-80 h-3 bg-gray-800/50 rounded-full overflow-hidden mx-auto backdrop-blur-xl border border-white/10">
            <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse rounded-full shadow-lg"></div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* Status Text */}
          <div className="mt-8 space-y-2">
            <p className="text-gray-300 text-sm animate-pulse">
              Initializing awesome experience...
            </p>
            <div className="flex justify-center space-x-4 text-xs text-gray-400">
              <span className="animate-pulse delay-300">Loading components</span>
              <span className="animate-pulse delay-700">Setting up animations</span>
              <span className="animate-pulse delay-1000">Almost ready!</span>
            </div>
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-60"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `orbit 4s linear infinite`,
                animationDelay: `${i * 0.7}s`,
                transformOrigin: `0 ${80 + i * 20}px`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;