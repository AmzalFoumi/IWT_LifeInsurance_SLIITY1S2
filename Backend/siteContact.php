<?php
    include_once "./include/functions.php";
    require_once "./include/DB_connect.php";
?>

<?php

    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $name = $_REQUEST['fullName'];    //the strings within the square brackets are the keys of the key-value pairs in the url encoded string sent by the JavaScript file
        $title = $_REQUEST['title'];
        $mobNum = $_REQUEST['mobNum'];
        $email = $_REQUEST['email'];
        $inqType = $_REQUEST['inqType'];
        $msg = $_REQUEST['message'];

        $connection = DB_conn();   //Establishing the connection

        $sql = $connection -> prepare ("INSERT INTO inquiry(Name,Title,InqType,MobNum,Email,Message) VALUES (?,?,?,?,?,?)");   //remember to change IndId to InqID when going to permanent DB 
        //Using prepared statements to seperate the query structure from the actual data. This helps in readability, security and flexibility
        //Its also considered an industry standard.


        $sql -> bind_param("ssssss",$name, $title, $inqType, $mobNum, $email, $msg);  //Binding parameters to prepared statement

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




