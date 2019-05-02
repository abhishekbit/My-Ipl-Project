const getNoOfMatchesPlayed = (matches) => {
    //write your code here
    return matches.reduce((acc, match) => {
        if (acc[match.season]) {
            acc[match.season]++
        } else {
            acc[match.season] = 1
        }
        return acc;
    }, {})
}

const getNoOfMatchesWonPerTeamPerYear = (matches) => {
    var wins = [...new Set(matches.map(x => x.winner))]
    var year = [...new Set(matches.map(x => x.season))]
    var res = {}
    for (var i in wins) {
        if (wins[i] != '') {
            var obj = {}
            for (var j in year) {
                var c = 0;
                for (var k in matches) {
                    if (year[j] == matches[k].season && wins[i] == matches[k].winner) {
                        obj[year[j]] = c += 1
                    }
                }
            }
            res[wins[i]] = obj
        }
    }
    //console.log("rs=",(res))
    return res;
}

const getExtraRunsPerTeamForYear = (matches, del) => {
    var bowltm = [...new Set(del.map(x => x.bowling_team))]
    var yr = 2016
    const year = matches.filter(v => v.season == yr)
    var res = {}
    for (var k in bowltm) {
        var c = 0;
        for (var i in year) {
            for (var j in del) {
                if (bowltm[k] == del[j].bowling_team && parseInt(del[j].extra_runs) != 0 && year[i].eid === del[j].match_id) {
                    res[bowltm[k]] = c += parseInt(del[j].extra_runs);
                }
            }
        }
    }
    // console.log("rs=",(res))
    // console.log("q=",res)
    return res
}

const getEconomicalBowlersForYear = (matches, del) => {
    var yr = 2015
    const year = matches.filter(v => v.season == yr)
    var yearid = year.map(x => x.eid)
    var matchid = []
    for (var i in year) {
        for (var j in del) {
            if (year[i].eid == del[j].match_id) {
                matchid.push(del[j])
            }
        }
    }
    var bowlrnm = [...new Set(matchid.map(x => x.bowler))]
    var obj = {}
    for (var k in bowlrnm) {
        var tr = 0
        var tb = 0
        var flag = 0
        for (var i in yearid) {
            for (var j in matchid) {
                if (yearid[i] == matchid[j].match_id && bowlrnm[k] == matchid[j].bowler) {
                    tr += parseInt(matchid[j].total_runs)
                    tb += 1
                    flag = 1
                } else {
                    flag = 0
                }
                if (flag == 1) {
                    obj[bowlrnm[k]] = (tr / tb) * 6
                }
            }
        }
    }
    var kys = Object.keys(obj).sort(function (a, b) {
        return obj[a] - obj[b]
    })
    var res = {}
    for (var i = 0; i < 10; i++) {
        res[kys[i]] = obj[kys[i]]
    }
    //  console.log("res=",res)
    return res;
}

module.exports.getNoOfMatchesPlayed = getNoOfMatchesPlayed
module.exports.getNoOfMatchesWonPerTeamPerYear = getNoOfMatchesWonPerTeamPerYear
module.exports.getExtraRunsPerTeamForYear = getExtraRunsPerTeamForYear
module.exports.getEconomicalBowlersForYear = getEconomicalBowlersForYear
