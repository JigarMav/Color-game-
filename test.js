// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
// 	if(isBlue)
// 	{
// 		body.style.backgroundColor = "white";

// 	}
// 	else{
// 		body.style.background = "#3498db";
// 	}
// 	isBlue = !isBlue;
// },1000);
//alert("Js connected");
var button = document.querySelector("button");
		button.addEventListener("click", function(){
				// document.querySelector("body").style.background = "white";
				document.body.classList.toggle("purple");
			
				// document.querySelector("body").style.background = "purple";
			}
			

		);