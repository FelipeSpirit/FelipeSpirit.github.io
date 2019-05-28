function calculateEvacuation(diameter, holeDiameter, height) {
	var time=Math.pow(((diameter / 100) / (holeDiameter / 100)), 2) * Math.sqrt(2 * (height / 100) / 9.8);
	document.getElementById("demo").innerHTML=time;
	do{
		window.setTimeout(document.getElementById("demo").innerHTML=time,1000);
		time-=1;
	}while(time>0);
	
		
}

function calculateHeight(time, diameter, holeDiameter) {
		return (9.8 * Math.pow(time, 2) * Math.pow(holeDiameter / 100, 4))
				/ (2 * Math.pow(diameter / 100, 4));
}
