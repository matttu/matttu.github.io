<!DOCTYPE html>
<html lang="en" class="hide-overflow">
 <head>
 <meta charset="utf-8">
 <meta name="author" content="Matt Usifer">
 <title>Matt Usifer</title>
 <meta name="description" content="An amalgam of works"/>

<link href="./styles/main.css" rel="stylesheet" type="text/css" media="screen" />
<link href="./styles/skydive.css" rel="stylesheet" type="text/css" media="screen" />
<link href="./styles/projects.css" rel="stylesheet" type="text/css" media="screen" />
<link href="./styles/resume.css" rel="stylesheet" type="text/css" media="screen" />
<link href="./styles/contact-form.css" rel="stylesheet" type="text/css" media="screen" />
<link rel="stylesheet"
  media="screen and (min-width: 900px)"
  href="./styles/big.css"
  >
<link rel="stylesheet" 
  media="screen and (max-width: 700px)" 
  href="./styles/small.css" />  
<link rel="stylesheet" 
  media="screen and (max-width: 500px)" 
  href="./styles/mobile.css" />  



<!--[if lte IE 6]>
<![endif]-->
<!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/sin/trunk/html5.js"></script>
<![endif]-->

<link rel="shortcut icon" href="pictures/glasses.ico" >

<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="./scripts/jquery.scrollTo-1.4.3.1-min.js"></script>
<script type="text/javascript" src="./scripts/mattusifer.js"></script>
<script type="text/javascript" src="./scripts/img-map-resize.js"></script>
</head>

<body>
<div id="head">
	<a href="#" title="#zero" >Matt<br>Usifer</a>	
		
<!-- Nav Bar -->
	<ul id="nav" >
		<li><a href="#" title="#one" >Projects</a></li>
		<li><a href="#" title="#two" >Resume</a></li>
		<li><a href="#" title="#three" >Contact</a></li>
	</ul>
</div>
	
<div id="container">
<!-- home -->
	<div class="content" id="zero">

		<p style="opacity:0.8;">I'm Matt, I live in Burlington, VT. I'm a developer at Dealer.com. 
			<br><br><a href="#" title="#one" >Here</a> are a few things I do when I'm not at work.</p>
	</div>
	<div class="fill" id="zero-one"></div>

<!-- projects -->
	<div class="content" id="one">
		<ul id="project-tabs">
			<li>
				<a href="http://www.github.com/mattusifer/cursive-coffee-blog" target="_" name="project-cc">Cursive Coffee</a><br>
				<span>HTML, CSS, JavaScript, PHP, MySQL</span>
			</li>
			<li>
				<a href="https://github.com/mattusifer/hear-see" target="_" name="project-hearsee">HearSee</a><br>
				<span>Scala</span>
			</li>
			<li>
				<a href="http://friendsandfamilyvt.tumblr.com" target="_" name="project-ff">Friends + Family</a><br>
				<span>CSS</span>
			</li>
			<!--
			<li>
				<a href="#" title="project-bandgen">Random Band Generator</a><br>
				<span>Java</span>
			</li>
			-->
			<li>
				<a href="https://github.com/mattusifer/img-map-resize" target="_" name="project-map">Image Map Resize</a><br>
				<span>jQuery</span>
			</li>
		</ul>
		<div id="project-cc" class="project-content">
			A full-stack website and blog for a local coffee shop.
		</div>
		<div id="project-hearsee" class="project-content">
			A simple Mp3 player
		</div>
		<div id="project-ff" class="project-content">
			An exaggerated tumblr design for a local music collective.<br><br>
		</div>
		<div id="project-bandgen" class="project-content">
			This is a very simple application that I wrote for Friends + Family using Java in order to randomly generate 3-4 person bands given a list of names. 
			<br><br>
			The program will take a text file containing a name on each line as an input, and will output each band in an alert notification on the screen. 
			<br><br>
			Code here: <a href="#">*github link*</a>
		</div>
		<div id="project-map" class="project-content">
			A script to re-map HTML image maps when the window is resized.
			<br><br>
			Example: A poorly drawn, functional, and resizable piano.<br><br>

			<?php include('./piano/piano.inc.php'); ?>
		</div>

	</div>
	
	<div class="fill" id="one-two"></div>
	
<!-- experience -->
	<div class="content" id="two">
		<?php include('./includes/resume.inc.php'); ?>
	</div>
	
	<div class="fill" id="two-three"></div>
	
<!-- contact -->
	<div class="content" id="three">
		<div id="contact-info">
			<p>Email: mattusifer@gmail.com</p>
		</div>

		<table class="squares">
		    <tr>
		        <td id="a"></td>
		        <td id="b"></td>
		        <td id="c"></td>
		        <td id="d"></td>
		        <td id="e"></td>
		    </tr>
		    <tr>
		        <td id="f"></td>
		        <td id="g"></td>
		        <td id="h"></td>
		        <td id="i"></td>
		        <td id="j"></td>
		    </tr>
		    <tr>
		        <td id="k"></td>
		        <td id="l"></td>
		        <td id="m"></td>
		        <td id="n"></td>
		        <td id="o"></td>
		    </tr>
		    <tr>
		        <td id="p"></td>
		        <td id="q"></td>
		        <td id="r"></td>
		        <td id="s"></td>
		        <td id="t"></td>
		    </tr>
		    <tr>
		        <td id="u"></td>
		        <td id="v"></td>
		        <td id="w"></td>
		        <td id="x"></td>
		        <td id="y"></td>
		    </tr>
		</table>
	</div>
</div> <!-- container -->

<div id="mobile-home"><a href="#" title="#zero" >(home)</a></div>

<div></div>
<script>
soundManagerInit();
</script>
</body>
</html>
