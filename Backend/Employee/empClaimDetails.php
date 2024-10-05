<?php
    session_start();
    require_once "../include/DB_connect.php";

    //$connection = DB_conn();

    //Initially loading the page with the details of the claim application
    function load_page($claimIdParam) {
        $connection = DB_conn();      

        $sql = "SELECT * FROM claim WHERE ClaimId = ?";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("i", $claimIdParam);   //binding as integer

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {

            $claim = $result->fetch_assoc();

            echo json_encode($claim);
        } else {

            echo json_encode(["error" => "No claim found"]);
        }

        $stmt->close();

        $connection->close();
    }
 


    //Assigning employee
    function assign_employee($claimIdParam){
        $connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "UPDATE claim SET EmpId = ? WHERE ClaimId = ?";
        //$sql = "INSERT INTO inquiry(EmpId) VALUES (?)";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("ii", $empId, $claimIdParam);   //binding empId and inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Employee Assigned!', 'empIdResponse' => $empId]);
        } else {
            echo json_encode(['success' => false, 'message' => 'PHP failed to assign employee!']);
        }

        $stmt->close();

        $connection->close();
    }
    //End of Assigning employee


    function deny_claim($claimIdParam){
        $connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "DELETE FROM claim WHERE ClaimId = ?";
        //$sql = "INSERT INTO inquiry(EmpId) VALUES (?)";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("i", $claimIdParam);   // inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Claim Rejected and Deleted from the database!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Server failed to delete claim!']);
        }

        $stmt->close();

        $connection->close();
    } 


    function approve_claim($claimIdParam){
        $connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "DELETE FROM claim WHERE ClaimId = ?";

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("i", $claimIdParam);   // inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Claim is approved and funds can be released!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Server failed to delete claim!']);
        }

        $stmt->close();

        $connection->close();
    } 
    

    //Code to run functions based on what you get from URL
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $specificFunction = $_REQUEST['function'];
        $claimIdArg = $_REQUEST['claimId'];
        if (function_exists($specificFunction)) {
          $result = $specificFunction($claimIdArg); // Call the specified function
          //echo "Function". $specificFunction ."has run";
        } else {
          // Handle the case where the function doesn't exist
          //echo "Function not found";
        }
      }

    

    
?>