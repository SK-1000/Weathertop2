# weather-top-project2

The concept of this weather top2 project is as follows:

The Owners of a consumer level weather station
purchase and install a weather station kit.
- Periodically members submit weather reports
  from their station to a website, capturing
  readings from the station at a specific time
- The application displays weather analytics for
  the station
- The owner may own multiple stations


I have completed the majority of sections up to Release 3 and I have successfully made some progress on the Auto read functionality of Release 4.   I was not able to assign as high a priority 
on this project during the summer holidays as I have to my previous projects but enjoyed figuring it out and would be keen to see a completed solution afterwards so I can see how to complete certain aspects such as conditional statements in 
handlebars and some of the interesting features that I didnt get to in release 4.

Description:

The application that I have created will all a user to sign up to the weather station application by entering their first name, surname email address and a password. This information is then saved
in the user_store.json file.

When this customer selects to log in to the application, their email and password will be requested. When this is enterd the code reachs in to the user-store to autenticate the user and once this occurs 
the users is displayed the dashboard page. They are then prompted to add a weather station name, including latitude and longitude. Longitude and latitude validation is included in handlebars to ensure
these values are within the correct parameters (lat min -90, max 90, long min -180 max 180)

This data is stored in the station-store.json file.

The dashboard page is rendered again, this time showing the station which has been added an a station summary where any station reading data will be displayed. Added stations are displayed
in alphbetical order.

The user also has the option at this point to delete the station which has been created which will remove from .json file or to click on the folder icon. This will render the station page.

The user can now enter a readings for this station. Readings can be entered manually or automatically generated from the openweathermap api.

The addition of readings will update the station summary showing the follwing 

 - a card which displays the latitude and longitude of the station
 - a card showing the latest weather code (when a code is entered manually this works but doesnt if auto generateed as the codes don't match the codes provided originally in the spec. Also, I notied the latest weather code shows on the stationsummary in the station page but not on the dashboard page.)
 - a card showing the temperature celcius fahrenheit, min and max. (I spent a lot of time on the trends but I didnt succeed so far. The code is in the trends.js in utils. My issue always was around 
 the if statement in handlebars and not being able to do and "if equals to" type condition. It as the same for all readings below)
 - a card showing latest windspeed, wind direction,feels like, max wind speed, min wind speed.  
 - a card to do latest and min and max pressure
 
 Along with each reading displayed in the list stations view the latest time is generated and also displayed.
 
 I have noticed that once a reading is entered, it is displayed on the station summary on the station view but not the dashboard view.
 
Manually entered readings can also be deleted. Note. The automated readings cannot be deleted and I wasnt able to see why.

I completed this in glitch and imported to github. 

I used mainly the course lectures and labs but used some references online when researching the connection to the api and the trying to figure out how to use helper methods etc.






