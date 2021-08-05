'use strict';
const logger = require('../utils/logger');
const stationAnalytics = require('../utils/station-Analytics');
const stationStore = require('../models/station-store');
const uuid = require('uuid');
const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    // const latestReading = stationAnalytics.getLatestReading(station);
    // const minTemp = stationAnalytics.getMinTemp(station);
    //const latestTempFahr = stationAnalytics.getLatestReadingFahr(station);
    const viewData = {
      title: 'Station',  
      station: stationStore.getStation(stationId),
      //latestTempFahr: latestTempFahr,
      minTemp: stationAnalytics.getMinTemp(station),
      maxTemp: stationAnalytics.getMaxTemp(station),
      latestReading: stationAnalytics.getLatestReading(station),
      latestTempFahr: stationAnalytics.getLatestTempFahr(station),
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