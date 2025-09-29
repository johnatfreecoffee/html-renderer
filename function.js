window.function = function (htmlCode) {
  // Get HTML code from Glide parameter
  const html = htmlCode.value || '';
  
  try {
    // Clean and validate HTML
    if (!html.trim()) {
      return undefined;
    }
    
    // Encode HTML for URL parameter
    const encodedHTML = encodeURIComponent(html);
    
    // Get current domain (will be your GitHub Pages URL)
    const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '');
    
    // Return URL to rendered HTML page
    return `${currentDomain}/render.html?html=${encodedHTML}`;
    
  } catch (error) {
    console.error('HTML Renderer Error:', error);
    return undefined;
  }
}
