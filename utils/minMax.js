/**
 * The StationAnalytics utils class contains the latest Reading calculations for this application.
 *
 * @author Sheila Kirwan
 *
 */




"use strict";

const minMax = {

  
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
    },
 
  };   
      module.exports = minMax;
 
    
      