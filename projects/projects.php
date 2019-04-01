<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Portfolio">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="../images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/fontello.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<title>Daniel Mondzielewski - Projects</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
				<!-- <img src="images/blank.png" alt="project" id="project-slider-item">
				<img src="images/slider-gradient.png" alt="gradient" id="project-slider-gradient">
				<div id="project-slider-balls"></div>
				<div id="project-slider-info">
					<h3 id="project-slider-info-title"></h3>
					<span id="project-slider-info-desc"></span>
					<a href="" id="project-slider-show-button-link"><div id="project-slider-show-button">Show website</div></a>
				</div> -->
				<!-- Uncomment for slider -->
				<div class="row project-row-height">
					<div class="col-sm-3 p-5">
						<div class="project-block">Hejka</div>
					</div>
					<div class="col-sm-3 p-5">
						<div class="project-block">Hejka</div>
					</div>
					<div class="col-sm-3 p-5">
						<div class="project-block">Hejka</div>
					</div>
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