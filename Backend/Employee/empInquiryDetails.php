<?php
    session_start();
    require_once "../include/DB_connect.php";

    $connection = DB_conn();

    //Initially loading the page
    if (isset($_GET['inqId'])) {
        $inqId = $_GET['inqId'];       

        $sql = "SELECT * FROM inquiry WHERE InqId = ?";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("i", $inqId);   //binding as integer

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $inquiry = $result->fetch_assoc();
            echo json_encode($inquiry);
        } else {
            echo json_encode(["error" => "No inquiry found with that ID"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["error" => "No inquiry ID provided"]);
    }

    $connection->close();
    
    //End of loading the page

    //Assigning employee

    function assign_employee($inqIdParam){
        $connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "UPDATE inquiry SET EmpId = ? WHERE InqId = ?";
        //$sql = "INSERT INTO inquiry(EmpId) VALUES (?)";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("ii", $empId, $inqIdParam);   //binding empId and inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Employee Assigned!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'PHP failed to assign employee!']);
        }

        $stmt->close();

        $connection->close();
    }

    //End of Assigning employee

    //Start of resovlinf issue function

   /* function resolve_inq($inqIdParam){
        $connection = DB_conn();

        $empId = $_SESSION['user_id'];       

        $sql = "UPDATE inquiry SET EmpId = ? WHERE InqId = ?";
        //$sql = "INSERT INTO inquiry(EmpId) VALUES (?)";  

        $stmt = $connection->prepare($sql);

        $stmt->bind_param("ii", $empId, $inqIdParam);   //binding empId and inqId as integers

        $result = $stmt->execute();

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'Employee Assigned!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'PHP failed to assign employee!']);
        }

        $stmt->close();

        $connection->close();
    } */

    //End of resolving issue function

    //Code to run function based on what you get from URL
    if (isset($_GET['function'])) {
        $specificFunction = $_GET['function'];
        $inqIdArg = $_GET['inqId'];
        if (function_exists($specificFunction)) {
          $result = $specificFunction($inqIdArg); // Call the specified function
          //echo "Function". $specificFunction ."has run";
        } else {
          // Handle the case where the function doesn't exist
          //echo "Function not found";
        }
      }

    

    
?>