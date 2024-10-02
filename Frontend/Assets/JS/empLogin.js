const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const userName = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    fetch(`${baseURL}/Backend/empLogin.php`,{
        method: "POST",
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: `userName=${userName}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        const responseDisplay = document.getElementById('responseArea'); //Assigning the retrieved HTML element to a variable
        
        if(data && data.success){
            
            responseDisplay.innerText = data.message; 
            
            setTimeout(function () {
                    window.open(`${baseURL}/Frontend/Pages/Dashboard/policyHolderDashboard.html`, "_self")
            },300);
            
        } else {
            responseDisplay.innerText = data.message;   
        }
    })
})