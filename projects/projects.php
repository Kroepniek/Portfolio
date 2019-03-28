<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Portfolio">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="../images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/fontello.css">
	<title>Daniel Mondzielewski - Projects</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
	<nav id="nav">
		<a href="../#"><div class="nav-element"><i class="icon-home"></i> <span class="nav-text">Home</span></div></a>
		<a href="?filter=all"><div class="nav-element"><i class="icon-code-1"></i> <span class="nav-text">Projects</span></div></a>
		<a href="../#contact"><div class="nav-element"><i class="icon-mail-alt"></i> <span class="nav-text">Contact</span></div></a>
		<div class="nav-element-input"><input type="text" name="cmd" autocomplete="off"></div>
	</nav>
	<script type="text/javascript" src="../js/nav.js"></script>
	<div id="container">
		<div id="project-timeline">
			<div id="project-slider-years">
				<div id="project-slider-years-content"></div>
			</div>
			<div id="project-slider">
				<img src="images/dc-heroes-full.png" alt="project" id="project-slider-item">
				<img src="images/slider-gradient.png" alt="project" id="project-slider-gradient">
				<div id="project-slider-balls"></div>
				<div id="project-slider-info">
					<h3 id="project-slider-info-title">DC Heroes</h3>
					<span id="project-slider-info-desc"></span>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="../js/project-slider.js"></script>
		<a id="back-to-top"><i class="icon-up-open"></i></a>
		<script type="text/javascript" src="../js/scroll.js"></script>
	</div>
	<?php require "../footer.php"; ?>
</body>
</html>