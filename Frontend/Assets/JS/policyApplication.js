const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2/Backend`;


document.getElementById('policyApplication').addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const nic = document.getElementById('nic').value;
    const dob = document.getElementById('dob').value;
    const income = document.getElementById('income').value;
    const street = document.getElementById('street').value;
    const postalCode = document.getElementById('postalCode').value;
    const city= document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const country = document.getElementById('country').value;
    const policyId = parseInt(document.getElementById('policyType').value);

    fetch(`${baseURL}/policyApplication.php`,{     
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: `policyId=${policyId}&fullName=${fullName}&nic=${nic}&dob=${dob}&income=${income}&street=${street}&postalCode=${postalCode}&city=${city}&province=${province}&country=${country}`  
    })
    .then(response => response.json())       //Reads the body of the response object and parses it as JSON. Returns a promise. 
    .then(data => {
        const responseDisplay = document.getElementById('responseArea'); //Assigning the retrieved HTML element to a variable
        
        if(data){
            responseDisplay.innerText = data.message;    //Display the response sent by the backend
        } else {
            responseDisplay.innerText = "Application Submission failed. No response from PHP";   //Error displayed if nothing is received from the server
        }
        
    })

})









/*document.querySelector('form').addEventListener('submit', function(event) {
    // NIC validation
    const nic = document.getElementById('nic').value;
    if (nic.length !== 10 && nic.length !== 12) {
        alert('NIC should be 10 or 12 characters long.');
        return;  
    }   
})*/