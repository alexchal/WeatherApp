export default {
  filters: {
    celsius: value => {
      let convertValue = parseFloat(value);
      return Math.floor(convertValue - 273.15);
    }
  }
};
