<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Portfolio">
	<link rel="icon" href="images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="css/admin_style.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<title>Daniel Mondzielewski - Admin</title>
</head>
<body>
    <div id="container">
        <?php
            session_start();

            if (!isset($_SESSION['isAdmin']))
            {
                header('Location: index.php');
                exit;
            }
            else if ($_SESSION['isAdmin'])
            {
                echo 'Logged in! <div id="admin-logout">Logout.</div>';
            }
        ?>
    </div>
<script type="text/javascript" src="js/admin_logout.js"></script>
</body>
</html>