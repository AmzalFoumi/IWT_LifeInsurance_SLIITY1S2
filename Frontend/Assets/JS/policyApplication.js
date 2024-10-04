document.querySelector('form').addEventListener('submit', function(event) {
    // NIC validation
    const nic = document.getElementById('nic').value;
    if (nic.length !== 10 && nic.length !== 12) {
        alert('NIC should be 10 or 12 characters long.');
        event.preventDefault();
        return;  // Exit the function if NIC is invalid
    }   
})