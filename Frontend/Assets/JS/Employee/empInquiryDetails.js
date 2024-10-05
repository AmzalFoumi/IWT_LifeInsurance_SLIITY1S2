const baseURL = `http://localhost/IWTProject/IWT_LifeInsurance_SLIITY1S2`;

document.addEventListener("DOMContentLoaded", function (){
    const urlParams = new URLSearchParams(window.location.search);        
    const inqId = urlParams.get('inqId');  // Retrieve inquiry ID from the URL

    if (inqId) {
        fetch(`${baseURL}/Backend/Employee/empInquiryDetails.php?inqId=${inqId}&function=load_page`)
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
                <p id="empId"><strong>Employee ID:</strong> ${data.EmpId}</p>    
                <p><strong>Policy ID:</strong> ${data.PolicyId}</p>
            `;   //empId is added as an ID to the paragraph tag where the empId is suspposed to be displayed, This is for use in the next function
        })
        .catch(error => console.error("Error fetching inquiry details:", error));
    }
})

document.getElementById('assignEmp').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const inqId = urlParams.get('inqId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empInquiryDetails.php?function=assign_employee&inqId=${inqId}`)
    .then(response => response.json())
    .then(data =>{
        const responseDisplay = document.getElementById('responseArea');
        const empIdDisplay = document.getElementById('empId');
        if(data){
            responseDisplay.innerText = data.message;
            empIdDisplay.innerHTML = `<strong>Employee ID:</strong> ${data.empIdResponse}`;
        }
    })
    .catch(error => console.error("Error assigning employee details:", error));
})

document.getElementById('deleteInq').addEventListener("click", function(){
    const urlParams = new URLSearchParams(window.location.search);        
    const inqId = urlParams.get('inqId');  // Retrieve inquiry ID from the URL

    fetch(`${baseURL}/Backend/Employee/empInquiryDetails.php?function=resolve_inq&inqId=${inqId}`)
    .then(response => response.json())
    .then(data => {
        const responseDisplay = document.getElementById('responseArea');
        if (data){
            responseDisplay.innerText = data.message;

            setTimeout(function () {
                window.open(`${baseURL}/Frontend/Pages/Employee/empInquiry.html`, "_self")
            },600);
        }
    })
    .catch(error => console.error("Error resolving inquiry:", error));
})