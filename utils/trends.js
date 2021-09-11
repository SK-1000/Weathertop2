/**
 * The StationAnalytics utils class contains the latest trends for this application.
 *
 * @author Sheila Kirwan
 *
 */

("use strict");
const logger = require("../utils/logger");
const Handlebars = require("express-handlebars");

const trends = {
  getThreelatestTrends(station) {

    let icon = null;

    let status = 0;

    if (station.readings.length > 2) {
      let latestReading = parseInt(station.readings[station.readings.length - 1].temp);
      let secondLatestReading = parseInt(station.readings[station.readings.length - 2].temp);
      let thirdLatestReading = parseInt(station.readings[station.readings.length - 3].temp);

      if (
        secondLatestReading >= thirdLatestReading &&
        latestReading >= secondLatestReading
      ) {
        status = 1;
      } else if (
        secondLatestReading <= thirdLatestReading &&
        latestReading <= secondLatestReading
      ) {
        status = 2;
      }

      switch (status) {
        case 1:
          icon = "big blue arrow alternate circle up icon";
          break;
        case 2:
          icon = "big blue arrow alternate circle down icon";
          break;
        case 0:
          icon = "big blue arrows alternate horizontal icon";
          break;
      }
    }
          return icon;
    
  },
  
  
    getThreelatestTrendsWind(station) {

    let icon = null;

    let status = 0;

    if (station.readings.length > 2) {
      let latestReading = parseInt(station.readings[station.readings.length - 1].windSpeed);
      let secondLatestReading = parseInt(station.readings[station.readings.length - 2].windSpeed);
      let thirdLatestReading = parseInt(station.readings[station.readings.length - 3].windSpeed);

      if (
        secondLatestReading >= thirdLatestReading &&
        latestReading >= secondLatestReading
      ) {
        status = 1;
      } else if (
        secondLatestReading <= thirdLatestReading &&
        latestReading <= secondLatestReading
      ) {
        status = 2;
      }

      switch (status) {
        case 1:
          icon = "big blue arrow alternate circle up icon";
          break;
        case 2:
          icon = "big blue arrow alternate circle down icon";
          break;
        case 0:
          icon = "big blue arrows alternate horizontal icon";
          break;
      }
    }
          return icon;
    
  },
  
  
    getThreelatestTrendsPressure(station) {

    let icon = null;

    let status = 0;

    if (station.readings.length > 2) {
      let latestReading = parseInt(station.readings[station.readings.length - 1].pressure);
      let secondLatestReading = parseInt(station.readings[station.readings.length - 2].pressure);
      let thirdLatestReading = parseInt(station.readings[station.readings.length - 3].pressure);

      if (
        secondLatestReading >= thirdLatestReading &&
        latestReading >= secondLatestReading
      ) {
        status = 1;
      } else if (
        secondLatestReading <= thirdLatestReading &&
        latestReading <= secondLatestReading
      ) {
        status = 2;
      }

      switch (status) {
        case 1:
          icon = "big blue arrow alternate circle up icon";
          break;
        case 2:
          icon = "big blue arrow alternate circle down icon";
          break;
        case 0:
          icon = "big blue arrows alternate horizontal icon";
          break;
      }
    }
          return icon;
    
  }
  
  
  
  
};
module.exports = trends;
