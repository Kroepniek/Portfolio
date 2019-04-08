<?php
    session_start();

    if (isset($_SESSION['isAdmin']))
    {
        if (isset($_POST['picToDelete']))
        {
            $target_dir = "images/";
            $target_file = $target_dir . $_POST['picToDelete'];
            if (!unlink($target_file))
            {
                echo ("error");
            }
            else
            {
                echo ("ok");
            }
        }
        else
        {
            header('Location: admin.php');
        }      
    }
    else
    {
        echo "error";
    }
?>