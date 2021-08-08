"use strict";

const conversions = {
  

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
  
   //NOT WORKING FOR SOME REASON
  getLatestWeatherCode(station) {
    let weatherCode = null;
    let latestWeatherCode = 0;
    if (station.readings.length > 0) {
      latestWeatherCode = station.readings[0];
        for (let i = 1; i < station.readings.length; i++) {
        latestWeatherCode = station.readings[i];
      }

    
    switch (latestWeatherCode.code) {
  case 100:
    weatherCode = "clear";
    break;
  case 200:
    weatherCode = "partial Clouds";
    break;
  case 300:
     weatherCode = "cloudy";
    break;
  case 400:
    weatherCode = "light showers";
    break;
  case 500:
    weatherCode = "heavy showers";
    break;
  case 600:
    weatherCode = "rain";
    break;
  case 700:
    weatherCode = "snow";
    break;
      default:
       weatherCode = "Please enter correct code";
    }     
  
    }
  return weatherCode; 
  
},

  
  
  //latest wind beaufort
  getLatestWindReading(station) {
    let beaufort = "No Wind Info Available";
    let latestWindReading = null;
    if (station.readings.length > 0) {
      latestWindReading = station.readings[0];
        for (let i = 1; i < station.readings.length; i++) {
        latestWindReading = station.readings[i];
      }
      
       if(latestWindReading.windspeed <= 1 ) {
         beaufort = "0 bft";
       } else if (latestWindReading.windspeed > 1 && latestWindReading.windspeed <= 5) {
         beaufort = "1 bft";
       } else if (latestWindReading.windspeed >= 6 && latestWindReading.windspeed <= 11) {
         beaufort = "2 bft";
      } else if (latestWindReading.windspeed >= 12 && latestWindReading.windspeed <= 19) {
         beaufort = "3 bft";
       } else if (latestWindReading.windspeed >= 20 && latestWindReading.windspeed <= 28) {
         beaufort = "4 bft";
       } else if (latestWindReading.windspeed >= 29 && latestWindReading.windspeed <= 38) {
         beaufort = "5 bft";
       } else if (latestWindReading.windspeed >= 39 && latestWindReading.windspeed <= 49) {
         beaufort = "6 bft";
       } else if (latestWindReading.windspeed >= 50 && latestWindReading.windspeed <= 11) {
         beaufort = "7 bft";
       } else if (latestWindReading.windspeed >= 62 && latestWindReading.windspeed <= 74) {
         beaufort = "8 bft";
       } else if (latestWindReading.windspeed >= 75 && latestWindReading.windspeed <= 88) {
         beaufort = "9 bft";
       } else if (latestWindReading.windspeed >= 89 && latestWindReading.windspeed <= 102) {
         beaufort = "10 bft";
       } else if (latestWindReading.windspeed >= 103 && latestWindReading.windspeed <= 117) {
         beaufort = "11 bft";
       }
      return beaufort;
    }
  },
  
  
  getLatestWindDirection(station) {
    let convertToDirection = "invalid Direction";
    let latestWindDirection = null;
    if (station.readings.length > 0) {
      latestWindDirection = station.readings[0];
        for (let i = 1; i < station.readings.length; i++) {
        latestWindDirection = station.readings[i];
      }
      
if ((latestWindDirection.winddirection >= 348.75) && (latestWindDirection.winddirection <= 360) || (latestWindDirection.winddirection >= 0) &&
      (latestWindDirection.winddirection <= 11.25)) {
    convertToDirection = "North";
  } else if ((latestWindDirection.winddirection >= 11.25) && (latestWindDirection.winddirection <= 33.75)) {
    convertToDirection = "North North East";
  } else if ((latestWindDirection.winddirection >= 33.75) && (latestWindDirection.winddirection <= 56.25)) {
    convertToDirection = "North East";
  } else if ((latestWindDirection.winddirection >= 56.25) && (latestWindDirection.winddirection <= 78.75)) {
    convertToDirection = "East North East";
  } else if ((latestWindDirection.winddirection >= 78.25) && (latestWindDirection.winddirection <= 101.25)) {
    convertToDirection = "East";
  } else if ((latestWindDirection.winddirection >= 101.25) && (latestWindDirection.winddirection <= 123.75)) {
    convertToDirection = "East South East";
  } else if ((latestWindDirection.winddirection >= 123.75) && (latestWindDirection.winddirection <= 146.25)) {
    convertToDirection = "South East";
  } else if ((latestWindDirection.winddirection >= 146.25) && (latestWindDirection.winddirection <= 168.75)) {
    convertToDirection = "South South East";
  } else if ((latestWindDirection.winddirection >= 168.75) && (latestWindDirection.winddirection <= 191.25)) {
    convertToDirection = "South";
  } else if ((latestWindDirection.winddirection >= 191.25) && (latestWindDirection.winddirection <= 213.75)) {
    convertToDirection = "South South West";
  } else if ((latestWindDirection.winddirection >= 213.75) && (latestWindDirection.winddirection <= 236.25)) {
    convertToDirection = "South West";
  } else if ((latestWindDirection.winddirection >= 236.25) && (latestWindDirection.winddirection <= 258.75)) {
    convertToDirection = "West South West";
  } else if ((latestWindDirection.winddirection >= 258.75) && (latestWindDirection.winddirection <= 281.25)) {
    convertToDirection = "West";
  } else if ((latestWindDirection.winddirection >= 281.25) && (latestWindDirection.winddirection <= 303.75)) {
    convertToDirection = "West North West";
  } else if ((latestWindDirection.winddirection >= 303.75) && (latestWindDirection.winddirection <= 326.25)) {
    convertToDirection = "North West";
  } else if ((latestWindDirection.winddirection >= 236.25) && (latestWindDirection.winddirection <= 348.75)) {
    convertToDirection = "North North West";
  }

}
return convertToDirection;

  },
  
  
  getLatestWindChill(station) {
    let latestwindChillReading = null;
    let latestWindChill= 0;
    if (station.readings.length > 0) {
      latestwindChillReading = station.readings[0];
        for (let i = 1; i < station.readings.length; i++) {
        latestwindChillReading = station.readings[i];
          latestWindChill = Math.round(13.12 + 0.6215 * latestwindChillReading.temp - 11.37 * Math.pow(latestwindChillReading.windspeed, 0.16) + 0.3965 * latestwindChillReading.temp * Math.pow(latestwindChillReading.windspeed, 0.16));
      }
    }
     return latestWindChill;
    }

  
  
  
  
  
  
};
module.exports = conversions;