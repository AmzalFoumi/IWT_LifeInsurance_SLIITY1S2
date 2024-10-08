const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const userName = document.getElementById('user').value;
    const password = document.getElementById('password').value;


    if(!userName && !password){
        alert("Please Enter a username and password");
        return;
    }

    if(!userName){
        alert("Please Enter a username");
        return;
    }

    if(!password){
        alert("Please Enter a password");
        return;
    }

    if(!isValidUsername(userName)){
        alert("Please enter a valid username");
        return;
    }



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
                    window.open(`${baseURL}/Frontend/Pages/Employee/empDashboard.html`, "_self")
            },300);
            
        } else {
            responseDisplay.innerText = data.message;   
        }
    })
})


//validations
function isValidUsername(userName) {
    //Fist is a letter, then can do letters and numbers
    const regex = /^[A-Za-z][A-Za-z0-9]{4,}$/;
    return regex.test(userName);
}