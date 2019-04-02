<?php
    session_start();

    if (isset($_POST['adm']))
    {
        if ($_POST['adm'] == "true")
        {
            $_SESSION['isAdmin'] = true;
        }
        else if ($_POST['adm'] == "false")
        {
            unset($_SESSION['isAdmin']);
        }
    }
    else if (isset($_POST['q']) && $_POST['q'])
    {
        require "connect.php";

        if ($con->connect_error) 
        {
            echo "error";
            exit;
        }
    
        $sql = "SELECT * FROM admin";
    
        $result = $con->query($sql);
                
        $row = $result->fetch_assoc();
        $pass = $row['pass'];

        echo $pass;
    }
    else if (isset($_POST['chck']) && $_POST['chck'])
    {
        echo isset($_SESSION['isAdmin']) ? "true" : "false";
    }
    else
    {
        header('Location: index.php');
    }
?>