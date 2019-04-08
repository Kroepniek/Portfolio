<?php
    session_start();

    if (!isset($_SESSION['isAdmin']))
    {
        header('Location: index.php');
        exit;
    }
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Portfolio">
	<link rel="icon" href="../images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="../css/admin_style.css">
	<link rel="stylesheet" type="text/css" href="../css/fontello.css">
	<title>Daniel Mondzielewski - Admin</title>
</head>
<body>
    <div id="container">
        <div id="project-adding">
			<input type="text" name="lang" id="project-lang" placeholder="HTML,CSS,JS">
			<input type="text" name="title" id="project-title" placeholder="Title">
			<input type="file" name="project-picture" accept="image/png, image/jpeg" id="project-picture">
			<input type="text" name="url" id="project-url" placeholder="URL (naam or csharp/naam)">
			<textarea name="desc_nl" rows="10" cols="50" id="project-desc_nl" placeholder="Beschrijving..."></textarea>
			<textarea name="desc_en" rows="10" cols="50" id="project-desc_en" placeholder="Description..."></textarea>
            <textarea name="desc_pl" rows="10" cols="50" id="project-desc_pl" placeholder="Opis..."></textarea>
            <input type="date" name="date" id="project-date">
            <div class="project-submit" onclick="AddNewProject()">Add Project</div>
            
            <input type="text" name="title" id="project-title-remove" placeholder="Title">
            <div class="project-submit" onclick="RemoveProject()">Remove Project</div>
        </div> 
    </div>
    <script type="text/javascript" src="../js/admin.js"></script>
    <script type="text/javascript" src="../js/admin_logout.js"></script>
</body>
</html>