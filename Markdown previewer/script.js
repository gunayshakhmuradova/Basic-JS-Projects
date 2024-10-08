  // Function to convert markdown to HTML
  function convertToHTML(markdown) {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdown);
    return html;
  }

  // Event listener for the editor
  document.getElementById("editor").addEventListener("input", function() {
    const markdown = this.value;
    const html = convertToHTML(markdown);
    document.getElementById("preview").innerHTML = html;
  });

  // Initial conversion from placeholder text
  const placeholder = document.getElementById("editor").getAttribute("placeholder");
  const placeholderHTML = convertToHTML(placeholder);
  document.getElementById("preview").innerHTML = placeholderHTML;