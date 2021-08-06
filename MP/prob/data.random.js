var firstRandom = [];
var secondRandom = [];
var thirdRandom = [];
var fourthRandom = [];

function getUserName(users, id){
	return users.find(u=>u.id == id).name;
}

function getRandomName(rand) {
    return rand[Math.floor(Math.random() * rand.length)];
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

async function randomize(){
	const data = await readData('../data.json')
	const tableData = document.getElementById('table-data');
	let i = 0;
	data.plays.forEach(p=>{
		firstRandom.push(getUserName(data.users, p.first))
		secondRandom.push(getUserName(data.users, p.second))
		thirdRandom.push(getUserName(data.users, p.third))
		fourthRandom.push(getUserName(data.users, p.fourth))
	});

	let fst, snd, trd,fth;
	let el1=document.getElementById('1-place');
	let el2=document.getElementById('2-place');
	let el3=document.getElementById('3-place');
	let el4=document.getElementById('4-place');
	let v = 10;
	let s = 2000;
	el1.src = el2.src = el3.src =el4.src = "img/q.png"
	
	do{
		await sleep(s);
		fth = getRandomName(fourthRandom)
		el4.src = `img/${fth}.png`
		v--;
		s /= 1.4;
	}while(v > 0);

	console.log(fth)
	thirdRandom = thirdRandom.filter(e => e != fth)
	secondRandom = secondRandom.filter(e => e != fth)
	firstRandom = firstRandom.filter(e => e != fth)

	do{
		await sleep(s);
		trd = getRandomName(thirdRandom)
		el3.src = `img/${trd}.png`
		s /= 1.4;
	}while(fth == trd);

	console.log(trd)
	secondRandom = secondRandom.filter(e => e != trd)
	firstRandom = firstRandom.filter(e => e != trd)
	
	s = 2000;

	do{
		await sleep(s);
		snd = getRandomName(secondRandom)
		el2.src = `img/${snd}.png`
		s /= 1.4;
	}while(fth == snd || snd == trd);

	console.log(snd)
	firstRandom = firstRandom.filter(e => e != snd)	

	fst = getRandomName(firstRandom)
	el1.src = `img/${fst}.png`
	console.log(fst)
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
