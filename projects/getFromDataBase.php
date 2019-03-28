<?php
    if (isset($_POST['func']))
    {
        require "../connect.php";

        if ($con->connect_error) 
        {
            echo "error";
            exit;
        }

        if ($_POST['func'] == "getProjects")
        {   
            $return = array();

            $sql = "SELECT * FROM projects";
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
            }
            else
            {
                echo "error";
            }

            echo json_encode($return);
        }
    }
?>