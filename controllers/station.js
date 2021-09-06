"use strict";
const logger = require("../utils/logger");
const stationAnalytics = require("../utils/station-Analytics");
const conversions = require("../utils/conversions");
const minMax = require("../utils/minMax");
const stationStore = require("../models/station-store");
const trends = require("../utils/trends");
const uuid = require("uuid");
const dashboard = require("./dashboard.js");
const axios = require("axios");

const oneCallRequest = `https://api.openweathermap.org/data/2.5/onecall?lat=52.160858&lon=-7.152420&units=metric&appid=c09a714e06b0144a9c24d78ca2a12cd1`;

const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const viewData = {
      title: "Station",
      station: stationStore.getStation(stationId),
      minTemp: minMax.getMinTemp(station),
      maxTemp: minMax.getMaxTemp(station),
      minWind: minMax.getMinWind(station),
      maxWind: minMax.getMaxWind(station),
      minPressure: minMax.getMinPressure(station),
      maxPressure: minMax.getMaxPressure(station),
      latestReadingTemp: stationAnalytics.getLatestReadingTemp(station),
      latestReadingPressure: stationAnalytics.getLatestReadingPressure(station),
      latestTempFahr: conversions.getLatestTempFahr(station),
      latestWeatherCode: conversions.getLatestWeatherCode(station),
      latestWindReading: conversions.getLatestWindReading(station),
      latestWindDirection: conversions.getLatestWindDirection(station),
      latestWindChill: conversions.getLatestWindChill(station),
      pinkSun: conversions.getPinkSun(station),
      pinkUmbrella: conversions.getPinkUmbrella(station),
      redWarn: conversions.getRedWarn(station),
      //tempTrend: trends.getThreelatestTrends(station),
      latitude: station.latitude,
      longitude: station.longitude
    };
    response.render("station", viewData);
  },
  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      timestamp: Date()
    };
    stationStore.addReading(stationId, newReading);

    response.redirect("/station/" + stationId);
    logger.debug("New Reading = ", newReading);
  },

  async autoReading(request, response) {
    try {
      const stationId = request.params.id;
      const station = stationStore.getStation(stationId);
      let report = {};
      const lat = station.latitude;
      const lng = station.longitude;
      const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=c09a714e06b0144a9c24d78ca2a12cd1`;
      const result = await axios.get(requestUrl);
      if (result.status == 200) {
        const reading = result.data.current;

        report.code = reading.weather[0].id;
        report.temp = reading.temp;
        report.windSpeed = reading.wind_speed;
        report.pressure = reading.pressure;
        report.windDirection = reading.wind_deg;
        report.timestamp = Date();
      }
      stationStore.addAutoReading(stationId, report);
      response.redirect("/station/" + stationId);
      console.log(report);
    } catch (error) {
      console.error(error);
    }
  }
};
module.exports = station;
