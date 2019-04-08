<?php
    session_start();

    if (isset($_SESSION['isAdmin']) && $_SESSION['isAdmin'] == "true")
    {
        if (strlen($_FILES['picture']['name']) > 0)
        {
            $target_dir = "images/";
            $target_file = $target_dir . basename($_FILES['picture']['name']);
            move_uploaded_file($_FILES['picture']['tmp_name'], $target_file);
            echo "ok";
        }
        else
        {
            header('Location: '.$_SESSION['LANGUAGE'].'/admin.php');
        }
    }
    else
    {
        echo "error";
    }
?>