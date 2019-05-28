function calculateEvacuation(diameter, holeDiameter, height) {
	var time=100;
	while(time>0){
		window.setTimeout(document.getElementById("demo").innerHTML=time,1000);
		time--;
		sleep(1);
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
