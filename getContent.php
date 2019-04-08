<?php
    session_start();

    function getReturn($id)
    {
        require "connect.php";

        $lang = $_SESSION['LANGUAGE'];
        $lang = strtoupper($lang);
        $content = "";

        if ($con->connect_error) 
        {
            $content = "error";
            exit;
        }

        $sql = "SELECT * FROM webcontent WHERE id = $id";

        $result = $con->query($sql);
                
        if ($result->num_rows > 0)
        {
            $row = $result->fetch_assoc();
            
            return $row['CONTENT_'.$lang];
        }
        else
        {
            return "Nothing";
        }
    }
?>