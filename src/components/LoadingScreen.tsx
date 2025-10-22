'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 z-50 flex flex-col items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
      </div>

      {/* Logo */}
      <div className="relative mb-12">
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-8 flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <Image
              src="/images/rawr.jpg"
              alt="$rawr Logo"
              width={192}
              height={192}
              className="relative rounded-2xl w-full h-full object-cover shadow-2xl hover-scale fade-in-up"
              priority
            />
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4 animate-pulse font-lilita text-shadow-colorful">
          $rawr
        </h2>
        <p className="text-gray-300 text-lg lg:text-xl font-light font-lilita text-shadow-colorful">
          Loading little cat...
        </p>
      </div>

      {/* Loading Bar */}
      <div className="w-80 sm:w-96 lg:w-[28rem] mx-auto">
        <div className="bg-gray-800/50 rounded-full h-4 border border-gray-700/50 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect on progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Progress Text */}
        <div className="text-center mt-6">
          <span className="text-gray-300 text-lg font-medium">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Loading Dots Animation */}
      <div className="flex space-x-3 mt-12">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  )
}
