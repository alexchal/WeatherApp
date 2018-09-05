import * as types from "../mutations-types";
import axios from "axios";
import * as config from "../../config";

export async function getSearchLocation({ commit }, payload) {
  commit(types.SET_LOCATION_PENDING, true);
  // Make a request to the Openweathermap API to get the weather according
  // to the search input value
  try {
    const requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    const { data } = await axios({
      method: "get",
      url: `${requestUrl}${payload}${config.API_KEY}`
    });

    commit(types.SET_LOCATION_PENDING, false);
    commit(types.SET_SEARCH_LOCATION, data);
    commit(types.SET_SELECTED_TYPE, "SEARCH");
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
