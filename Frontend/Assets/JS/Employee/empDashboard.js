const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.addEventListener("DOMContentLoaded", function(){
    
    fetch(`${baseURL}/Backend/Employee/empDashboard.php`)
    .then(response => response.json())
    .then(data => {
        displayArea = document.getElementById('contentContainer');
        displayArea.innerHTML = `
        <img src="${baseURL}/Frontend/Assets/Images/profilePicture.png">
        <h1>OneLife Administration System</h1><br>
        <h2>Welcome ${data.empName}</h2>
        <p>Employee ID: ${data.empId}</p>
        <h3>Role: ${data.empRole}</h3>
        `;

        usernameDisplay = document.getElementById('username');
        usernameDisplay.innerText = `${data.empName}`;
    })
    //.catch(error => console.error("Error fetching user details from session:", error));
})