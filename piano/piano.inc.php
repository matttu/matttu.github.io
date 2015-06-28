
<script type="text/javascript" src="./soundmanager.js"></script>
<script type="text/javascript">

function C()
{
document.getElementById("piano").src="./piano/pictures/c.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Csharp()
{
document.getElementById("piano").src="./piano/pictures/csharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function D()
{
document.getElementById("piano").src="./piano/pictures/d.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Dsharp()
{
document.getElementById("piano").src="./piano/pictures/dsharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function E()
{
document.getElementById("piano").src="./piano/pictures/e.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function F()
{
document.getElementById("piano").src="./piano/pictures/f.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Fsharp()
{
document.getElementById("piano").src="./piano/pictures/fsharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function G()
{
document.getElementById("piano").src="./piano/pictures/g.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Gsharp()
{
document.getElementById("piano").src="./piano/pictures/gsharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function A()
{
document.getElementById("piano").src="./piano/pictures/a.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function Asharp()
{
document.getElementById("piano").src="./piano/pictures/asharp.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
function B()
{
document.getElementById("piano").src="./piano/pictures/b.jpg";
setTimeout('document.getElementById("piano").src="./piano/pictures/piano.jpg"',200);
}
</script>

<map id="pianoMap">
<area shape="poly" alt="C" title="" href="#" coords="245,253,328,246,303,347,304,390,314,396,295,469,295,533,153,542,150,482,151,478" onmousedown="soundManager.play('C');C()" />
<area shape="poly" alt="C#" title="" href="#" coords="346,221,368,216,380,248,338,386,310,399,302,386,305,341" onmousedown="soundManager.play('Csharp');Csharp()" />
<area shape="poly" alt="D" title="" href="#" coords="383,248,445,241,451,246,425,351,430,393,449,392,435,465,433,532,292,537,295,475,318,395,341,387" onmousedown="soundManager.play('D');D()" />
<area shape="poly" alt="D#" title="" href="#" coords="460,221,479,215,489,249,464,390,431,391,426,351" onmousedown="soundManager.play('Dsharp');Dsharp()" />
<area shape="poly" alt="E" title="" href="#" coords="583,249,559,464,556,525,435,531,436,466,450,392,466,389,489,244" onmousedown="soundManager.play('E');E()" />
<area shape="poly" alt="F" title="" href="#" coords="585,248,668,247,665,360,675,388,688,387,697,464,699,520,558,527,560,455" onmousedown="soundManager.play('F');F()" />
<area shape="poly" alt="F#" title="" href="#" coords="675,218,691,215,698,221,714,366,702,386,674,384,667,356" onmousedown="soundManager.play('Fsharp');Fsharp()" />
<area shape="poly" alt="G" title="" href="#" coords="809,243,831,394,838,385,853,460,852,523,700,526,701,463,691,393,711,365,705,243" onmousedown="soundManager.play('G');G()" />
<area shape="poly" alt="G#" title="" href="#" coords="806,216,830,216,866,355,861,386,831,386,826,366" onmousedown="soundManager.play('Gsharp');Gsharp()" />
<area shape="poly" alt="A" title="" href="#" coords="944,243,1025,460,1015,525,849,531,853,464,845,391,864,386,870,351,840,244" onmousedown="soundManager.play('A');A()" />
<area shape="poly" alt="A#" title="" href="#" coords="948,214,969,215,974,216,1020,330,1019,350,1023,388,992,385,945,241" onmousedown="soundManager.play('Asharp');Asharp()" />
<area shape="poly" alt="B" title="" href="#" coords="1100,241,1185,465,1180,524,1019,522,1027,466,1028,456,1002,394,1026,387,1022,328,983,238" onmousedown="soundManager.play('B');B()" />
</map>

<img src="./piano/pictures/piano.jpg" alt="play!" usemap="#pianoMap" id="piano" name="map-resize"/>