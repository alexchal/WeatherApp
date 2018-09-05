export const getters = {
  getLocationResults(state) {
    return state.currentLocation;
  },
  getSearchResults(state) {
    return state.searchLocation;
  },
  loading(state) {
    return state.loading;
  },
  selectedType(state) {
    return state.selectedType;
  },
  error(state) {
    return state.error;
  }
};
