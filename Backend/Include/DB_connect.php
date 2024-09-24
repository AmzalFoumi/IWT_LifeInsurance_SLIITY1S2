<?php
//Creating a Database connection as a function that can be re-used later at will

function DB_conn (){

    //Intitializing as variables for ease of reading later
    $host_name = 'localhost';
    $user_name = 'root';
    $password = '';
    $DB_name = 'iwttest1';


    //Using the variables to create the connection object
    $connection = new mysqli($host_name,$user_name,$password,$DB_name);


    //Checking connection
    if ($connection -> connect_error){
        die("DB Connection failed. Check your connection object and Database");
    }


    //Returning connection
    return $connection;
}


?>