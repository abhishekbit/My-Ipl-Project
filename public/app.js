fetch('./data.json').then(response => response.json()).then(data => {
    console.log(data, 'From the fetch call')
    chartForMatchesPerSeason(data.MatchesPlayed);
    formatdataForBarChart(data["MatchesWonPerTeamPerYear"]);
    chartForExtraRunsPerTeam(data["ExtraRunsPerTeam"]);
    chartForEconomicalBowlers(data["EconomicalBowler"]);

})

function formatdataForBarChart(ob2) {
//     //write your code to convert jsondata for the Bar chart format.
    var bara = []
    for (var i in ob2) {
        var win = {
            2008: 0,
            2009: 0,
            2010: 0,
            2011: 0,
            2012: 0,
            2013: 0,
            2014: 0,
            2015: 0,
            2016: 0,
            2017: 0,
        }
        var tmp = {}
        tmp.name = i
        var ar2 = Object.keys(ob2[i])
        for (var j in ar2) {
            win[ar2[j]] = ob2[i][ar2[j]]
            tmp.data = Object.values(win)
        }
        bara.push(tmp)
    }
    barChartForNoOfWins(bara);
}

function chartForMatchesPerSeason(matches) {
//complete this function to create visualization for no.ofmathches per season.
    const years = Object.keys(matches)

    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },

        title: {
            text: 'Matches Played per Season'
        },
        subtitle: {
            text: 'Source: ipl.com'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Matches'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Matches Played',
            data: Object.values(matches)
        }]
    });
}

function barChartForNoOfWins(matches) {
    Highcharts.chart('container-1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Matches Won per Team per Season'
        },
        subtitle: {
            text: 'Source: ipl.com'
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Matches Won',
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: matches

    });
}


function chartForExtraRunsPerTeam(matches) {
    //complete this function to create visualization for extraruns per team for year 2016 .
    const team1 = Object.keys(matches)
    Highcharts.chart('container-2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Extra Runs per Team for 2016'
        },
        subtitle: {
            text: 'Source: ipl.com'
        },
        xAxis: {
            categories: team1,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Runs'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Extra Runs',
            data: Object.values(matches)
        }]
    });
}


function chartForEconomicalBowlers(matches) {
    //  //complete this function to create visualization for top ten economical bowler for year 2015 .
    const bowlers = Object.keys(matches)

    Highcharts.chart('container-3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Economical Bowlers for 2015'
        },
        subtitle: {
            text: 'Source: ipl.com'
        },
        xAxis: {
            categories: bowlers,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Economical Bowlers',
            data: Object.values(matches)
        }]
    });
}

