var requestOne = require('request');
var requestTwo = require('request');
var dailySchedule = 'http://api.sportradar.us/nba-t3/games/2016/11/12/schedule.json?api_key=';
var gameSummary = 'http://api.sportradar.us/nba-t3/games/33dd357a-c118-44b8-b74f-18e3dbd2c8dd/summary.json?api_key=';
//var gameSummary = 'http://api.sportradar.us/nba-t3/games/';
var clutchCity = 'HOU';
var rocketsPlayed = false;
var gameID;

// Call the season or series schedule and find the Game Id for the chosen game
// get all game IDs
// if home or away name is houston rockets
// requestOne(dailySchedule, function (error, response, body) {
// 	console.log('FIRST req');
// 	if(!error && response.statusCode == 200) {
// 		var obj = JSON.parse(body);
// 		for(var i = 0; i < obj.games.length; i++) {
// 			if(obj.games[i].home.alias === clutchCity || obj.games[i].away.alias === clutchCity) {
// 				console.log("Clutch City");
// 				console.log(obj.games[i].id);
// 				gameID = obj.games[i].id;
// 			}
// 			console.log(obj.games[i].home.name);
// 			console.log(obj.games[i].away.name);
// 			console.log('====================');
// 		}

// 	}
// 	//gameSummary += gameID;
// })

// Call the Game Boxscore using the Game Id
requestTwo(gameSummary, function (error, response, body) {
	console.log('SECOND req');
	if(!error && response.statusCode == 200) {
		var obj = JSON.parse(body);
		var harden;
		//console.log(obj.home);
		for(var i = 0; i < obj.home.players.length; i++) {
			if(obj.home.players[i].last_name === 'Harden') {
				harden = obj.home.players[i];
				console.log(obj.home.players[i].last_name);
				console.log("COOKING");
			}
		}
		console.log(harden);
		if( (harden.statistics.points > 10) && (harden.statistics.assists > 10) && (harden.statistics.rebounds > 10) ) {
			console.log("TRIPLE DOUBLE")
		}
	}
})