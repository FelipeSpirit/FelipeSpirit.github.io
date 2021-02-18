const users = [
	{id:1, name: 'Samheer'},
	{id:2, name: 'Caulimón'},
	{id:3, name: 'Spidey'},
	{id:4, name: 'Spirit'}
];

const plays = [
	{
		date:new Date('2020-10-25'),
		first: 3,
		second: 2,
		third: 1,
		fourth: 4
	},
	{
		date:new Date('2020-10-30'),
		first: 1,
		second: 2,
		third: 3,
		fourth: 4
	},
	{
		date:new Date('2020-10-31'),
		first: 4,
		second: 2,
		third: 1,
		fourth: 3
	},
	{
		date:new Date('2020-12-11'),
		first: 3,
		second: 2,
		third: 1,
		fourth: 3
	},
	{
		date:new Date('2020-12-21'),
		first: 1,
		second: 2,
		third: 3,
		fourth: 4
	},
	{
		date:new Date('2020-12-29'),
		first: 2,
		second: 4,
		third: 1,
		fourth: 3
	},
	{
		date:new Date('2021-01-16'),
		first: 1,
		second: 2,
		third: 3,
		fourth: 4
	},
	{
		date:new Date('2021-01-25'),
		first: 1,
		second: 2,
		third: 4,
		fourth: 3
	},
	{
		date:new Date('2021-01-30'),
		first: 1,
		second: 3,
		third: 4,
		fourth: 2
	},
	{
		date:new Date('2021-02-07'),
		first: 4,
		second: 2,
		third: 1,
		fourth: 3
	},
	{
		date:new Date('2021-02-14'),
		first: 1,
		second: 2,
		third: 4,
		fourth: 3
	}
];

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

const colors = ['#FAE632','#D66F1E','#2AD63E','#3E61D6'];

function toDataset(places){
	return [
		places[0].times,
		places[1].times,
		places[2].times,
		places[3].times
	];
}

function toNames(){
	return [
		users[0].name,
		users[1].name,
		users[2].name,
		users[3].name
	];
}