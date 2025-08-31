#!/bin/bash

echo "Starting font download script..."

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Inter font
echo "Downloading Inter..."
mkdir -p public/fonts/Inter
curl -s "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" > temp_inter.css
grep -oP 'url\(\K[^)]*' temp_inter.css | sed 's/['"'"'"]//g' | while read -r url; do
    filename=$(basename "$url")
    curl -s -o "public/fonts/Inter/$filename" "$url"
done
sed 's|https://fonts.gstatic.com/s/inter/[^/]*/[^/]*/|./|g' temp_inter.css > public/fonts/Inter/Inter.css
rm temp_inter.css
echo "✓ Inter downloaded"

# Download Oswald font
echo "Downloading Oswald..."
mkdir -p public/fonts/Oswald
curl -s "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" > temp_oswald.css
grep -oP 'url\(\K[^)]*' temp_oswald.css | sed 's/['"'"'"]//g' | while read -r url; do
    filename=$(basename "$url")
    curl -s -o "public/fonts/Oswald/$filename" "$url"
done
sed 's|https://fonts.gstatic.com/s/oswald/[^/]*/[^/]*/|./|g' temp_oswald.css > public/fonts/Oswald/Oswald.css
rm temp_oswald.css
echo "✓ Oswald downloaded"

# Download decorative fonts
declare -A decorative_fonts=(
    ["Anton"]="https://fonts.googleapis.com/css2?family=Anton&display=swap"
    ["Bangers"]="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
    ["Bungee"]="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
    ["Creepster"]="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
    ["Fredoka-One"]="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
    ["Luckiest-Guy"]="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
    ["Orbitron"]="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
    ["Permanent-Marker"]="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
    ["Righteous"]="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
    ["Russo-One"]="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
)

for font_name in "${!decorative_fonts[@]}"; do
    echo "Downloading $font_name..."
    font_url="${decorative_fonts[$font_name]}"
    font_dir="public/fonts/$font_name"
    
    mkdir -p "$font_dir"
    
    # Download CSS
    curl -s "$font_url" > "temp_${font_name}.css"
    
    # Download font files
    grep -oP 'url\(\K[^)]*' "temp_${font_name}.css" | sed 's/['"'"'"]//g' | while read -r url; do
        filename=$(basename "$url")
        curl -s -o "$font_dir/$filename" "$url"
    done
    
    # Create local CSS file
    sed "s|https://fonts.gstatic.com/s/[^/]*/[^/]*/[^/]*/|./|g" "temp_${font_name}.css" > "$font_dir/$font_name.css"
    rm "temp_${font_name}.css"
    echo "✓ $font_name downloaded"
done

echo "All fonts downloaded successfully!"
