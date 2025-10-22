# Memecoin Website Template

This is a complete template for creating memecoin websites. Simply replace the sample content with your actual memecoin information and customize as needed.

## 🚀 Quick Start

1. **Copy this template folder** to your new project directory
2. **Replace sample content** with your memecoin information
3. **Install dependencies**: `npm install`
4. **Run development server**: `npm run dev`
5. **Build for production**: `npm run build`

## 📝 What to Replace

### 1. Contract Information
In `src/app/page.tsx`, update these variables:
```typescript
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"
const pumpFunUrl = "https://pump.fun/coin/YOUR_CONTRACT_ADDRESS_HERE"
const xCommunityUrl = "https://x.com/i/communities/YOUR_COMMUNITY_ID_HERE"
const dexscreenerUrl = "https://dexscreener.com/solana/YOUR_PAIR_ADDRESS_HERE"
```

### 2. Memecoin Branding
Replace these elements throughout the files:
- **Token Symbol**: Replace `SAMPLE` with your token symbol (e.g., `DOGE`, `PEPE`)
- **Token Name**: Replace `Sample Memecoin` with your token name
- **Tagline**: Replace `Your sample tagline goes here` with your actual tagline
- **Logo**: Replace `sample-logo.jpg` with your actual logo image

### 3. Images
Replace these files in `public/images/`:
- `sample-logo.jpg` - Your main token logo
- `sample-x-logo.svg` - X/Twitter logo (or keep the sample)
- `sample-dexscreener-logo.png` - Dexscreener logo (or keep the sample)

### 4. Metadata
In `src/app/layout.tsx`, update:
- `title`: Your token symbol
- `description`: Your tagline
- `images`: Path to your logo

### 5. Package.json
Update `package.json`:
- `name`: Your project name
- `description`: Your token description
- `keywords`: Add your specific keywords

## 🎨 Customization Options

### Colors
The template uses a yellow/gold color scheme. To change colors:
1. Search for `yellow-400`, `yellow-500`, `yellow-600` in the CSS classes
2. Replace with your preferred color (e.g., `blue-400`, `green-400`, `purple-400`)

### Layout
- Modify `src/app/page.tsx` to add/remove sections
- Adjust the grid layouts for different screen sizes
- Add new components in `src/components/`

### Styling
- Edit `src/app/globals.css` for global styles
- Modify Tailwind classes in components for specific styling

## 📁 File Structure

```
Extra/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── globals.css       # Global styles
│   └── components/
│       └── LoadingScreen.tsx  # Loading screen component
├── public/
│   └── images/
│       ├── sample-logo.jpg           # Main logo (REPLACE)
│       ├── sample-x-logo.svg         # X logo
│       └── sample-dexscreener-logo.png # Dexscreener logo
├── package.json              # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── postcss.config.js       # PostCSS configuration
```

## 🔧 Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Loading screen with progress bar
- ✅ Contract address copy functionality
- ✅ Social media integration (X/Twitter)
- ✅ Dexscreener chart embedding
- ✅ SEO optimized with metadata
- ✅ Modern gradient design
- ✅ Smooth animations and transitions

## 🎯 SEO Optimization

The template includes:
- Open Graph meta tags
- Twitter Card meta tags
- Proper semantic HTML
- Optimized images
- Fast loading times

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📞 Support

Created by [Regenkomet.dev](https://regenkomet.dev)

---

**Note**: Remember to replace all sample content with your actual memecoin information before deploying!
