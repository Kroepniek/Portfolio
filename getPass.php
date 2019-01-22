<?php
    session_start();

    if (isset($_POST['adm']))
    {
        header('Location: footer.php');
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
        $pass = "admin";
        echo $pass;
    }
    else
    {
        header('Location: index.php');
    }
?>