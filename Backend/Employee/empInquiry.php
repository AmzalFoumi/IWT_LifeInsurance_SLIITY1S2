<?php
    session_start();

    require_once "../include/DB_connect.php";

    $connection = DB_conn();

    $sql = "SELECT * FROM inquiry";

    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        $inquiries = [];
        while($row = $result->fetch_assoc()) {        //fetch_assoc retrives the rows from the mysql table as an associative array - Amzal
            $inquiries[] = $row;     //appends item $row to the array
        }
        echo json_encode($inquiries);
    } else {
        echo json_encode([]);
    }
    
    $connection->close();

?>