<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // Validate form data (you can add more validation if needed)
    if (empty($username) || empty($password) || empty($email)) {
        die("All fields are required");
    }

    // Hashing the password for security
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$passwordHash', '$email')";

    if ($conn->query($sql) === TRUE) {
        // Account successfully created, display success message
        echo "<script>alert('Account created successfully. You may now login.');</script>";
        header("Location: loginpage.html");
        exit();
    } else {
        // Error occurred while inserting data, display error message
        echo "<script>alert('Error creating account: " . $conn->error . "');</script>";
    }
}

// Close connection
$conn->close();
?>

?>
