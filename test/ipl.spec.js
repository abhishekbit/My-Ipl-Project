/* global describe :true */
/* eslint no-undef: "error" */
/* global test :true */
/* global expect :true */

var functions = require('../src/ipl')
var csvToJson=require('../src/csvtojson')
var matchesData = csvToJson('./data/matches.csv')
var deliveryData = csvToJson('./data/deliveries.csv')
var getNoOfMatchesPlayed = functions.getNoOfMatchesPlayed
var getNoOfMatchesWonPerTeamPerYear = functions.getNoOfMatchesWonPerTeamPerYear
var getExtraRunsPerTeamForYear = functions.getExtraRunsPerTeamForYear
var getEconomicalBowlersForYear = functions.getEconomicalBowlersForYear

describe('IPL module', () => {
  describe('No. of matches played per team for all years, getNoOfMatchesPlayed', () => {
    const expectedResult = { '2008': 58, '2009': 57, '2010': 60, '2011': 73, '2012': 74, '2013': 76, '2014': 60, '2015': 59, '2016': 60, '2017': 59 }
    test('should exist', () => {                                                                                   
      expect(getNoOfMatchesPlayed).toBeDefined()
    })
    test('should return an object', () => {
      expect(getNoOfMatchesPlayed(matchesData)).toBeDefined()
      expect(typeof getNoOfMatchesPlayed(matchesData)).toEqual('object')
      expect(getNoOfMatchesPlayed(matchesData)).toEqual(expectedResult)
    })
  })
  describe('No. of matches won per team per year, getNoOfMatchesWonPerTeamPerYear', () => {
    const expectedResult1 = {
      'Sunrisers Hyderabad': {
        '2013': 10,
        '2014': 6,
        '2015': 7,
        '2016': 11,
        '2017': 8
      },
      'Rising Pune Supergiant': {
        '2017': 10
      },
      'Kolkata Knight Riders': {
        '2008': 6,
        '2009': 3,
        '2010': 7,
        '2011': 8,
        '2012': 12,
        '2013': 6,
        '2014': 11,
        '2015': 7,
        '2016': 8,
        '2017': 9
      },
      'Kings XI Punjab': {
        '2008': 10,
        '2009': 7,
        '2010': 4,
        '2011': 7,
        '2012': 8,
        '2013': 8,
        '2014': 12,
        '2015': 3,
        '2016': 4,
        '2017': 7
      },
      'Royal Challengers Bangalore': {
        '2008': 4,
        '2009': 9,
        '2010': 8,
        '2011': 10,
        '2012': 8,
        '2013': 9,
        '2014': 5,
        '2015': 8,
        '2016': 9,
        '2017': 3
      },
      'Mumbai Indians': {
        '2008': 7,
        '2009': 5,
        '2010': 11,
        '2011': 10,
        '2012': 10,
        '2013': 13,
        '2014': 7,
        '2015': 10,
        '2016': 7,
        '2017': 12
      },
      'Delhi Daredevils': {
        '2008': 7,
        '2009': 10,
        '2010': 7,
        '2011': 4,
        '2012': 11,
        '2013': 3,
        '2014': 2,
        '2015': 5,
        '2016': 7,
        '2017': 6
      },
      'Gujarat Lions': {
        '2016': 9,
        '2017': 4
      },
      'Chennai Super Kings': {
        '2008': 9,
        '2009': 8,
        '2010': 9,
        '2011': 11,
        '2012': 10,
        '2013': 12,
        '2014': 10,
        '2015': 10
      },
      'Rajasthan Royals': {
        '2008': 13,
        '2009': 6,
        '2010': 6,
        '2011': 6,
        '2012': 7,
        '2013': 11,
        '2014': 7,
        '2015': 7
      },
      'Deccan Chargers': {
        '2008': 2,
        '2009': 9,
        '2010': 8,
        '2011': 6,
        '2012': 4
      },
      'Pune Warriors': {
        '2011': 4,
        '2012': 4,
        '2013': 4
      },
      'Kochi Tuskers Kerala': {
        '2011': 6
      },
      'Rising Pune Supergiants': {
        '2016': 5
      }
    }
    test('should exist', () => {
      expect(getNoOfMatchesWonPerTeamPerYear).toBeDefined()
    })
    test('should return an object', () => {
      expect(getNoOfMatchesWonPerTeamPerYear(matchesData)).toBeDefined()
      expect(typeof getNoOfMatchesWonPerTeamPerYear(matchesData)).toEqual('object')
      expect(getNoOfMatchesWonPerTeamPerYear(matchesData)).toEqual(expectedResult1)
    })
  })
  describe('Extra runs conceeded per team for year, getExtraRunsPerTeamForYear', () => {
    const expectedResult2 = {
      'Rising Pune Supergiants': 108,
      'Mumbai Indians': 102,
      'Kolkata Knight Riders': 122,
      'Delhi Daredevils': 106,
      'Gujarat Lions': 98,
      'Kings XI Punjab': 100,
      'Sunrisers Hyderabad': 107,
      'Royal Challengers Bangalore': 156 }
    test('should exist', () => {
      expect(getExtraRunsPerTeamForYear).toBeDefined()
    })
    test('should return an object', () => {
      expect(getExtraRunsPerTeamForYear(matchesData,deliveryData)).toBeDefined()
      expect(typeof getExtraRunsPerTeamForYear(matchesData,deliveryData)).toEqual('object')
      expect(getExtraRunsPerTeamForYear(matchesData,deliveryData)).toEqual(expectedResult2)
    })
  })
  describe('Economical bowlers for year, getEconomicalBowlersForYear', () => {
    const expectedResult3 = { 'RN ten Doeschate': 3.4285714285714284,
      'J Yadav': 4.142857142857142,
      'V Kohli': 5.454545454545454,
      'R Ashwin': 5.7250000000000005,
      'S Nadeem': 5.863636363636363,
      'Z Khan': 6.15483870967742,
      'Parvez Rasool': 6.200000000000001,
      'MC Henriques': 6.267515923566879,
      'MA Starc': 6.75,
      'M de Lange': 6.9230769230769225 }
    test('should exist', () => {
      expect(getEconomicalBowlersForYear).toBeDefined()
    })
    test('should return an object', () => {
      expect(getEconomicalBowlersForYear(matchesData,deliveryData)).toBeDefined()
      expect(typeof getEconomicalBowlersForYear(matchesData,deliveryData)).toEqual('object')
      expect(getEconomicalBowlersForYear(matchesData,deliveryData)).toEqual(expectedResult3)
    })
  })
})
