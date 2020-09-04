//main.js for learing JS in Day 2
var x = 2;
var userName = 'steven';
var htmlBuilder = '';

teams = [
	'Braves',
	'Nationals',
	'Phillies',
	'Mets',
	'Marlins',
	'Cardinals',
	'Cubs',
	'Brewers',
	'Reds',
	'Pirates',
	'Dogers',
	'Diamondbacks',
	'Giants',
	'Padres',
	'Rockies',
];
wins = [89, 79, 74, 72, 51, 81, 76, 74, 67, 62, 93, 75, 69, 66, 60];
losses = [55, 63, 68, 70, 91, 62, 66, 68, 77, 81, 52, 68, 74, 76, 84];

//console.log(teams);
//console.log(wins);
//console.log(wins[x]);

htmlBuilder = '<h2>Teams:</h2>';
//
//
//
//
//

var highScore = 0;
var winningTeam;

htmlBuilder += '<table><tr>';
htmlBuilder += '<td> Team </td><td> Wins </td><td> Losses </td></tr>';

for (var i = 0; i < teams.length; i++) {
	if (highScore < wins[i]) {
		highScore = wins[i];
		winningTeam = i;
		console.log(winningTeam);
	}
}

for (var i = 0; i < teams.length; i++) {
	//console.log("inside the loop " + i);
	//console.log(teams[i]);

	if (winningTeam == i) {
		htmlBuilder +=
			'<tr><td><strong>' +
			teams[i] +
			'</strong></td><td><strong>' +
			wins[i] +
			'</strong></td><td><strong>' +
			losses[i] +
			'</strong></td></tr>';
	} else {
		htmlBuilder +=
			'<tr><td>' +
			teams[i] +
			'</td><td>' +
			wins[i] +
			'</td><td>' +
			losses[i] +
			'</td></tr>';
	}
}
//console.log(winningTeam);

document.getElementById('teams').innerHTML = htmlBuilder;

/*
 */
