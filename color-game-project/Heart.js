var difficulty=6;

var colors = arrayGenerator(difficulty);

var squares = document.querySelectorAll(".square");

var	colorPicked=pickedColor();

var displayc= document.getElementById("displayColor");

var displayMessage=document.querySelector("#message");
displayc.textContent=colorPicked;

var resetButton = document.querySelector("#reset");

var hardb =document.querySelector("#Hard");
var easyb = document.querySelector("#Easy");

easyb.addEventListener("click", function(){
	easyb.classList.add("selected");
	hardb.classList.remove("selected");
	difficulty=3;
	colors = arrayGenerator(difficulty);
	colorPicked=pickedColor();
	for(var i = 0;i<squares.length ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";

		}

	}

});
hardb.addEventListener("click", function(){
	easyb.classList.remove("selected");
	hardb.classList.add("selected");
	difficulty=6;
	colors = arrayGenerator(difficulty);
	colorPicked=pickedColor();
		for(var i = 0;i<squares.length ; i++){
			squares[i].style.display = "block";

		
			squares[i].style.backgroundColor = colors[i];
		
			
		}

	});

resetButton.addEventListener("click" , function(){
	colors = arrayGenerator(difficulty);
	displayc.textContent=colorPicked;
	colorPicked=pickedColor();
	h1.style.backgroundColor= "#232323";
	displayMessage.textContent="";
	this.textContent="New Colors"
	for(var i = 0;i<squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];}
});


var h1=document.querySelector("h1");

for(var i = 0;i<squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];


	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor==colorPicked){
			displayMessage.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again";
		}
		else{
			displayMessage.textContent = "Try Again!";
			this.style.backgroundColor="#232323";
		}
	});
}


function changeColor(color){
	for(var i =0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickedColor(){
	var res = Math.floor(Math.random() *difficulty);
	return(colors[res]);
}


function arrayGenerator(n){
	var ar = [];
	for( var i = 0;i<n;i++){
		ar[i] = colorGenerator();

	}
	return ar;
}

function colorGenerator(){
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);

	return"rgb("+ r + ", " + g + ", "+ b + ")";
}

