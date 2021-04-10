var firstRandom = [];
var secondRandom = [];
var thirdRandom = [];
var fourthRandom = [];

readData('../data.json').then(data=>{
	const tableData = document.getElementById('table-data');
	let i = 0;
	data.plays.forEach(p=>{
		for(var i = 0; i < 10;i++){
			firstRandom.push(getUserName(data.users, p.first))
			secondRandom.push(getUserName(data.users, p.second))
			thirdRandom.push(getUserName(data.users, p.third))
			fourthRandom.push(getUserName(data.users, p.fourth))
		}
	});

	thirdRandom.push("Caulimón")
	fourthRandom.push("Samheer")
})

function getUserName(users, id){
	return users.find(u=>u.id == id).name;
}

function getRandomName(rand) {
    return rand[Math.floor(Math.random() * rand.length)];
}

async function randomize(){
	let fst, snd, trd,fth;
	let el1=document.getElementById('1-place');
	let el2=document.getElementById('2-place');
	let el3=document.getElementById('3-place');
	let el4=document.getElementById('4-place');
	let v = 10;
	let s = 2000;
	let fsize = 1;
	el1.innerHTML = el2.innerHTML = el3.innerHTML =el4.innerHTML = "?"
	
	do{
		await sleep(s);
		fth = el4.innerHTML = getRandomName(fourthRandom)
		el4.style.fontSize = fsize + "rem";
		fsize+=.4;
		v--;
		s /= 1.4;
	}while(v > 0);
	console.log(fth)
	
	let maxsize = fsize;
	fsize = 1;
	do{
		await sleep(s);
		trd = el3.innerHTML = getRandomName(thirdRandom)
		el3.style.fontSize = fsize + "rem";
		fsize+=.4;
		s /= 1.4;
		console.log(fth ,trd)
	}while(fth == trd);
	console.log(trd)
	if(maxsize > fsize)
		el3.style.fontSize = maxsize + "rem";
	
	s= 2000;
	fsize = 1;
	do{
		await sleep(s);
		snd = el2.innerHTML = getRandomName(secondRandom)
		el2.style.fontSize = fsize + "rem";
		fsize+=.4;
		s /= 1.4;
	}while(fth == snd || snd == trd);
	console.log(snd)
	if(maxsize > fsize)
		el2.style.fontSize = maxsize + "rem";

	fsize = 1;
	do{
		await sleep(s);
		fst = el1.innerHTML = getRandomName(firstRandom)
		el1.style.fontSize = fsize + "rem";
		fsize+=.4;
		s /= 1.4;
	}while(fth == fst || snd == fst || trd == fst);
	console.log(fst)
	if(maxsize > fsize)
		el1.style.fontSize = maxsize + "rem";
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
