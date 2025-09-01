#!/bin/bash

echo "🎨 Generating icons from public/favicon.svg..."
echo "=============================================="

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick found - generating PNG icons..."
    
    # Generate PNG icons in public folder
    convert public/favicon.svg -resize 192x192 public/icon-192.png
    convert public/favicon.svg -resize 512x512 public/icon-512.png
    convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png
    convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
    convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
    
    echo ""
    echo "✅ Icons generated successfully in public folder!"
    echo "📁 Created files:"
    echo "   • public/icon-192.png (192x192)"
    echo "   • public/icon-512.png (512x512)"
    echo "   • public/apple-touch-icon.png (180x180)"
    echo "   • public/favicon-32x32.png (32x32)"
    echo "   • public/favicon-16x16.png (16x16)"
    echo ""
    echo "🚀 Ready for deployment!"
    
elif command -v magick &> /dev/null; then
    echo "✅ ImageMagick (magick) found - generating PNG icons..."
    
    # Generate PNG icons using magick command
    magick public/favicon.svg -resize 192x192 public/icon-192.png
    magick public/favicon.svg -resize 512x512 public/icon-512.png
    magick public/favicon.svg -resize 180x180 public/apple-touch-icon.png
    magick public/favicon.svg -resize 32x32 public/favicon-32x32.png
    magick public/favicon.svg -resize 16x16 public/favicon-16x16.png
    
    echo ""
    echo "✅ Icons generated successfully!"
    echo "🚀 Ready for deployment!"
    
else
    echo "❌ ImageMagick not found. Please install it:"
    echo ""
    echo "🔧 Installation commands:"
    echo "   • Ubuntu/Debian: sudo apt install imagemagick"
    echo "   • macOS: brew install imagemagick"
    echo "   • Arch Linux: sudo pacman -S imagemagick"
    echo ""
    echo "🌐 Or use online converters:"
    echo "   • https://realfavicongenerator.net/"
    echo "   • https://favicon.io/favicon-converter/"
    echo ""
    echo "📝 Manually create these PNG files in the public folder:"
    echo "   • icon-192.png (192x192)"
    echo "   • icon-512.png (512x512)" 
    echo "   • apple-touch-icon.png (180x180)"
    echo "   • favicon-32x32.png (32x32)"
    echo "   • favicon-16x16.png (16x16)"
fi
