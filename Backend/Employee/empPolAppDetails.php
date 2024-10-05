<?php
    session_start();
    require_once "../include/DB_connect.php";

    $connection = DB_conn();

    //Initially loading the page
    function load_page($polAppIdParam) {
        global $connection;
        //if (isset($_GET['inqId'])) {
        // $inqIdParam = $_GET['inqId'];       

        $sql = "SELECT * FROM policy_application WHERE ApplicationId = ?";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("i", $polAppIdParam);   //binding as integer

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {

            $polApp = $result->fetch_assoc();

            echo json_encode($polApp);
        } else {

            echo json_encode(["error" => "No inquiry found with that ID"]);
        }

        $stmt->close();
        /*} else {
            echo json_encode(["error" => "No inquiry ID provided"]);
        }*/

        
    }
    
    //End of loading the page


    //Assigning employee

    function assign_employee($polAppIdParam){
        global $connection;
        //$connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "UPDATE policy_application SET EmpId = ? WHERE ApplicationId = ?";

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("ii", $empId, $polAppIdParam);   //binding empId and inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Employee Assigned!', 'empIdResponse' => $empId]);
        } else {
            echo json_encode(['success' => false, 'message' => 'PHP failed to assign employee!']);
        }

        $stmt->close();

        //$connection->close();
    }
    //End of Assigning employee


    //start of approving application
    function approve_pol_app($polAppIdParam){
        //$connection = DB_conn();
        global $connection;

        //taking the data posted from the form in the main file
        if($_SERVER['REQUEST_METHOD'] === "POST"){
            $username = $_REQUEST['username'];
            $password = $_REQUEST['password'];
        }

        //hashing the password
        $hash = password_hash($password,PASSWORD_DEFAULT);

        // Take the policy application details from its table
        $sql_fetch = "SELECT * FROM policy_application WHERE ApplicationId = ?";

        $stmt_fetch = $connection->prepare($sql_fetch);

        $stmt_fetch->bind_param("i", $polAppIdParam);

        $stmt_fetch->execute();

        $result_fetch = $stmt_fetch->get_result();
        //End of taking the policy application details from the table


        //Next code runs only if one row has been return from the previous selct statement.
        //Application ID is the primary key I set in PHP My admin. so it will always be one row only, but still just to be safe
        if ($result_fetch->num_rows == 1) {
            $polApp = $result_fetch->fetch_assoc();

            //Put the data retrieved from policy application into variables
            $policyId = $polApp['PolicyId'];
            $nic = $polApp['NIC'];
            $name = $polApp['Name'];
            $dob = $polApp['DOB'];
            $income = $polApp['Income'];
            $street = $polApp['Street'];
            $postal_code = $polApp['Postal_Code'];
            $city = $polApp['City'];
            $province = $polApp['Province'];
            $country = $polApp['Country'];

            //Start of inserting data into policyholder table:
            $sql_insert = "INSERT INTO policyholder (PolicyID, NIC, Name, DOB, Income, Street, Postal_Code, City, Province, Country, Username, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt_insert = $connection->prepare($sql_insert);
            $stmt_insert->bind_param("isssisssssss", $policyId, $nic, $name, $dob, $income, $street, $postal_code, $city, $province, $country, $username, $hash);
            $result_insert = $stmt_insert->execute();
            //End of inserting data into policyholder table:
            
            //If code block is here to check if $stmt_insert->execute() ran smoothly and returned true
            if ($result_insert) {
            //Start of deleting the policy application record if successful insertion in PolicyHolder table occurs
            $sql_delete = "DELETE FROM policy_application WHERE ApplicationId = ?";
            $stmt_delete = $connection->prepare($sql_delete);
            $stmt_delete->bind_param("i", $polAppIdParam);
            $stmt_delete->execute();

            echo json_encode(['success' => true, 'message' => 'Policy Application Approved!']);
            } else {
            echo json_encode(['success' => false, 'message' => 'Failed to create policyholder record!']);
            }
            //End of policy application deletion
        } else {
            echo json_encode(['success' => false, 'message' => 'No policy application found with that ID!']);
        }

        $stmt_fetch->close();
        $stmt_insert->close();
        if (isset($stmt_delete)) {
            $stmt_delete->close();
        } //Closing if delete statement is in an if statement to check its existence firs


        //$connection->close();
    }
    //end of approving application

    //Start of rejecting application function
    function reject_pol_app($polAppIdParam){
        global $connection;
        //$connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "DELETE FROM policy_application WHERE ApplicationId = ?";
        //$sql = "INSERT INTO inquiry(EmpId) VALUES (?)";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("i", $polAppIdParam);   // inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Policy Application Rejected!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'PHP failed to reject application!']);
        }

        $stmt->close();

        //$connection->close();
    } 

    //End of rejecting application function

    //Code to run functions based on what you get from URL
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $specificFunction = $_REQUEST['function'];
        $polAppIdArg = $_REQUEST['polAppId'];
        if (function_exists($specificFunction)) {
          $result = $specificFunction($polAppIdArg); // Call the specified function
        } 
      }

    

      $connection->close();
?>