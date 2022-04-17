<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


// initializing variables
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'DB');

//Add new types
$query = "INSERT INTO types (type_name) VALUES('Poured fuel')" or ($errors[] = mysqli_error($db));
mysqli_query($db, $query);
$query = "INSERT INTO types (type_name) VALUES('Replaced consumables')" or ($errors[] = mysqli_error($db));
mysqli_query($db, $query);
$query = "INSERT INTO types (type_name) VALUES('Made repairs')" or ($errors[] = mysqli_error($db));
mysqli_query($db, $query);
$query = "INSERT INTO types (type_name) VALUES('Others')" or ($errors[] = mysqli_error($db));
mysqli_query($db, $query);

if (count($errors) == 0){
    echo "Types added successfully";
}
else{
    echo "Error: ".mysqli_error($db);
}
?>