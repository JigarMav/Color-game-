var numSquares =6;
var colors = getRandomColor(numSquares);
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = randomColor();
var message = document.querySelector("#message");
var button = document.querySelector('#reset');
var samecolor = document.querySelector("#same");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	samecolor.style.backgroundColor="steelblue";
	numSquares = 3;
	colors = getRandomColor(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display="none";
		}
	}

});

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	samecolor.style.backgroundColor="steelblue";
	numSquares=6;
	colors = getRandomColor(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
			square[i].style.backgroundColor = colors[i];
			square[i].style.display="block";
	
}
}
);


button.addEventListener("click", function(){
	//generate new colors
	colors = getRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = randomColor();
	//change ColorDisplay content
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	message.textContent = '';
	this.textContent = "New Colors";
	for (var i = 0; i<square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}
	samecolor.style.backgroundColor="steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i=0;i<square.length;i++){
	//Add initial colors to squares
	square[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		//compare clicked color to pickedcolor
		if(clickedColor===pickedColor){
			message.textContent = 'Correct';
			button.textContent = "Play Again?";
			changeColor(pickedColor);

		}
		else
			{
				this.style.backgroundColor = '#232323';
				message.textContent = 'Try Again';
			}
	})
}

function changeColor(color){
	//loop through all he diff colors 
	for (var i = 0; i < square.length; i++) {
		//change color to matched color
		square[i].style.backgroundColor=color;

	}
	samecolor.style.backgroundColor=color;
	
}

function randomColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function getRandomColor(num){
	//create an empty array
	var arr=[]
	//add random colors to array
	for(var i=0 ;i<num; i++){
		//get random color and push to array
		arr.push(generateRandom());

	}
	//return an array
	return arr;
}

function generateRandom(){
	//generate random red, green ,blue from 0 to 255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	 return "rgb("+r+", "+g+", "+b+")";
}




// var numSquares = 6;
// var colors = [];
// var pickedColor;
// var squares = document.querySelectorAll(".square");
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");
// var modeButtons = document.querySelectorAll(".mode");


// init();

// function init(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// }

// function setupModeButtons(){
// 	for(var i = 0; i < modeButtons.length; i++){
// 		modeButtons[i].addEventListener("click", function(){
// 			modeButtons[0].classList.remove("selected");
// 			modeButtons[1].classList.remove("selected");
// 			this.classList.add("selected");
// 			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
// 			reset();
// 		});
// 	}
// }

// function setupSquares(){
// 	for(var i = 0; i < squares.length; i++){
// 	//add click listeners to squares
// 		squares[i].addEventListener("click", function(){
// 			//grab color of clicked square
// 			var clickedColor = this.style.background;
// 			//compare color to pickedColor
// 			if(clickedColor === pickedColor){
// 				messageDisplay.textContent = "Correct!";
// 				resetButton.textContent = "Play Again?"
// 				changeColors(clickedColor);
// 				h1.style.background = clickedColor;
// 			} else {
// 				this.style.background = "#232323";
// 				messageDisplay.textContent = "Try Again"
// 			}
// 		});
// 	}
// }



// function reset(){
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors"
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block"
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }

// resetButton.addEventListener("click", function(){
// 	reset();
// })

// function changeColors(color){
// 	//loop through all squares
// 	for(var i = 0; i < squares.length; i++){
// 		//change each color to match given color
// 		squares[i].style.background = color;
// 	}
// }

// function pickColor(){
// 	var random = Math.floor(Math.random() * colors.length);
// 	return colors[random];
// }

// function generateRandomColors(num){
// 	//make an array
// 	var arr = []
// 	//repeat num times
// 	for(var i = 0; i < num; i++){
// 		//get random color and push into arr
// 		arr.push(randomColor())
// 	}
// 	//return that array
// 	return arr;
// }

// function randomColor(){
// 	//pick a "red" from 0 - 255
// 	var r = Math.floor(Math.random() * 256);
// 	//pick a "green" from  0 -255
// 	var g = Math.floor(Math.random() * 256);
// 	//pick a "blue" from  0 -255
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }

