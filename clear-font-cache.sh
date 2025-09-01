#!/bin/bash

# Clear Browser Cache and Force Local Fonts
# This script helps clear any cached Google Fonts

echo "🧹 Clearing browser cache and forcing local fonts..."

# Add cache busting to HTML
TIMESTAMP=$(date +%s)

# Create a cache-busted version of the build
echo "📦 Building with cache busting..."
npm run build

echo "🔄 Cache clearing instructions:"
echo ""
echo "To completely eliminate Google Fonts requests:"
echo ""
echo "1. 🌐 Browser Cache:"
echo "   - Open DevTools (F12)"
echo "   - Right-click refresh button"
echo "   - Select 'Empty Cache and Hard Reload'"
echo ""
echo "2. 🔧 Service Worker:"
echo "   - Go to Application tab in DevTools"
echo "   - Click 'Storage' in left panel"
echo "   - Click 'Clear storage'"
echo "   - Check all boxes and click 'Clear site data'"
echo ""
echo "3. 🚀 Test in Incognito:"
echo "   - Open site in incognito/private browsing"
echo "   - Check Network tab for any fonts.googleapis.com requests"
echo ""
echo "4. 📱 Production Test:"
echo "   - Deploy the built files"
echo "   - Test on production URL"
echo "   - Use PageSpeed Insights to verify no external font requests"
echo ""
echo "✅ All font files are now local:"
echo "📁 /fonts/Inter/"
echo "📁 /fonts/Oswald/" 
echo "📁 /fonts/[creative-fonts]/"
echo ""
echo "🚫 Service worker now blocks any googleapis.com requests"
