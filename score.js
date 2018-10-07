var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var button1 = document.querySelector("#player1");
var button2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");
var number = document.querySelector("input");
var p = document.querySelector("p span");

var maxscore=5;
var tot1 = 0;
var tot2 =0;
var game = false;

button1.addEventListener("click", function(){
	if(!game){
		tot1++;
	if(maxscore===tot1){
		score1.classList.add("highlight");
		game=true;
	}
	score1.innerHTML = tot1;
	}
	
});

button2.addEventListener("click", function(){
	if(!game){
		tot2++;
	if(maxscore===tot2){
		score2.classList.add("highlight");
		game=true;
	}
	score2.innerHTML = tot2;
	}
});
function resetf(){
	tot1=0;
	tot2=0;
	score1.innerHTML=0;
	score2.innerHTML=0;
	score1.classList.remove("highlight");
	score2.classList.remove("highlight");
	game=false;
}
reset.addEventListener("click",resetf);
number.addEventListener("change",function(){
	p.innerHTML=Number(number.value);
	maxscore=Number(number.value);
	resetf();
});

