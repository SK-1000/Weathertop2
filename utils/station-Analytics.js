/**
 * The StationAnalytics utils class contains the latest Reading calculations for this application.
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

 
  };   
      module.exports = stationAnalytics;
 
    
      

  