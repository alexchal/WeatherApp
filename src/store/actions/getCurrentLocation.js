import * as types from "../mutations-types";
import axios from "axios";
import * as config from "../../config";

export function getCurrentLocation({ commit }) {
  commit(types.SET_LOCATION_PENDING, true);

  // Initialize the latitude and longitude of the user
  const coords = {
    lat: "",
    lon: ""
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  async function showPosition(position) {
    coords.lat = position.coords.latitude;
    coords.lon = position.coords.longitude;

    // Make a request to the Openweathermap API to get the weather according
    // to latitude and longitude of the user location
    try {
      const { data } = await axios({
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${
          coords.lat
        }&lon=${coords.lon}${config.API_KEY}`
      });

      commit(types.SET_LOCATION_PENDING, false);
      commit(types.SET_CURRENT_LOCATION, data);
      commit(types.SET_SELECTED_TYPE, "CURRENT");
      commit(types.SET_ERROR, {
        status: false,
        message: " "
      });
    } catch (e) {
      // iF there is an error show error on the UI
      commit(types.SET_ERROR, {
        status: true,
        message: e.response.data.message
      });
      commit(types.SET_LOCATION_PENDING, false);
    }
  }
}
