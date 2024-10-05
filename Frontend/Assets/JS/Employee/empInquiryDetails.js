const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.addEventListener("DOMContentLoaded", function (){
    const urlParams = new URLSearchParams(window.location.search);        
        const inqId = urlParams.get('inqId');  // Retrieve inquiry ID from the URL

        if (inqId) {
            fetch(`${baseURL}/Backend/Employee/empInquiryDetails.php?inqId=${inqId}`)
            .then(response => response.json())
            .then(data => {
                // Populate the details on the page
                const detailsDiv = document.getElementById("loadContainer");
                detailsDiv.innerHTML = `
                    <p><strong>Inquiry ID:</strong> ${data.InqId}</p>
                    <p><strong>Name:</strong> ${data.Name}</p>
                    <p><strong>Email:</strong> ${data.Email}</p>
                    <p><strong>Mobile Number:</strong> ${data.MobNum}</p>
                    <p><strong>Message:</strong> ${data.Message}</p>
                    <p><strong>Inquiry Type:</strong> ${data.InqType}</p>
                    <p><strong>Employee ID:</strong> ${data.EmpId}</p>
                    <p><strong>Policy ID:</strong> ${data.PolicyId}</p>
                `;
            })
            .catch(error => console.error("Error fetching inquiry details:", error));
        }
})

document.getElementById('assignEmp').addEventListener("click", function(){

})
