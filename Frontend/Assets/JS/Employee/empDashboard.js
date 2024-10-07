const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.addEventListener("DOMContentLoaded", function(){
    
    fetch(`${baseURL}/Backend/Employee/empDashboard.php`)
    .then(response => response.json())
    .then(data => {
        
    })
})