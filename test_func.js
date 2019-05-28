function calculateEvacuation(diameter, holeDiameter, height) {
	var time=Math.pow(((diameter / 100) / (holeDiameter / 100)), 2) * Math.sqrt(2 * (height / 100) / 9.8);
	document.getElementById("demo").innerHTML=time;
	while(time>0){
		window.setTimeout(document.write((calculateHeight(time, diameter, holeDiameter))*100)+"\n",1);
		time-=0.001;
	}
	
		
}

function calculateHeight(time, diameter, holeDiameter) {
		return (9.8 * Math.pow(time, 2) * Math.pow(holeDiameter / 100, 4))
				/ (2 * Math.pow(diameter / 100, 4));
}
