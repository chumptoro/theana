


var time = 60000;

var interval;

function generateTime(timer_length) {
	time = time - 1000;     
	var minutes = Math.floor((time % (1000 * 60 * 60))/(1000 * 60)); 
	var seconds = Math.floor((time % (1000 * 60)) / 1000);
	document.getElementById("timer_control").innerHTML = "0" + minutes + ":" + seconds ;
}

//update the count down every 1 second
var x = function updateTimer() {     
	
	generateTime(time);

	if (time < 0) {         
		clearInterval(interval);
		var bell_sound = document.getElementById("zenbellsound");
		bell_sound.play();

		document.getElementById("timer_control").innerHTML = "meditate again";

		// document.getElementById("timer_display").innerHTML = "00:00";

		time = 60000; //must do this so the timer can reset to 20 seconds.  see https://stackoverflow.com/questions/45808844/adding-start-stop-reset-button-for-timer

		// document.getElementById("timer_control").addEventListener("click", start);
		document.getElementById("timer_control").style.cursor= "pointer";

		
	}
}


var start = function startTimer() {
	var bell_sound = document.getElementById("zenbellsound");
	bell_sound.play();
	// document.getElementById("timer_control").removeEventListener("click", start);
	document.getElementById("timer_control").style.cursor= "initial";
	interval = setInterval(x, 1000);
}

document.getElementById("timer_control").addEventListener("click", start);



var override = function tellBackgroundtoOverride() {
	chrome.runtime.sendMessage({action: "continue to distracting site"});
	console.log("send message to distractingsites_background event listener to continue to distracting site");
}


//
document.getElementById("override_nudge").addEventListener("click", override);





console.log('timer script running ' + time);




		