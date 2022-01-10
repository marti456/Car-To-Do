<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$db = mysqli_connect($servername, $username, $password);

// Check connection
if ($db->connect_error) {
  echo "Connected  failed";
  die("Connection failed: " . $db->connect_error);
}
echo "Connected successfully";

$sqlQuery = "CREATE DATABASE IF NOT EXISTS DB";
$resultSet = mysqli_query($db, $sqlQuery) or die("database error:". mysqli_error($db));

$sqlQuery = "USE DB";
$resultSet = mysqli_query($db, $sqlQuery) or die("database error:". mysqli_error($db));

$sqlQuery = "CREATE TABLE IF NOT EXISTS`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
)";
$resultSet = mysqli_query($db, $sqlQuery) or die("database error:". mysqli_error($db));

?>

