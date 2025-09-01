#!/bin/bash

echo "Fixing font CSS files to use local paths..."

# Fix Inter CSS
echo "Fixing Inter CSS..."
python3 << 'EOF'
import re
import os

css_file = 'public/fonts/Inter/Inter.css'
if os.path.exists(css_file):
    with open(css_file, 'r') as f:
        content = f.read()
    
    # Replace all Google Fonts URLs with local paths
    def replace_url(match):
        url = match.group(1).strip('\'"')
        filename = os.path.basename(url)
        return f'url(./{filename})'
    
    content = re.sub(r'url\(([^)]+)\)', replace_url, content)
    
    with open(css_file, 'w') as f:
        f.write(content)
    print("✓ Inter CSS fixed")
else:
    print("✗ Inter CSS not found")
EOF

# Fix Oswald CSS
echo "Fixing Oswald CSS..."
python3 << 'EOF'
import re
import os

css_file = 'public/fonts/Oswald/Oswald.css'
if os.path.exists(css_file):
    with open(css_file, 'r') as f:
        content = f.read()
    
    # Replace all Google Fonts URLs with local paths
    def replace_url(match):
        url = match.group(1).strip('\'"')
        filename = os.path.basename(url)
        return f'url(./{filename})'
    
    content = re.sub(r'url\(([^)]+)\)', replace_url, content)
    
    with open(css_file, 'w') as f:
        f.write(content)
    print("✓ Oswald CSS fixed")
else:
    print("✗ Oswald CSS not found")
EOF

# Fix all decorative font CSS files
echo "Fixing decorative font CSS files..."
for font_dir in public/fonts/*/; do
    if [ -d "$font_dir" ]; then
        font_name=$(basename "$font_dir")
        css_file="${font_dir}${font_name}.css"
        
        if [ -f "$css_file" ]; then
            python3 << EOF
import re
import os

css_file = '${css_file}'
with open(css_file, 'r') as f:
    content = f.read()

# Replace all Google Fonts URLs with local paths
def replace_url(match):
    url = match.group(1).strip('\'"')
    filename = os.path.basename(url)
    return f'url(./{filename})'

content = re.sub(r'url\(([^)]+)\)', replace_url, content)

with open(css_file, 'w') as f:
    f.write(content)
print(f"✓ ${font_name} CSS fixed")
EOF
        fi
    fi
done

echo "All font CSS files fixed!"
