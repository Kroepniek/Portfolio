<?php
    session_start();

    if (isset($_SESSION['isAdmin']))
    {
        require "connect.php";

        if ($con->connect_error) 
        {
            echo "error";
            exit;
        }

        if ($_POST['q'] == "addProject")
        {
            $lang = $_POST['l'];
            $title = $_POST['t'];
            $descNL = $_POST['dn'];
            $descEN = $_POST['de'];
            $descPL = $_POST['dp'];
            $date = $_POST['d'];
            $img = $_POST['i'];
            $url = $_POST['u'];

            //$sql = "INSERT INTO projects VALUES (NULL, \"$lang\", \"$title\", \"$descNL\", \"$descEN\", \"$descPL\", '1999-01-01', \"$img\", \"$url\")";
            $sql = "INSERT INTO projects VALUES (NULL, \"".$lang."\", \"".$title."\", \"".$descNL."\", \"".$descEN."\", \"".$descPL."\", \"".$date."\", \"".$img."\", \"".$url."\")";

            if ($con->query($sql) === TRUE)
            {
                echo "ok";
            }
            else 
            {
                echo "error";
            }
        }
        else if ($_POST['q'] == "removeProject")
        {
            $sql = "DELETE FROM projects WHERE PROJECT_TITLE = \"".$_POST['title']."\"";

            if ($con->query($sql) === TRUE) {
                echo "ok";
            }
            else 
            {
                echo "error";
            }
        }
    }
    else
    {
        echo "You are not logged in";
    }
?>