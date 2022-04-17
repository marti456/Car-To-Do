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

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $activities_check_query = "SELECT * FROM activities";
    $result = mysqli_query($db, $activities_check_query) or die("database error:". mysqli_error($db));
    if (count($errors) == 0) {      
    $activities = mysqli_fetch_all ($result, MYSQLI_ASSOC);
    echo json_encode($activities);
    }
    else{
        echo "No activities";
    }
}
?>