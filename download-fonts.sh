#!/bin/bash

# Font Download Script for Portfolio
# Downloads Google Fonts and serves them locally for better performance

set -e

FONTS_DIR="./public/fonts"
FONTS_CSS_FILE="./src/local-fonts.css"

# Create fonts directory if it doesn't exist
mkdir -p "$FONTS_DIR"

echo "🔗 Downloading Google Fonts for local serving..."

# Define fonts to download with their Google Fonts URLs
declare -A FONTS=(
    ["Inter"]="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
    ["Oswald"]="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap"
    ["Fredoka-One"]="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
    ["Righteous"]="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
    ["Bungee"]="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
    ["Bangers"]="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
    ["Orbitron"]="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap"
    ["Russo-One"]="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
    ["Anton"]="https://fonts.googleapis.com/css2?family=Anton&display=swap"
    ["Luckiest-Guy"]="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
    ["Creepster"]="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
    ["Permanent-Marker"]="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
)

# Function to download font files
download_font() {
    local font_name="$1"
    local font_url="$2"
    
    echo "📥 Downloading $font_name..."
    
    # Get CSS file
    css_content=$(curl -s -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" "$font_url")
    
    # Extract font URLs from CSS
    font_urls=$(echo "$css_content" | grep -o 'https://fonts.gstatic.com/[^)]*' | sort | uniq)
    
    # Create font directory
    font_dir="$FONTS_DIR/$font_name"
    mkdir -p "$font_dir"
    
    # Download each font file
    while IFS= read -r url; do
        if [ ! -z "$url" ]; then
            filename=$(basename "$url" | sed 's/[^a-zA-Z0-9._-]//g')
            echo "  ⬇️  $filename"
            curl -s "$url" -o "$font_dir/$filename"
        fi
    done <<< "$font_urls"
    
    # Create local CSS for this font
    local_css=$(echo "$css_content" | sed "s|https://fonts.gstatic.com/[^/]*/[^/]*/[^/]*/|/fonts/$font_name/|g")
    echo "$local_css" > "$font_dir/$font_name.css"
}

# Download all fonts
for font_name in "${!FONTS[@]}"; do
    download_font "$font_name" "${FONTS[$font_name]}"
done

# Create master CSS file
echo "📝 Creating master CSS file..."
cat > "$FONTS_CSS_FILE" << 'EOF'
/* Local fonts for better performance */

/* Essential fonts */
@import url('/fonts/Inter/Inter.css');
@import url('/fonts/Oswald/Oswald.css');

/* Creative fonts loaded asynchronously */
@import url('/fonts/Fredoka-One/Fredoka-One.css');
@import url('/fonts/Righteous/Righteous.css');
@import url('/fonts/Bungee/Bungee.css');
@import url('/fonts/Bangers/Bangers.css');
@import url('/fonts/Orbitron/Orbitron.css');
@import url('/fonts/Russo-One/Russo-One.css');
@import url('/fonts/Anton/Anton.css');
@import url('/fonts/Luckiest-Guy/Luckiest-Guy.css');
@import url('/fonts/Creepster/Creepster.css');
@import url('/fonts/Permanent-Marker/Permanent-Marker.css');

/* Font face declarations for creative fonts */
.creative-fonts {
  font-display: swap;
}

/* Fallback font declarations */
.font-fredoka { font-family: 'Fredoka One', cursive; }
.font-righteous { font-family: 'Righteous', cursive; }
.font-bungee { font-family: 'Bungee', cursive; }
.font-bangers { font-family: 'Bangers', cursive; }
.font-orbitron { font-family: 'Orbitron', monospace; }
.font-russo { font-family: 'Russo One', sans-serif; }
.font-anton { font-family: 'Anton', sans-serif; }
.font-luckiest { font-family: 'Luckiest Guy', cursive; }
.font-creepster { font-family: 'Creepster', cursive; }
.font-permanent { font-family: 'Permanent Marker', cursive; }
EOF

echo "✅ Font download complete!"
echo "📁 Fonts saved to: $FONTS_DIR"
echo "📄 CSS file created: $FONTS_CSS_FILE"
echo ""
echo "Next steps:"
echo "1. Update your HTML to use local fonts"
echo "2. Remove Google Fonts CDN links"
echo "3. Import the local-fonts.css file"
