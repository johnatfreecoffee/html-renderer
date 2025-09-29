window.function = function (htmlCode) {
    // Get HTML code from Glide parameter
    const html = htmlCode.value || '<p>No HTML provided</p>';
    
    try {
        // Create the complete HTML page with styling
        const renderedPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Rendered HTML</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        .rendered-content {
            width: 100%;
            min-height: 100vh;
        }
    </style>
</head>
<body>
    <div class="rendered-content">
        ${html}
    </div>
</body>
</html>`;
        
        // Encode and return as data URL
        const encodedHtml = encodeURIComponent(renderedPage);
        return "data:text/html;charset=utf-8," + encodedHtml;
        
    } catch (error) {
        console.error('HTML Renderer Error:', error);
        return undefined;
    }
}
