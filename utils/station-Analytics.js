/**
 * The StationAnalytics utils class contains the majority of the calculations for this application.
 *
 * @author Sheila Kirwan
 *
 */




"use strict";

const stationAnalytics = {


  
  getLatestReading(station) {
    let latestReading = null;
    if (station.readings.length > 0) {
      latestReading = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        latestReading = station.readings[i];
      }
    }
    return latestReading;
  },
getLatestTempFahr(station) {
    let latestReadingTempFahr = null;
    if (station.readings.length > 0) {
      latestReadingTempFahr = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        latestReadingTempFahr = station.readings[i].temp * 9 / 5 + 32;
      }
    }
    return latestReadingTempFahr ;
  },

  
  getMinTemp(station) {
    var minTempReading = station.readings[0].temp;
   for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].temp)
      if (station.readings[i].temp <= minTempReading) {
        minTempReading = station.readings[i].temp;
      }
    }
     return minTempReading;
    },
  
  getMaxTemp(station) {
    var maxTempReading = station.readings[0].temp;
   for (var i = 0; i < station.readings.length; i++) {
      console.log(station.readings[i].temp)
      if (station.readings[i].temp >= maxTempReading) {
        maxTempReading = station.readings[i].temp;
      }
    }
     return maxTempReading;
    }
  
};

module.exports = stationAnalytics;

  