<?php
    include 'db.php';

    if (isset($_POST['save'])) {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $email = $_POST['email'];
    
        if ($id) {
            $sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";
        } else {
            $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
        }
    
        if ($conn->query($sql) === TRUE) {
            header('Location: index.php');
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    
    if (isset($_GET['delete'])) {
        $id = $_GET['delete'];
        $sql = "DELETE FROM users WHERE id=$id";
    
        if ($conn->query($sql) === TRUE) {
            header('Location: index.php');
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    
    $conn->close();
?>



/*include 'db.php';

$id = '';
$name = '';
$email = '';

/*if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM users WHERE id=$id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $name = $row['name'];
    $email = $row['email'];
}
?>


<?php $conn->close(); ?> */

?>
