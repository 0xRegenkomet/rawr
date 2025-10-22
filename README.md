# $rawr - Little Cat Memecoin Website

A modern, animated website for the $rawr memecoin featuring falling lion emojis, community memes, and real-time price tracking.

## 🦁 Features

- **Animated Background**: Falling lion emojis (🦁) with smooth animations
- **Community Memes**: Downloadable meme gallery from the community
- **Real-time Chart**: Live Dexscreener integration for price tracking
- **Responsive Design**: Works perfectly on all devices
- **Smooth Loading**: Custom loading screen with fade transitions
- **Social Integration**: Direct links to X Community and trading platforms

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Dexscreener API** - Real-time price data
- **Pump.fun Integration** - Direct trading links

## 📱 Live Links

- **Contract Address**: `7bQKAMxamCoLxhscYXYu7tkEbgSLdMrJrktTdZq8pump`
- **Buy on Pump.fun**: [Trade $rawr](https://pump.fun/coin/7bQKAMxamCoLxhscYXYu7tkEbgSLdMrJrktTdZq8pump)
- **X Community**: [Join Community](https://x.com/i/communities/1979873585234866279)
- **Dexscreener**: [View Chart](https://dexscreener.com/solana/4sbjremyvtb4afxvzqud5tdk9mzmj3lbbo7vuiscgmys)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/0xRegenkomet/rawr.git
cd rawr

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Memes
1. Add meme images to `public/images/memes/`
2. Update the meme array in `src/app/page.tsx`
3. The images will automatically appear in the memes section

### Changing Colors
- Update the gradient colors in `src/app/globals.css`
- Modify the background gradient in `src/app/page.tsx`

### Updating Links
- Contract address: `src/app/page.tsx` (line 9)
- Social links: `src/app/page.tsx` (lines 10-12)

## 📁 Project Structure

```
rawr/
├── public/
│   ├── images/
│   │   ├── memes/          # Community meme images
│   │   ├── rawr.jpg        # Main logo
│   │   └── dex-screener-logo-png_seeklogo-527276.png
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and animations
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Main page component
│   └── components/
│       └── LoadingScreen.tsx # Custom loading screen
├── package.json
└── README.md
```

## 🌟 Features in Detail

### Falling Lions Animation
- Dynamic lion emojis fall from top to bottom
- Random positioning and sizing for variety
- Smooth rotation and opacity transitions
- Performance optimized with auto-cleanup

### Memes Section
- Responsive grid layout (1-3 columns based on screen size)
- Download functionality for each meme
- Hover effects and smooth transitions
- Automatic image optimization with Next.js

### Real-time Chart
- Embedded Dexscreener chart
- Dark theme integration
- Responsive iframe with proper aspect ratios
- Live price updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Website**: [regenkomet.dev](https://regenkomet.dev)
- **GitHub**: [@0xRegenkomet](https://github.com/0xRegenkomet)

---

**Built with ❤️ for the $rawr community**