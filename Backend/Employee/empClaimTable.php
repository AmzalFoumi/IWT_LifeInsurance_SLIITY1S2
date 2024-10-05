<?php
    session_start();

    require_once "../include/DB_connect.php";

    $connection = DB_conn();

    $sql = "SELECT * FROM claim";

    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        $claim = [];    //Initializing an empty array under variable name $claim
        while($row = $result->fetch_assoc()) {        //fetch_assoc retrives the rows as associative array
            $claim[] = $row;             //appends item row to the array
        }
        echo json_encode($claim);
    } else {
        echo json_encode([]);
    }
    
    $connection->close();

?>