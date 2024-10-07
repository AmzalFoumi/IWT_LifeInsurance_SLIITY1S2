
    document.addEventListener("DOMContentLoaded", function() 
    {
        const form = document.querySelector("form");
        const employeeId = document.getElementById("employee-id");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const roleCheckboxes = document.querySelectorAll("input[type='checkbox']");
        const submitButton = form.querySelector("button");

        // Helping function to check if one role is selected
        function isRoleSelected() {
            return Array.from(roleCheckboxes).some(checkbox => checkbox.checked);
        }

        // Form submission handler
        form.addEventListener("submit", function(event) {
            let errorMessage = "";
            
            // Basic field validation
            if (employeeId.value.trim() === "") {
                errorMessage += "Employee ID is required.\n";
            }
            if (username.value.trim() === "") {
                errorMessage += "Username is required.\n";
            }
            if (password.value.trim() === "") {
                errorMessage += "Password is required.\n";
            }
            if (!isRoleSelected()) {
                errorMessage += "Please select at least one role.\n";
            }

            // alert messege ehka
            if (errorMessage) {
                alert(errorMessage);
                event.preventDefault();
            }
        });

        /*Optional: Add real-time feedback to disable the submit button until form is valid
        function checkFormValidity() {
            if (employeeId.value.trim() !== "" && 
                username.value.trim() !== "" && 
                password.value.trim() !== "" && 
                isRoleSelected()) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        }

        //for real-time validation feedback
        employeeId.addEventListener("input", checkFormValidity);
        username.addEventListener("input", checkFormValidity);
        password.addEventListener("input", checkFormValidity);
        roleCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", checkFormValidity);
        });*/

        // This is to Disable submit button until form is filled
        checkFormValidity();
    });
