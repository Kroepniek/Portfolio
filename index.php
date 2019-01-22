<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Vault-Js">
	<link rel="icon" href="images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<script type="text/javascript" src="js/scroll.js"></script>
	<title>Daniel Mondzielewski</title>
</head>
<body>
	<nav id="nav">
		<a href="#"><div class="nav-element"><i class="icon-home"></i> Home</div></a>
		<a href="#projects"><div class="nav-element"><i class="icon-code-1"></i> Projects</div></a>
		<a href="#contact"><div class="nav-element"><i class="icon-mail-alt"></i> Contact</div></a>
		<div class="nav-element-input"><input type="text" name="cmd" autocomplete="off"></div>
	</nav>
	<script type="text/javascript" src="js/nav.js"></script>
	<script type="text/javascript" src="js/cmd.js"></script>
	<div id="container">
		<div id="name">Daniel Mondzielewski</div>
		<script type="text/javascript" src="js/name.js"></script>
		<div class="section" id="projects">
			<div class="section-header"><p><i class="icon-code-1"></i> Projects</p></div>
		</div>
		<div class="section" id="contact">
			<div class="section-header"><p><i class="icon-mail-alt"></i> Contact</p></div>
			<form action="" method="post">
				<input type="text" name="name" placeholder="Name">
				<input type="email" name="email" placeholder="E-mail">
				<input type="text" name="title" placeholder="Title">
				<textarea rows="10" cols="50" placeholder="Message..."></textarea>
				<input type="submit" value="Send">
			</form> 
		</div>
	</div>
	<script type="text/javascript" src="js/caret.js"></script>
	<a id="back-to-top"><i class="icon-up-open"></i></a>
	<?php require "footer.php"; ?>
</body>
</html>