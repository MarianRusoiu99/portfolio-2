#!/bin/bash

# Font Verification Script
# Checks that all fonts are loading locally

echo "🔍 Verifying Local Font Setup..."
echo ""

# Check if font files exist
echo "📁 Checking font files:"
for font_dir in Inter Oswald Fredoka-One Righteous Bungee Bangers Orbitron Russo-One Anton Luckiest-Guy Creepster Permanent-Marker; do
    if [ -d "public/fonts/$font_dir" ]; then
        file_count=$(find "public/fonts/$font_dir" -name "*.ttf" | wc -l)
        echo "✅ $font_dir: $file_count font files"
    else
        echo "❌ $font_dir: Missing"
    fi
done

echo ""
echo "🔗 Checking CSS references:"

# Check for external font URLs in CSS files
external_refs=$(grep -r "fonts.googleapis.com\|fonts.gstatic.com" src/ public/ 2>/dev/null || true)
if [ -z "$external_refs" ]; then
    echo "✅ No external font references found in CSS"
else
    echo "❌ External font references found:"
    echo "$external_refs"
fi

echo ""
echo "📦 Checking built assets:"
if [ -d "dist" ]; then
    external_in_dist=$(grep -r "fonts.googleapis.com\|fonts.gstatic.com" dist/ 2>/dev/null || true)
    if [ -z "$external_in_dist" ]; then
        echo "✅ No external font references in built files"
    else
        echo "❌ External font references in built files:"
        echo "$external_in_dist"
    fi
else
    echo "⚠️ No dist folder found. Run 'npm run build' first."
fi

echo ""
echo "🚀 Final Steps:"
echo "1. Deploy the dist/ folder"
echo "2. Test in incognito browser"
echo "3. Check Network tab - should see no googleapis.com requests"
echo "4. Run PageSpeed Insights to verify"
echo ""
echo "📊 Expected improvement:"
echo "- Remove ~6.6 KiB + 690ms from googleapis.com"
echo "- Remove multiple font CSS downloads"
echo "- Better PageSpeed score"
