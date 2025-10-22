'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const contractAddress = "7bQKAMxamCoLxhscYXYu7tkEbgSLdMrJrktTdZq8pump"
  const pumpFunUrl = "https://pump.fun/coin/7bQKAMxamCoLxhscYXYu7tkEbgSLdMrJrktTdZq8pump"
  const xCommunityUrl = "https://x.com/i/communities/1979873585234866279"
  const dexscreenerUrl = "https://dexscreener.com/solana/4sbjremyvtb4afxvzqud5tdk9mzmj3lbbo7vuiscgmys"

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  useEffect(() => {
    // Create falling lion emojis
    const createFallingLion = () => {
      const lion = document.createElement('div')
      lion.innerHTML = '🦁'
      lion.style.position = 'fixed'
      lion.style.left = Math.random() * window.innerWidth + 'px'
      lion.style.top = '-50px'
      lion.style.fontSize = Math.random() * 20 + 20 + 'px'
      lion.style.zIndex = '1'
      lion.style.pointerEvents = 'none'
      lion.style.opacity = '0.3'
      lion.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`
      
      document.body.appendChild(lion)
      
      // Remove the element after animation
      setTimeout(() => {
        if (lion.parentNode) {
          lion.parentNode.removeChild(lion)
        }
      }, 5000)
    }

    // Create lions periodically
    const interval = setInterval(createFallingLion, 800)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Lion Emojis */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 text-4xl opacity-10 animate-pulse">🦁</div>
        <div className="absolute top-32 right-20 text-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}>🦁</div>
        <div className="absolute top-64 left-1/4 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🦁</div>
        <div className="absolute top-96 right-1/3 text-2xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>🦁</div>
        <div className="absolute top-1/2 left-10 text-6xl opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}>🦁</div>
        <div className="absolute top-1/3 right-10 text-3xl opacity-15 animate-pulse" style={{ animationDelay: '2.5s' }}>🦁</div>
        <div className="absolute bottom-32 left-1/3 text-4xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}>🦁</div>
        <div className="absolute bottom-20 right-1/4 text-2xl opacity-20 animate-pulse" style={{ animationDelay: '0.8s' }}>🦁</div>
      </div>
      
      {/* Navbar */}
      <nav className="relative backdrop-blur-md bg-black/20 border-b border-gray-800/50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-6 gap-4 lg:gap-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">$</span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-bungee text-shadow-glow">
                $rawr
              </h1>
            </div>
            
            <div className="flex items-center space-x-3 bg-gray-900/50 rounded-lg px-4 py-2 border border-gray-700/50">
              <span className="text-sm text-gray-400 font-medium">Contract:</span>
              <code className="text-xs bg-gray-800/50 px-3 py-1 rounded text-yellow-400 font-mono max-w-[200px] lg:max-w-none truncate">
                {contractAddress}
              </code>
              <button
                onClick={() => copyToClipboard(contractAddress)}
                className="text-gray-400 hover:text-yellow-400 transition-colors p-1 hover:bg-gray-800/50 rounded"
                title="Copy contract address"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            
            <a
              href={pumpFunUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Buy Now
            </a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          {/* Logo */}
          <div className="relative mb-8 lg:mb-12">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-8 flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/images/rawr.jpg"
                  alt="$rawr Logo"
                  width={320}
                  height={320}
                  className="relative rounded-2xl w-full h-full object-cover shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <span className="text-6xl hidden">🚀</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight font-fredoka text-shadow-fun">
              little cat
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed font-righteous text-outline">
              little cat big rawr
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live on Solana</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Pump.fun Launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* X Community Card */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Image
                    src="/images/sample-x-logo.svg"
                    alt="X Logo"
                    width={24}
                    height={24}
                    className="text-black"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-creepster text-shadow-glow">X Community</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-8 text-center leading-relaxed">
                Join our vibrant community on X (Twitter) for the latest updates, memes, and community discussions.
              </p>
              <div className="flex justify-center">
                <a
                  href={xCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Join Community</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Dexscreener Card */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Image
                    src="/images/dex-screener-logo-png_seeklogo-527276.png"
                    alt="Dexscreener Logo"
                    width={24}
                    height={24}
                    className="text-black"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-nosifer text-shadow-glow">Dexscreener</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-8 text-center leading-relaxed">
                Track real-time price movements, trading volume, and market data for $rawr on Dexscreener.
              </p>
              <div className="flex justify-center">
                <a
                  href={dexscreenerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>View Chart</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 font-bungee text-shadow-fun">
              Live Chart
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
          </div>
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
            <div className="relative">
              <div id="dexscreener-embed" className="relative w-full pb-[125%] rounded-xl overflow-hidden">
                <iframe
                  src="https://dexscreener.com/solana/4SbJREMyVtb4afxVzqud5tdK9mZmJ3LBBo7VuiSCgmys?embed=1&loadChartSettings=0&trades=0&tabs=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                  className="absolute w-full h-full top-0 left-0 border-0 rounded-xl"
                  title="Dexscreener Chart"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Memes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 font-fredoka text-shadow-fun">
              Community Memes
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'G30gzWXXYAAtvfA.jpg',
              'G30OL2dWIAA25jg.jpg',
              'G33kYdcXQAAtB8J.jpg',
              'G3qw04xXQAAGUuE.jpg',
              'G3trL2MWcAAKShp.jpg',
              'G3y6Ck1X0AA2pI7.jpg',
              'G3yfY5MXcAACr2j.jpg',
              'G3zGHNvXwAAXFxT.jpg',
              'G3zZ5IvWkAAstvM.jpg'
            ].map((memeFile, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src={`/images/memes/${memeFile}`}
                      alt={`Meme ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={`/images/memes/${memeFile}`}
                      download={memeFile}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">$</span>
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-bungee text-shadow-glow">
                $rawr
              </h4>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Website created by{' '}
              <a
                href="https://regenkomet.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium"
              >
                Regenkomet.dev
              </a>
            </p>
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
              <span>© 2025 $rawr</span>
              <span>•</span>
              <span>Built on Solana</span>
              <span>•</span>
              <span>Pump.fun Launch</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
