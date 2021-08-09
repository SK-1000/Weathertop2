"use strict";

const logger = require("../utils/logger");
const stationStore = require('../models/station-store');
const conversions = require('../utils/conversions');
const minMax = require('../utils/minMax');
const trends = require('../utils/trends');
const uuid = require('uuid');
const accounts = require ('./accounts.js');
const station = require ('./station.js');
const stationAnalytics = require('../utils/station-Analytics');
const updateReadings = require('../utils/updateReadings');

const dashboard = {
   index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    const stations = stationStore.getAllStations();
     
     for (let i=0; i<stations.length; i++) {
      let station = stations[i];
      if (station.readings.length > 0) {
        updateReadings.getUpdateReading(station);
        
      }
    }
    
   
    const viewData = {
      title: 'Station Dashboard',
      stations: stationStore.getUserStations(loggedInUser.id),
      
    };
    logger.info('about to render', stationStore.getAllStations());
    response.render('dashboard', viewData);
  },
   deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationStore.removeStation(stationId);
    response.redirect('/dashboard');
  },
  
    addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      stationName: request.body.stationName,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      
      readings: [],
    };
    logger.debug('Creating a new Station', newStation);
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
