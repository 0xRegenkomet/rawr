# Memecoin Website Template - Configuration Checklist

## 🔧 Required Changes

### 1. Contract Information
**File**: `src/app/page.tsx`
- [ ] `contractAddress` - Your Solana contract address
- [ ] `pumpFunUrl` - Your Pump.fun URL
- [ ] `xCommunityUrl` - Your X/Twitter community URL
- [ ] `dexscreenerUrl` - Your Dexscreener pair URL

### 2. Branding & Content
**Files**: `src/app/page.tsx`, `src/app/layout.tsx`, `src/components/LoadingScreen.tsx`

#### Token Information:
- [ ] Token Symbol (replace "SAMPLE" with your symbol)
- [ ] Token Name (replace "Sample Memecoin" with your name)
- [ ] Tagline (replace "Your sample tagline goes here")
- [ ] Description (replace in layout.tsx metadata)

#### Visual Elements:
- [ ] Main logo image (`public/images/sample-logo.jpg`)
- [ ] Favicon (`public/favicon.ico`)
- [ ] Emoji fallback (replace 🚀 with your preferred emoji)

### 3. Package Configuration
**File**: `package.json`
- [ ] Project name
- [ ] Description
- [ ] Keywords (add your specific keywords)

### 4. Chart Integration
**File**: `src/app/page.tsx`
- [ ] Dexscreener iframe URL (replace YOUR_PAIR_ADDRESS_HERE)

### 5. Social Media
**Files**: Various
- [ ] X/Twitter community link
- [ ] Social media descriptions
- [ ] Community join text

## 🎨 Optional Customizations

### Colors
- [ ] Primary color scheme (currently yellow/gold)
- [ ] Gradient colors
- [ ] Accent colors

### Layout
- [ ] Add/remove sections
- [ ] Modify grid layouts
- [ ] Custom components

### Content
- [ ] Additional sections
- [ ] Custom text content
- [ ] Additional links/buttons

## 📝 Quick Replace Commands

Use these find/replace operations to quickly update common elements:

1. **Replace token symbol**: Find "SAMPLE" → Replace with "YOUR_SYMBOL"
2. **Replace token name**: Find "Sample Memecoin" → Replace with "Your Token Name"
3. **Replace tagline**: Find "Your sample tagline goes here" → Replace with "Your Tagline"
4. **Replace contract**: Find "YOUR_CONTRACT_ADDRESS_HERE" → Replace with actual address

## 🚀 Deployment Checklist

Before deploying:
- [ ] All sample content replaced
- [ ] Images uploaded and paths updated
- [ ] Contract addresses verified
- [ ] URLs tested
- [ ] Mobile responsiveness checked
- [ ] SEO metadata updated
- [ ] Build process tested (`npm run build`)

## 📱 Testing

Test these features:
- [ ] Loading screen works
- [ ] Contract address copying
- [ ] All external links work
- [ ] Chart loads properly
- [ ] Mobile layout
- [ ] Social media integration

---

**Remember**: This is a template - customize it to match your memecoin's brand and requirements!
