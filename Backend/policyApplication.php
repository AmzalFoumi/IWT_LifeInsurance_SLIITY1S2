<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $errors = [];

    $fullname = trim($_POST['fullname']);
    $nic = trim($_POST['nic']);
    $dob = $_POST['dob'];
    $income = $_POST['income'];
    $street = trim($_POST['street']);
    $postal_code = trim($_POST['postal_code']);
    $city = trim($_POST['city']);
    $province = trim($_POST['province']);
    $country = trim($_POST['country']);


    if (empty($fullname)) {
        $errors[] = "Full Name is required.";
    } elseif (!preg_match("/^[a-zA-Z ]*$/", $fullname)) {
        $errors[] = "Full Name can only contain letters and spaces.";
    }

    if (empty($nic)) {
        $errors[] = "NIC is required.";
    } elseif (!preg_match("/^[0-9A-Z]{10,12}$/", $nic)) {
        $errors[] = "NIC must be 10 to 12 alphanumeric characters.";
    }


    if (empty($dob)) {
        $errors[] = "Date of Birth is required.";
    } else {
        $dob_date = new DateTime($dob);
        $today = new DateTime();
        if ($dob_date > $today) {
            $errors[] = "Date of Birth cannot be in the future.";
        }
    }
    if (empty($income)) {
        $errors[] = "Income is required.";
    } elseif (!is_numeric($income) || $income <= 0) {
        $errors[] = "Income must be a positive numeric value.";
    }
    if (empty($street)) {
        $errors[] = "Street address is required.";
    }
    if (empty($postal_code)) {
        $errors[] = "Postal Code is required.";
    } elseif (!is_numeric($postal_code)) {
        $errors[] = "Postal Code must be a numeric value.";
    }
    if (empty($city)) {
        $errors[] = "City is required.";
    }
    if (empty($province)) {
        $errors[] = "Province is required.";
    }
    if (empty($country)) {
        $errors[] = "Country is required.";
    }

    if (!empty($errors)) {
        echo "<h3>Form Errors:</h3>";
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
        echo "<a href='javascript:history.back()'>Go back to fix the form</a>";
        exit(); 
    }
    echo "<h2>Form submitted successfully!</h2>";
    echo "<p>Thank you, $fullname. Your policy application has been submitted.</p>";
    
} else {
    echo "Invalid form submission.";
}
?>
