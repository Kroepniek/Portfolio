<?php
    session_start();

    if (isset($_POST['func']))
    {
        require "connect.php";

        $lang = $_SESSION['LANG'];

        if ($con->connect_error) 
        {
            echo "error";
            exit;
        }

        if ($_POST['func'] == "getProjects")
        {   
            $return = array();

            $sql = "SELECT * FROM projects";

            if ($lang != "ALL")
            {
                $sql = "SELECT * FROM projects WHERE PROJECT_LANG LIKE '%$lang%'";
            }

            $result = $con->query($sql);
            
            if ($result->num_rows > 0)
            {
                while ($row = $result->fetch_assoc())
                {
                    $project_title = $row["PROJECT_TITLE"];
                    $project_lang = $row["PROJECT_LANG"];
                    $project_desc_nl = $row["PROJECT_DESC_NL"];
                    $project_desc_en = $row["PROJECT_DESC_EN"];
                    $project_desc_pl = $row["PROJECT_DESC_PL"];
                    $project_date = $row["PROJECT_DATE"];
                    $project_img = $row["PROJECT_IMG"];
                    $project_url = $row["PROJECT_URL"];

                    $tempArray = array($project_title, $project_lang, $project_desc_nl, $project_desc_en, $project_desc_pl, $project_date, $project_img, $project_url);

                    array_push($return, $tempArray);
                }

                echo json_encode($return);
            }
            else
            {
                echo "Nothing";
            }
        }
        else if ($_POST['func'] == "checkLangs")
        {
            $return = array();

            $sql = "SELECT PROJECT_LANG FROM projects";

            $result = $con->query($sql);
            
            if ($result->num_rows > 0)
            {
                while ($row = $result->fetch_assoc())
                {
                    $project_lang = $row["PROJECT_LANG"];

                    array_push($return, $project_lang);
                }

                echo json_encode($return);
            }
        }
        else if ($_POST['func'] == "setLang")
        {
            $_SESSION['LANG'] = $_POST['lang'];
        }
        else if ($_POST['func'] == "getLang")
        {
            if (isset($_SESSION['LANG']))
            {
                echo $_SESSION['LANG'];
            }
            else
            {
                echo "error";
            }
        }
    }
?>