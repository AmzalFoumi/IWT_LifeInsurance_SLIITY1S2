<?php
    session_start();
    require_once "../include/DB_connect.php";

    $connection = DB_conn();

    $name = $_SESSION['emp_name'];
    $empId = $_SESSION['emp_id'];
    $empRole = $_SESSION['emp_role'];
     
    echo json_encode(["name" => $name, "empId" => $empId, "empRole" => $empRole]);

    $connection->close();
    













?>