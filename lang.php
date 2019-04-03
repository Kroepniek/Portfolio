<?php
    session_start();

    if (isset($_POST['func']))
    {
        if ($_POST['func'] == "getLang")
        {
            if (isset($_SESSION['LANGUAGE']))
            {
                echo $_SESSION['LANGUAGE'];
            }
            else
            {
                echo "error";
            }
        }
        else if ($_POST['func'] == "setLang")
        {
            $_SESSION['LANGUAGE'] = $_POST['lang'];
        }
    }
?>