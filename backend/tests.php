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


        // if($exists !== FALSE)
        // {
        // echo("This table exists");
        // }else{
        // echo("This table doesn't exist");
        // }

    }
}