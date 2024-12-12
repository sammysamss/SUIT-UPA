<?php
// Include the database connection file
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Fetch user data from the database
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found, verify password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "<script>alert('Login successful. Redirecting to home page...');";
            echo "window.location.href = 'index.html';</script>";
        } else {
            // Incorrect password, display error message and redirect to login page
            echo "<script>alert('Incorrect password. Please try again.');";
            echo "window.location.href = 'loginpage.html';</script>";
        }
    } else {
        // User not found, display error message and redirect to login page
        echo "<script>alert('Account does not exist. Please sign up.');";
        echo "window.location.href = 'loginpage.html';</script>";
    }
}
$conn->close();
?>
