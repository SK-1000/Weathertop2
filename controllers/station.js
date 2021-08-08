'use strict';
const logger = require('../utils/logger');
const stationAnalytics = require('../utils/station-Analytics');
const conversions = require('../utils/conversions');
const minMax = require('../utils/minMax');
const stationStore = require('../models/station-store');
const uuid = require('uuid');
const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const viewData = {
      title: 'Station',  
      station: stationStore.getStation(stationId),
      minTemp: minMax.getMinTemp(station),
      maxTemp: minMax.getMaxTemp(station),
      latestReading: stationAnalytics.getLatestReading(station),
      latestTempFahr: conversions.getLatestTempFahr(station),
      latestWeatherCode: conversions.getLatestWeatherCode(station),
      latestWindReading: conversions.getLatestWindReading(station),
      latestWindDirection: conversions.getLatestWindDirection(station),
      latestWindChill: conversions.getLatestWindChill(station),
    };
    response.render('station', viewData);
  },
  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect('/station/' + stationId);
  },
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windspeed: request.body.windspeed,
      winddirection: request.body.winddirection,
      pressure: request.body.pressure,
    };
    stationStore.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);
    logger.debug('New Reading = ', newReading);
  },
};
module.exports = station;