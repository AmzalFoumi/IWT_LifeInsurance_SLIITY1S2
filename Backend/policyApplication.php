<?php
require_once "./include/DB_connect.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {


    $fullname = $_POST['fullname'];
    $nic = $_POST['nic'];
    $dob = $_POST['dob'];
    $income = $_POST['income'];
    $street = $_POST['street'];
    $postal_code = $_POST['postalCode'];
    $city = $_POST['city'];
    $province = $_POST['province'];
    $country = $_POST['country'];

    if (isset($_POST['policyId']) && $_POST['policyId'] !== 'null') {
        $policyId = (int)$_POST['policyId'];
    } else {
        $policyId = null;
    }

    $connection = DB_conn();

    $sql = $connection -> prepare("INSERT INTO policy_application(PolicyId,NIC,Name,DOB,Income,Street,Postal_Code,City,Province,Country) VALUES (?,?,?,?,?,?,?,?,?,?)");
    
    $sql -> bind_param("isssisisss",  $policyId, $nic, $fullname, $dob, $income, $street, $postal_code, $city, $province, $country);

    $result = $sql -> execute();
    
    if($result){
        echo json_encode(['success' => true, 'message' => 'Application Submitted']);   
    } else {
        echo json_encode(['success' => false, 'message' => 'Application Submission failed at the Database']);
    }

    $connection -> close();

} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>
