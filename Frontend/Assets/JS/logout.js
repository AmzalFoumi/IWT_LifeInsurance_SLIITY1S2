const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;


document.getElementById('logOut').addEventListener("click", () => {
    fetch(`${baseURL}/Backend/logout.php`)
    .then(response => response.json())
    .then(data => {
        if(data){
            window.location.replace(`${baseURL}/Frontend/Pages/site.html`);
        }
    })
})