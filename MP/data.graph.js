var firstPlaces = [
	{u_id:1, times: 0},
	{u_id:2, times: 0},
	{u_id:3, times: 0},
	{u_id:4, times: 0}
];

var secondPlaces = [
	{u_id:1, times: 0},
	{u_id:2, times: 0},
	{u_id:3, times: 0},
	{u_id:4, times: 0}
];

var thirdPlaces = [
	{u_id:1, times: 0},
	{u_id:2, times: 0},
	{u_id:3, times: 0},
	{u_id:4, times: 0}
];

var fourthPlaces = [
	{u_id:1, times: 0},
	{u_id:2, times: 0},
	{u_id:3, times: 0},
	{u_id:4, times: 0}
];

var commonRows = [];

readData('data.json').then(data=>{
	const tableData = document.getElementById('table-data');
	const tableDataCommon = document.getElementById('table-data-common');
	
	let i = 0;
	data.plays.forEach(p=>{
		firstPlaces.find(f=> f.u_id == p.first).times++;
		secondPlaces.find(f=> f.u_id == p.second).times++;
		thirdPlaces.find(f=> f.u_id == p.third).times++;
		fourthPlaces.find(f=> f.u_id == p.fourth).times++;

		i++;
		tableData.appendChild(createDataRow(i, p, data.users));
		
		if(!commonRows.find(r => r.p.first == p.first && r.p.second == p.second && r.p.third == p.third && r.p.fourth == p.fourth))
			commonRows.push({count:1, p})
		else
			commonRows[commonRows.findIndex(r => r.p.first == p.first && r.p.second == p.second && r.p.third == p.third && r.p.fourth == p.fourth)].count++
	});
	
	let commonPos = { id:0, count:0 };
	
	commonRows.forEach((r,i) => { 
		if(commonPos.count < r.count){
			commonPos.count = r.count 
			commonPos.id = i
		}
	})
	
	tableDataCommon.appendChild(createDataRow(0, commonRows[commonPos.id].p, data.users));

	createChart('chart1', 'Primer', firstPlaces, toNames(data.users), data.colors);
	createChart('chart2', 'Segundo', secondPlaces, toNames(data.users), data.colors);
	createChart('chart3', 'Tercer', thirdPlaces, toNames(data.users), data.colors);
	createChart('chart4', 'Cuarto', fourthPlaces, toNames(data.users), data.colors);
})

function createChart(canvas, place, places, users, colors){
	new Chart(document.getElementById(canvas).getContext('2d'), {
	    type: 'pie',
	    data: {
	    	datasets: [{
				data: toDataset(places),
				backgroundColor: colors,
				label: place + ' lugar'
			}],
			labels: users
	    },
	    options: {
	    	responsive: true
		}
	});
}

function createDataRow(i, play, users){
	let row = document.createElement('tr');
	let pp = document.createElement('td');
	pp.className = "text-center";
	pp.innerHTML = i;
	let date = document.createElement('td');
	date.className = "text-center"
	date.innerHTML = play.date;

	let first = document.createElement('td');
	first.className = "text-center"
	first.innerHTML = users.find(u=>u.id == play.first).name;

	let second = document.createElement('td');
	second.className = "text-center"
	second.innerHTML = users.find(u=>u.id == play.second).name;

	let third = document.createElement('td');
	third.className = "text-center"
	third.innerHTML = users.find(u=>u.id == play.third).name;

	let fourth = document.createElement('td');
	fourth.className = "text-center"
	fourth.innerHTML = users.find(u=>u.id == play.fourth).name;
	row.appendChild(pp);
	row.appendChild(date);
	row.appendChild(first);
	row.appendChild(second);
	row.appendChild(third);
	row.appendChild(fourth);
	return row;
}

function toDataset(places){
	return [
		places[0].times,
		places[1].times,
		places[2].times,
		places[3].times
	];
}

function toNames(users){
	return [
		users[0].name,
		users[1].name,
		users[2].name,
		users[3].name
	];
}
