//To load the headers and footers components' HTML pages to the right locations in the outer site
function loadHeaderFooter() {
    fetch('../Components/siteHeader.html')
        .then(header => header.text())
        .then(text => {
            document.getElementById('header-container').innerHTML = text;
            });

    fetch('../Components/siteFooter.html')
        .then(footer => footer.text())
        .then(text => {
            document.getElementById('footer-container').innerHTML = text;
            });
}

document.addEventListener("DOMContentLoaded", function () {
    loadHeaderFooter();
  });