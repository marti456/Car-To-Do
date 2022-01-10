<?php 
$servername = "localhost";
$username = "root";
$password = "kolelo7141";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  echo "Connected  failed";
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
 ?>
