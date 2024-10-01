const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2/Backend`;

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const userName = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    fetch(`${baseURL}/login.php`,{
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: `userName=${userName}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        const responseDisplay = document.getElementById('responseArea'); //Assigning the retrieved HTML element to a variable
        
        if(data){
            responseDisplay.innerText = data.message;    
        } else {
            responseDisplay.innerText = data.message;   
        }
    })
})