<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

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

$sqlQuery = "CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
)";
$resultSet = mysqli_query($db, $sqlQuery) or die("database error:". mysqli_error($db));

$sqlQuery = "CREATE TABLE IF NOT EXISTS `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `type_name` varchar(100) NOT NULL UNIQUE
)";
$resultSet = mysqli_query($db, $sqlQuery) or die("database error:". mysqli_error($db));

$sqlQuery = "CREATE TABLE IF NOT EXISTS `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `type_id` int(11) NOT NULL,
  `startTime` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `endTime` DATETIME,
  FOREIGN KEY(`user_id`) REFERENCES users(id),
  FOREIGN KEY(`type_id`) REFERENCES types(id)
)";
$resultSet = mysqli_query($db, $sqlQuery) or die("database error:". mysqli_error($db));
?>

