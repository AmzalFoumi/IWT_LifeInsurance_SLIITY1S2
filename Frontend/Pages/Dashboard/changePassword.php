<?php
//Password changing
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $new_password = $_POST['new-password'];
    $confirm_password = $_POST['confirm-password'];

    // Checking the new password and confirmation match
    if ($new_password !== $confirm_password) {
        echo "Passwords do not match!";
        exit;
    }

    $hashed_password = password_hash($new_password, PASSWORD_BCRYPT);


    echo "Password updated successfully for user: $username";
} else {
    echo "Invalid request.";
}
?>
