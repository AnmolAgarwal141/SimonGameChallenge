gamepattern=[];
userClickedPattern=[];
buttonColors=["red","blue","green","yellow"]
var count=0;
var k=0;
var l=1;
// generateRandomNumber();
 var started =false;
 $(document).keypress(function() {
 	if (!started) {

     generateRandomNumber();
     started = true;
     }
 	});
function generateRandomNumber(){
	count++;

	$("h1").text("Level"+count);
	randomNo=Math.floor(Math.random()*4)+1;
	randomChoosenColor=buttonColors[randomNo-1];

	gamepattern.push(randomChoosenColor);

	$("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playsound(randomChoosenColor);
	}


//$("h1").text("sounds/"+randomChoosenColor+".mp3");

$(".btn").click(function(){
	if(started===true){
		userChosenColor=$(this).attr("id");
  		userClickedPattern.push(userChosenColor);
  		animatepress(userChosenColor);
  		playsound(userChosenColor);
  		k++;
  		if(k===l){check();}
	}
  
  
  // $("h1").text(userClickedPattern);
});

function check(){
	var flag=1;
	l++;
		for(var i=0;i<gamepattern.length;i++){
			if(gamepattern[i]!=userClickedPattern[i]){
				flag=0;
				break;		
			}
		}
		if(flag===0){
			$("h1").text("Game Over your Score is: "+(l-1)+"\n Press A Key to Start");
			k=0;
			l=1;
			userClickedPattern=[];
			gamepattern=[];
			count=0;
			started =false
			audioObj = new Audio("sounds/wrong.mp3");
			audioObj.play();
			$("body").addClass("game-over");
			setTimeout(function() {
       		$("body").removeClass("game-over");
   			}, 300);
		}
		else{
			k=0;
			generateRandomNumber();
			userClickedPattern=[];
		}
}

function playsound(name){
	audioObj = new Audio("sounds/"+name+".mp3");
	audioObj.play();
}

function animatepress(currentcolor){
	$("#"+currentcolor).addClass("pressed");
	setTimeout(function() {
       $("#"+currentcolor).removeClass("pressed");
   }, 100);

}

