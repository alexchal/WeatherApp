# WeatherApp

The project has been setup using the Vue Cli 3.0.1.

The technologies that are being used are Vue, Vuex (state management system) and SCSS.

The SCSC (css) is based on BEM methodology.

The user scenarios of the web app are listed below: 

  1) User can search by City on the input field by clicking enter or the search button.
  2) User can get his/her current location (latitude and longitude) by clicking the location button (using Geolocation).
  3) User can type a City that is not exist (show the error on the UI).
  4) User can type an empty search (show the error on the UI).
  5) Toggle the settings for "nice weather" only if there is data from the API, If not, shouldnt be visible the settings.


Additional: 

The temprature response from the API is not converted to celsius, so I used Filters to convert the Kevin temprature to Celsius temprature.
Tested on windows chrome browser.

#API calls structure 

The API calls are done via Vuex store instead of inside in the local component. 
I decided with that way, because its a better structure and I would like to show you my skills about Vuex.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
