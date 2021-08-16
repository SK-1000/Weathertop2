'use strict';
const logger = require('../utils/logger');
const stationAnalytics = require('../utils/station-Analytics');
const conversions = require('../utils/conversions');
const minMax = require('../utils/minMax');
const stationStore = require('../models/station-store');
const trends = require('../utils/trends');
const uuid = require('uuid');
const dashboard = require ('./dashboard.js');





const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const viewData = {
      title: 'Station',  
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
      latitude: station.latitude,
      longitude: station.longitude,
      
      //tempIcon: trends.getTempIcon(station),
      
     
      
      
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
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      timestamp: Date(),
      
    };
    stationStore.addReading(stationId, newReading);
    
    response.redirect('/station/' + stationId);
    logger.debug('New Reading = ', newReading);
  },
  
    addAutoReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
      
   
      
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      timestamp: Date(),
      
    };
    stationStore.addAutoReading(stationId, newReading);
    
    response.redirect('/station/' + stationId);
    logger.debug('New Reading = ', newReading);
  },
  
  
};
module.exports = station;