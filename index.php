<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Portfolio">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<script type="text/javascript" src="js/scroll.js"></script>
	<title>Daniel Mondzielewski</title>
</head>
<body>
	<nav id="nav">
		<a href="#"><div class="nav-element"><i class="icon-home"></i> <span class="nav-text">Home</span></div></a>
		<a href="#projects"><div class="nav-element"><i class="icon-code-1"></i> <span class="nav-text">Projects</span></div></a>
		<a href="#contact"><div class="nav-element"><i class="icon-mail-alt"></i> <span class="nav-text">Contact</span></div></a>
		<div class="nav-element-input"><input type="text" name="cmd" autocomplete="off"></div>
	</nav>
	<script type="text/javascript" src="js/nav.js"></script>
	<script type="text/javascript" src="js/cmd.js"></script>
	<div id="container">
		<div id="name">Daniel Mondzielewski</div>
		<script type="text/javascript" src="js/name.js"></script>
		<div class="section" id="projects">
			<div class="section-header"><p><span class="section-text"><i class="icon-code-1"></i> Projects</span></p></div>
			<div id="project-list">
				<div class="content">
					<div class="project project-Q-cont" id="project_1">
						<div class="project-Q"></div>
					</div>
					<div class="project project-T-cont" id="project_2">
						<div class="project-T"></div>
					</div>
					<div class="project project-Z-cont" id="project_3">
						<div class="project-nZ"></div>
					</div>
					<div class="project project-I-cont" id="project_4">
						<div class="project-I"></div>
					</div>
					<div class="project project-L-cont" id="project_5">
						<div class="project-J"></div>
					</div>
					<div class="project project-L-cont" id="project_6">
						<div class="project-J"></div>
					</div>
					<div class="project project-T-cont" id="project_7">
						<div class="project-T"></div>
					</div>
					<div class="project project-Z-cont" id="project_8">
						<div class="project-nz"></div>
					</div>
					<div class="project project-L-cont" id="project_9">
						<div class="project-J"></div>
					</div>
					<div class="project project-Z-cont" id="project_10">
						<div class="project-Z"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="section" id="contact">
			<div class="section-header"><p><span class="section-text"><i class="icon-mail-alt"></i> Contact</span></p></div>
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