<?php
    session_start();
    require_once "../include/DB_connect.php";

    $connection = DB_conn();

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
?>