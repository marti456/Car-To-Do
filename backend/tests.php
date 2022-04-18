<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
final class tests extends TestCase
{
    public function testCreateTables(): void
    {
        include 'index.php';
        $db = mysqli_connect('localhost', 'root', '', 'DB');

        $exists_users = mysqli_query($db, "select * from users");
        $this->assertSame('', mysqli_error($db));
        $exists_types = mysqli_query($db, "select * from types");
        $this->assertSame('', mysqli_error($db));
        $exists_activities = mysqli_query($db, "select * from activities");
        $this->assertSame('', mysqli_error($db));
    }

    public function testRegister(): void
    {
        $db = mysqli_connect('localhost', 'root', '', 'DB');
        $url = 'http://localhost:8080/Car-To-Do/register.php';
        $json = json_encode(['username' => 'Test', 'password' => '12345678']);

        $options = ['http' => [
            'method' => 'POST',
            'header' => 'Content-type:application/json',
            'content' => $json
        ]];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        $this->assertSame("Added new user", $response);
        
        $options = ['http' => [
            'method' => 'POST',
            'header' => 'Content-type:application/json',
            'content' => $json
        ]];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        $this->assertSame("Username already exists", $response);
        
        $last_id = mysqli_insert_id($db);
        echo $last_id;
        $url = 'http://localhost:8080/Car-To-Do/deleteActivity.php';
        $json = json_encode(['activity_id' => $last_id]);
        $options = ['http' => [
            'method' => 'POST',
            'header' => 'Content-type:application/json',
            'content' => $json
        ]];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        $this->assertSame("Activity deleted successfully", $response);

    }


    public function testCreatingActivity(): void
    {
        $db = mysqli_connect('localhost', 'root', '', 'DB');
        $url = 'http://localhost:8080/Car-To-Do/createActivity.php';
        $json = json_encode(['username' => 'Test', 'activity_name' => 'test activity', 'activity_name' => 'test activity', 'description' => 'test description', 'type' => 'Others', 'end_time' => "61234567"]);

        $options = ['http' => [
            'method' => 'POST',
            'header' => 'Content-type:application/json',
            'content' => $json
        ]];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        $this->assertSame("Activity added successfully", $response);
    }
}