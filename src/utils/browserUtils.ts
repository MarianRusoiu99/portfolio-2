// Browser detection and compatibility utilities
export const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  const vendor = navigator.vendor;
  
  const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(vendor);
  const isFirefox = /Firefox/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  const isEdge = /Edg/.test(userAgent);
  
  // Brave detection - Brave identifies as Chrome but has specific properties
  const isBrave = !!(navigator as Navigator & { brave?: { isBrave: () => Promise<boolean> } }).brave && 
    typeof (navigator as Navigator & { brave?: { isBrave: () => Promise<boolean> } }).brave?.isBrave === 'function';
  
  return {
    isChrome: isChrome && !isBrave,
    isBrave,
    isFirefox,
    isSafari,
    isEdge,
    userAgent,
    vendor
  };
};

export const getBrowserCapabilities = () => {
  const browser = detectBrowser();
  
  // Brave has more restrictive capabilities
  if (browser.isBrave) {
    return {
      supportsBlendModes: false,
      supportsAdvancedFilters: false,
      supportsComplexAnimations: false,
      requiresSimplifiedEffects: true,
      canUseGSAP: false, // Brave can block GSAP
      maxAnimationComplexity: 'low'
    };
  }
  
  // Other browsers generally support more features
  return {
    supportsBlendModes: true,
    supportsAdvancedFilters: true,
    supportsComplexAnimations: true,
    requiresSimplifiedEffects: false,
    canUseGSAP: true,
    maxAnimationComplexity: 'high'
  };
};

export const logBrowserInfo = () => {
  const browser = detectBrowser();
  const capabilities = getBrowserCapabilities();
  
  console.log('Browser Detection:', browser);
  console.log('Browser Capabilities:', capabilities);
  
  if (browser.isBrave) {
    console.warn('Brave browser detected - using simplified animations for compatibility');
  }
};
