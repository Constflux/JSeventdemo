/*
Jamison LeBreton
3/11/2016
Assignment 6
Professor Chrenka
*/

// Store images as variables to attach events to
var buttonWhite = document.getElementById("white");
var buttonCyan = document.getElementById("cyan");
var buttonFuchsia = document.getElementById("fuchsia");
var buttonGold = document.getElementById("gold");
var buttonBlack = document.getElementById("black");

// Store div for output - the dancer
var dance = document.getElementById("output");

// Arrays for choices of color - for setting class
var lights = ["whitelight", "cyanlight", "fuchsialight", "goldlight", "blacklight"];
var colors = ["whitecolor", "cyancolor", "fuchsiacolor", "goldcolor", "blackcolor"];

// Variables to hold chosen color and keyboard key press
var lightChoice = "";
var colorChoice = "";
var key = 0;

/*
Bound to whole document.
On keydown check which arrow key was pressed and set ascii art
*/
function pressKey(event)
{
	key = event.keyCode;
	switch(key)
	{
		case 37: dance.innerHTML = " &#92;(^_^)   <br>  (  (&#62;   <br>  /  &#92;    ";
		break;
		
		case 38: dance.innerHTML = " &#92;(^_^)/  <br>  (  (    <br>  /  &#92;    ";
		break;
		
		case 39: dance.innerHTML = "  (^_^)/  <br> &#60;)  )    <br>  /  &#92;    ";
		break;
		
		case 40: dance.innerHTML = "  (^_^)   <br> /(  (&#92;   <br>   &#92;/     ";
		break;
	}
}

/*
Bound to whole document.
On keyup check to make sure it was an arrow key and reset ascii art
*/
function releaseKey(event)
{
	key = event.keyCode;
	if((key >= 37) && (key <= 40))
	{
		dance.innerHTML = "  (^_^)   <br> /(  (&#92;   <br>  /  &#92;    ";
	}
}

/*
Called when mouseover any image. Passes the index of the image hovered over.
Saves the color and sets classes for light color (background) and dancer color (font).
*/
function setLight(pick)
{
	lightChoice = lights[pick];
	dance.setAttribute("class", lightChoice + " " + colorChoice);
}

/*
Called when click on any image.  Passes the index of the image clicked on.
Saves the color and sets classes for light color (background) and dancer color (font).
*/
function setColor(pick)
{
	colorChoice = colors[pick];
	dance.setAttribute("class", lightChoice + " " + colorChoice);
}

// Bindings for hover - setting the background / lighting
buttonWhite.addEventListener("mouseover", function(){ setLight(0); }, false);
buttonCyan.addEventListener("mouseover", function(){ setLight(1); }, false);
buttonFuchsia.addEventListener("mouseover", function(){ setLight(2); }, false);
buttonGold.addEventListener("mouseover", function(){ setLight(3); }, false);
buttonBlack.addEventListener("mouseover", function(){ setLight(4); }, false);

// Bindings for click - setting the font color / dancer
buttonWhite.addEventListener("click", function(){ setColor(0); }, false);
buttonCyan.addEventListener("click", function(){ setColor(1); }, false);
buttonFuchsia.addEventListener("click", function(){ setColor(2); }, false);
buttonGold.addEventListener("click", function(){ setColor(3); }, false);
buttonBlack.addEventListener("click", function(){ setColor(4); }, false);

// Bindings for key presses and releases.  Bound to whole document.
document.addEventListener("keydown", pressKey, false);
document.addEventListener("keyup", releaseKey, false);