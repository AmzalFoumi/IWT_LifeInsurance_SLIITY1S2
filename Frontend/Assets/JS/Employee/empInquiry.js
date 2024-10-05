const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

function loadInqTable() {
    fetch(`${baseURL}/Backend/Employee/empInquiry.php`)
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById("inqTable");
        data.forEach(inquiries => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${inquiries.InqId}</td>
                <td>${inquiries.Name}</td>
                <td>${inquiries.Title}</td>
                <td>${inquiries.Email}</td>
                <td>${inquiries.MobNum}</td>
                <td>${inquiries.Message}</td>
                <td>${inquiries.InqType}</td>
                <td>${inquiries.EmpId}</td>
                <td>${inquiries.PolicyId}</td>
            `;

            

            // Add click event listener to the row
            row.addEventListener("click", function() {
                window.location.href = `${baseURL}/Frontend/Pages/Employee/empInquiryDetails.html?inqId=${inquiries.InqId}`;
            });
            
            //tableBody.innerHTML += row; // wrongdisplays as [HTMLTableRowElement]
            
            tableBody.appendChild(row);  //This works and displays the actual content
            
            /*let row = `<tr>
                <td>${inquiries.InqId}</td>
                <td>${inquiries.Name}</td>
                <td>${inquiries.Title}</td>
                <td>${inquiries.Email}</td>
                <td>${inquiries.MobNum}</td>
                <td>${inquiries.Message}</td>
                <td>${inquiries.InqType}</td>
                <td>${inquiries.EmpId}</td>
                <td>${inquiries.PolicyId}</td>
            </tr>`;
            tableBody.innerHTML += row;*/
        });
    })
    .catch(error => console.error("Error fetching data:", error));
}







document.addEventListener("DOMContentLoaded", function(){
    loadInqTable();
})