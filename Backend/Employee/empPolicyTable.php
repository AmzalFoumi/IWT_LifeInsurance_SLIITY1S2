<?php
    session_start();

    require_once "../include/DB_connect.php";

    $connection = DB_conn();

    $sql = "SELECT * FROM policy_application";

    $result = $connection->query($sql);
    
    if ($result->num_rows > 0) {
        $polApp = [];
        while($row = $result->fetch_assoc()) {        //fetch_assoc retrives the rows as associative array
            $polApp[] = $row;             //appends item row to the array
        }
        echo json_encode($polApp);
    } else {
        echo json_encode([]);
    }
    
    $connection->close();

?>