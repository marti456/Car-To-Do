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

//Add new activity
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $activity_name = mysqli_real_escape_string($db, $_POST['activity_name']);
    $description = mysqli_real_escape_string($db, $_POST['description']);
    $type = mysqli_real_escape_string($db, $_POST['type']);
    $endTime = mysqli_real_escape_string($db, $_POST['type']);

    //find if user and activity type are existing
    $type_check_query = "SELECT * FROM types WHERE type_name='$type' LIMIT 1";
    $result = mysqli_query($db, $type_check_query)  or die("database error:". mysqli_error($db));
    $type_id = mysqli_fetch_assoc($result)["id"];

    $user_check_query = "SELECT * FROM users WHERE username='$username' LIMIT 1";
    $result = mysqli_query($db, $user_check_query)  or die("database error:". mysqli_error($db));
    $username_id = mysqli_fetch_assoc($result)["id"];

    if(!$type_id){
        echo "This type of activity doesn't exist";
        array_push($errors, "This type of activity doesn't exist");
    }
    if(!$username_id){
        echo "This user doesn't exist";
        array_push($errors, "This user doesn't exist");
    }
    else if (count($errors) == 0) {
        $query = "INSERT INTO activities (user_id, name, description, type_id, endTime ) 
        VALUES('$username_id', '$activity_name', '$description', '$type_id', FROM_UNIXTIME('$endTime'))";
        mysqli_query($db, $query);
    }

    // `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    // `user_id` int(11) FOREIGN KEY REFERENCES users(id),
    // `name` varchar(100) NOT NULL,
    // `description` varchar(100) NOT NULL,
    // `type_id` int(11) FOREIGN KEY REFERENCES types(id),
    // `startTime` DATETIME DEFAULT CURRENT_TIMESTAMP,
    // `endTime` DATETIME
    // )";



}








?>