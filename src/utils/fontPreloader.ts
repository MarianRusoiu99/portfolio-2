// Font preloader utility for creative fonts
let fontsLoaded = false;

export const preloadCreativeFonts = () => {
  // Prevent multiple calls
  if (fontsLoaded) return;
  fontsLoaded = true;

  const creativeFonts = [
    'Fredoka-One',
    'Righteous',
    'Bungee',
    'Bangers',
    'Orbitron',
    'Permanent-Marker',
    'Russo-One',
    'Anton',
    'Luckiest-Guy',
    'Creepster'
  ];

  // Create a single style element with all font imports
  const style = document.createElement('style');
  style.textContent = `
    /* Creative fonts for InteractiveText */
    @import url('/fonts/Fredoka-One/Fredoka-One.css');
    @import url('/fonts/Righteous/Righteous.css');
    @import url('/fonts/Bungee/Bungee.css');
    @import url('/fonts/Bangers/Bangers.css');
    @import url('/fonts/Orbitron/Orbitron.css');
    @import url('/fonts/Permanent-Marker/Permanent-Marker.css');
    @import url('/fonts/Russo-One/Russo-One.css');
    @import url('/fonts/Anton/Anton.css');
    @import url('/fonts/Luckiest-Guy/Luckiest-Guy.css');
    @import url('/fonts/Creepster/Creepster.css');
    
    /* Ensure fonts display properly */
    .creative-fonts * {
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  // Also trigger font loading by creating invisible text elements
  const testContainer = document.createElement('div');
  testContainer.style.position = 'absolute';
  testContainer.style.left = '-9999px';
  testContainer.style.top = '-9999px';
  testContainer.style.visibility = 'hidden';
  
  creativeFonts.forEach(fontName => {
    const span = document.createElement('span');
    span.style.fontFamily = fontName.replace('-', ' ');
    span.textContent = 'Loading';
    testContainer.appendChild(span);
  });
  
  document.body.appendChild(testContainer);
  
  // Remove test container after a short delay
  setTimeout(() => {
    if (testContainer.parentNode) {
      testContainer.parentNode.removeChild(testContainer);
    }
  }, 100);
};

export default preloadCreativeFonts;
