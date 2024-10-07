document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const nic = document.querySelector('#nic').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('nic', nic);

    fetch('processClaim.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.success) {
            alert("Claim submitted, success!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
