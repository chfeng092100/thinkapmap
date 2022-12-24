<?php
$name = $_POST['name'];
$pn = $_POST['pn'];

if (!empty($name) || !empty($pn)){
    $host = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'register';

    // create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
    if ($conn->connect_error) {
        die('Connection Failed  : ' . $conn->connect_error);
    }
    else {
        $stmt = $conn->prepare('insert into thinkapmap(name, pn) values(?, ?)');
        $stmt->bind_param('si', $name, $pn);
        $stmt->execute();
        echo 'success';
        $stmt->close();
        $conn->close();
    } 
}
else {
    echo "All fields are required";
    die();
}

?>