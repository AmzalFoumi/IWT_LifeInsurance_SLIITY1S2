const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

function loadClaimTable() {
    fetch(`${baseURL}/Backend/Employee/empClaimTable.php`)
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById("claimTable");
        data.forEach(claim => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${claim.ClaimId}</td>
                <td>${claim.PolicyholderId}</td>
                <td>${claim.BeneficiaryId}</td>
                <td>${claim.PolicyId}</td>
                <td>${claim.EmpId}</td>
                <td>${claim.NIC}</td>
                <td>${claim.Name}</td>
            `;

            

            // Add click event listener to the row
            row.addEventListener("click", function() {
                window.location.href = `${baseURL}/Frontend/Pages/Employee/empClaimDetails.html?claimId=${claim.ClaimId}`;
            });
            
            //tableBody.innerHTML += row; // wrongdisplays as [HTMLTableRowElement]
            
            tableBody.appendChild(row);  //This works and displays the actual content
            
        });
    })
    .catch(error => console.error("Error fetching data:", error));
}

document.addEventListener("DOMContentLoaded", function(){
    loadClaimTable();
})