const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

function loadPolTable() {
    fetch(`${baseURL}/Backend/Employee/empPolicyTable.php`)
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById("policyTable");
        data.forEach(polApp => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${polApp.ApplicationId}</td>
                <td>${polApp.PolicyId}</td>
                <td>${polApp.EmpId}</td>
                <td>${polApp.NIC}</td>
                <td>${polApp.Name}</td>
                <td>${polApp.DOB}</td>
                <td>${polApp.Income}</td>
                <td>${polApp.Street}</td>
                <td>${polApp.Postal_Code}</td>
                <td>${polApp.City}</td>
                <td>${polApp.Province}</td>
                <td>${polApp.Country}</td>
            `;

            

            // Add click event listener to the row
            row.addEventListener("click", function() {
                window.location.href = `${baseURL}/Frontend/Pages/Employee/empPolAppDetails.html?polAppId=${polApp.ApplicationId}`;
            });
            
            //tableBody.innerHTML += row; // wrongdisplays as [HTMLTableRowElement]
            
            tableBody.appendChild(row);  //This works and displays the actual content
            
        });
    })
    .catch(error => console.error("Error fetching data:", error));
}

document.addEventListener("DOMContentLoaded", function(){
    loadPolTable();
})