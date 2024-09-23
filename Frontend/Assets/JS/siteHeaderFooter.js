fetch('../Components/header.html')
    .then(header => header.text())
    .then(text => {
        document.getElementById('header-container').innerHTML = text;
        });

fetch('../Components/footer.html')
    .then(footer => footer.text())
    .then(text => {
        document.getElementById('footer-container').innerHTML = text;
        });