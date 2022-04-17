<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$db = mysqli_connect('localhost', 'root', '', 'DB');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $activity_id = mysqli_real_escape_string($db, $_POST["activity_id"]);
    //DELETE FROM table_name WHERE condition;
    $user_id_query = "DELETE FROM activities WHERE id = '$activity_id'";
    $user_id_result = mysqli_query($db, $user_id_query);
    echo "Activity deleted successfully";
}
?>