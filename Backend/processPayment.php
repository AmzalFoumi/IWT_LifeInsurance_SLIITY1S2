<?php
    require_once "./include/DB_connect.php";
?>

<?php

    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $policyHolder = $_REQUEST['policyHolder'];
        $payId = $_REQUEST['payId']; 
        $reference = $_REQUEST['reference'];    
        $date = $_REQUEST['date'];
        $amount = $_REQUEST['amount'];
        // $email = $_REQUEST['email'];
        // $inqType = $_REQUEST['inqType'];
        // $msg = $_REQUEST['message'];

        $connection = DB_conn();   //Establishing the connection

        $sql = $connection -> prepare ("INSERT INTO payment(PolicyholderId, PayId, Reference, Date, Amount) VALUES (?,?,?,?,?)");   //remember to change IndId to InqID when going to permanent DB 
        //Using prepared statements to seperate the query structure from the actual data. This helps in readability, security and flexibility
        //Its also considered an industry standard.


        $sql -> bind_param("iisii",$policyHolderId, $payId, $reference, $date, $amount);  //Binding parameters to prepared statement

        $result = $sql -> execute();

        //Encoding the appropriate message to be attached to the success and reply keys to be sent to the frontend JS file
        //Its sent as an associative array in JSON format with keys success and reply
        if($result){
            echo json_encode(['success' => true, 'message' => 'Message succesfully sent!']);   
        } else {
            echo json_encode(['success' => false, 'message' => 'Message sending failed!']);
        }

        $connection -> close();

    } else {
        // If the request is not POST, return an error message
        echo json_encode(["error" => "Invalid request method"]);
    }
        
?>




