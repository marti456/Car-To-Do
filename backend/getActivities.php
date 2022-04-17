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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = mysqli_real_escape_string($db, $_POST["username"]);
    $user_id_query = "SELECT id FROM users WHERE username = '$username' LIMIT 1";
    $user_id_result = mysqli_query($db, $user_id_query);
    $user_id = mysqli_fetch_array($user_id_result)['id'];
    $activities_check_query = "SELECT * FROM activities WHERE user_id = '$user_id'";
    $result = mysqli_query($db, $activities_check_query) or ($errors[] = mysqli_error($db));
    if (count($errors) == 0) {      
        $activities = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($activities);
    }
    else{
        echo "No activities";
    }
}
?>