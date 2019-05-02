var fs=require('fs')
var functions = require('./ipl')
var csvToJson=require('./csvtojson')
var matchesData = csvToJson('./data/matches.csv')
var deliveryData = csvToJson('./data/deliveries.csv')
var getNoOfMatchesPlayed = functions.getNoOfMatchesPlayed
var getNoOfMatchesWonPerTeamPerYear = functions.getNoOfMatchesWonPerTeamPerYear
var getExtraRunsPerTeamForYear = functions.getExtraRunsPerTeamForYear
var getEconomicalBowlersForYear = functions.getEconomicalBowlersForYear

//console.log(deliveryData)
//console.log(matchesData)
let jsonData={};
jsonData["MatchesPlayed"]=getNoOfMatchesPlayed(matchesData);
jsonData["MatchesWonPerTeamPerYear"]=getNoOfMatchesWonPerTeamPerYear(matchesData);
jsonData["ExtraRunsPerTeam"]=getExtraRunsPerTeamForYear(matchesData,deliveryData);
jsonData["EconomicalBowler"]=getEconomicalBowlersForYear(matchesData,deliveryData);


fs.writeFile('./public/data.json',
JSON.stringify(jsonData, null, 4),
err => {
    if (err) {
        console.log(err);
    }
}
);