import * as types from "./mutations-types";

export const mutations = {
  // it set the loading spinner
  [types.SET_LOCATION_PENDING](state, payload) {
    state.loading = payload;
  },
  // It saves the current location into the state of the app
  [types.SET_CURRENT_LOCATION](state, payload) {
    state.currentLocation = payload;
  },
  // It saves the search location into the state of the app
  [types.SET_SEARCH_LOCATION](state, payload) {
    state.searchLocation = payload;
  },
  //If we have error then show the error on the user
  [types.SET_ERROR](state, payload) {
    state.error = payload;
  },
  //Detect if is selected by search or current location
  [types.SET_SELECTED_TYPE](state, payload) {
    state.selectedType = payload;
  }
};
