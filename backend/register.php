<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


// initializing variables
$username = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'DB');

// REGISTER USER
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // receive all input values from the form
  $username = mysqli_real_escape_string($db, $_POST["username"]);
  $password_1 = mysqli_real_escape_string($db, $_POST['password']);

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($username)) { array_push($errors, "Username is required"); }
  //if (empty($email)) { array_push($errors, "Email is required"); }
  if (empty($password_1)) { array_push($errors, "Password is required"); }
  //if ($password_1 != $password_2) {
  //array_push($errors, "The two passwords do not match");
  //}

 if (count($errors) > 0){
    foreach ($errors as $error) {
      echo $error . "\n";
    }
  }

  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM users WHERE username='$username' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  
 


  if ($user) { // if user exists
    if ($user['username'] === $username) {
      array_push($errors, "Username already exists");
    }
    echo "Username already exists";
  }

  // Finally, register user if there are no errors in the form
  else if (count($errors) == 0) {
    $password = md5($password_1);//encrypt the password before saving in the database

    $query = "INSERT INTO users (username, password) 
          VALUES('$username', '$password')";
    mysqli_query($db, $query);
    $_SESSION['username'] = $username;
    $_SESSION['success'] = "You are now logged in";
    //header('location: index.php');

    echo "Added new user";
  }

  else {
    echo "Error";
  }
}
  
?>