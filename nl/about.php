<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Portfolio">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="../images/transparent_kon.png">
	<link rel="stylesheet" type="text/css" href="../css/style-aboutme.css">
	<link rel="stylesheet" type="text/css" href="../css/fontello.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<title>Daniel Mondzielewski - About me</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<body>
	<nav id="nav">
		<a href="index.php#"><div class="nav-element" status="unactive"><i class="icon-home"></i> <span class="nav-text">Start</span></div></a>
		<a href="index.php#projects"><div class="nav-element" status="unactive"><i class="icon-code-1"></i> <span class="nav-text">Projects</span></div></a>
		<a href="index.php#contact"><div class="nav-element" status="unactive"><i class="icon-mail-alt"></i> <span class="nav-text">Contact</span></div></a>
		<a href="" onclick="return false;"><div class="nav-element" status="active"><i class="icon-user"></i> <span class="nav-text">About me</span></div></a>
	</nav>
	<script type="text/javascript" src="../js/nav.js"></script>
	<div id="container">
		<div id="about-me-content" class="mx-auto p-3">
			<div class="row">
				<div class="about-me-first col-md-12 col-lg-6">
					<div class="col-md-12 col-lg-6 m-0 py-1 px-2">
						<img src="../images/foto_2448x2448.png" id="about-me-foto" width="200" height="200" alt="Daniel Mondzielewski">
					</div>
					<div id="about-me-skills" class="col-md-12 col-lg-6 m-0 py-1 px-2">
						<div id="about-me-skills-content">
							<div class="about-me-skills-skill row py-1 px-2">
								<div class="about-me-skills-skill-name col-4">HTML</div>
								<div class="about-me-skills-skill-progress col-8 px-0" status="80"></div>
							</div>
							<div class="about-me-skills-skill row py-1 px-2">
								<div class="about-me-skills-skill-name col-4">PHP</div>
								<div class="about-me-skills-skill-progress col-8 px-0" status="67"></div>
							</div>
							<div class="about-me-skills-skill row py-1 px-2">
								<div class="about-me-skills-skill-name col-4">Javascript</div>
								<div class="about-me-skills-skill-progress col-8 px-0" status="75"></div>
							</div>
						</div>
					</div>
					<script type="text/javascript" src="../js/skillprogress.js"></script>
				</div>
				<div class="about-me-second col-md-12 col-lg-6 py-5">
					<div class="row">
						<div id="about-me-second-content" class="col-md-12">
							<?php require "../getContent.php"; ?>
						</div>
					</div>
				</div>
			</div>
			<div class="row py-5">
				<div class="about-me-first col-md-12 col-lg-6">
					<?php require "../getContent.php"; ?>
				</div>
				<div class="about-me-second col-md-12 col-lg-6">
					<img src="../images/cert-csharp.jpg" alt="c# cert" height="200" class="col-5 py-1">
					<img src="../images/cert-javascript.jpg" alt="js cert" height="200" class="col-5 py-1">
					<img src="../images/cert-sql.jpg" alt="sql cert" height="200" class="col-5 py-1">
				</div>
			</div>
		</div>
		<a id="back-to-top"><i class="icon-up-open"></i></a>
		<script type="text/javascript" src="../js/scroll.js"></script>
	</div>
	<?php require "footer.php"; ?>
</body>
</html>