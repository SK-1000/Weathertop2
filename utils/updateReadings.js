const conversions = require("../utils/conversions");
const stationAnalytics = require("../utils/station-Analytics");
const minMax = require("../utils/minMax");
const trends = require("../utils/trends");

("use strict");

const updateReadings = {
  getUpdateReading(station) {
    station.latestReadingTemp = stationAnalytics.getLatestReadingTemp(station);
    station.latestReadingPressure = stationAnalytics.getLatestReadingPressure(
      station
    );
    station.latestWindReading = conversions.getLatestWindReading(station);
    station.latestWindReading = conversions.getLatestWindReading(station);
    station.latestWindDirection = conversions.getLatestWindDirection(station);
    station.latestWindChill = conversions.getLatestWindChill(station);
    station.latestWeatherCode = conversions.getLatestWeatherCode(station);
    station.latestTempFahr = conversions.getLatestTempFahr(station);
    station.minTemp = minMax.getMinTemp(station);
    station.maxTemp = minMax.getMaxTemp(station);
    station.minPressure = minMax.getMinPressure(station);
    station.maxPressure = minMax.getMaxPressure(station);
    station.minWind = minMax.getMinWind(station);
    station.maxWind = minMax.getMaxWind(station);
    station.pinkSun = conversions.getPinkSun(station);
    station.pinkUmbrella = conversions.getPinkUmbrella(station);
    station.redWarn = conversions.getRedWarn(station);
    //station.tempTrend = trends.getThreelatestTrends(station);
  }
};
module.exports = updateReadings;
