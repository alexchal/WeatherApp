<template>
  <transition name="fadeInUp">
    <div class="weather__settings">
      <div class="weather__settings--buttons">
      <Dropdown :on-click="changeTemprature" :items="temprature" :text="this.textTemprature"/>
      <Dropdown :on-click="changePressure" :items="pressure" :text="this.textPressure"/>
      <Dropdown :on-click="changeHumidity" :items="humidity" :text="this.textHumidity"/>
      <Dropdown :on-click="changeWindSpeed" :items="windspeed" :text="this.textWindSpeed"/>
      </div>
      <div class="weather__settings--selected">
        <p>Temprature: <strong><span>{{activeTemprature}}</span></strong></p>
        <p>Pressure: <strong><span>{{activePressure}}</span></strong></p>
        <p>Humidity: <strong><span>{{activeHumidity}}</span></strong></p>
        <p>Wind speed: <strong><span>{{activeWindSpeed}}</span></strong></p>
      </div>
    </div>
  </transition>
</template>

<script>
import Dropdown from "./atoms/Dropdown";

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      textTemprature: "Temprature",
      textPressure: "Pressure",
      textHumidity: "Humidity",
      textWindSpeed: "Wind Speed",
      activeTemprature: "<=0",
      activePressure: "<= 500",
      activeHumidity: "<= 10%",
      activeWindSpeed: "<= 2mph",
      temprature: ["<=0", "0 <= x >= 20", "20 <= x >= 30", ">= 30"],
      pressure: ["<= 500", "500 <= x >= 1000", "1000 <= x >= 1500", ">= 1500"],
      humidity: ["<= 10%", "20% <= x >= 50%", "50% <= x >= 70%", ">= 70%"],
      windspeed: [
        "<= 2mph",
        "2mph <= x >= 5mph",
        "5mph <= x >= 7mph",
        ">= 7mph"
      ]
    };
  },
  methods: {
    changeTemprature: function(temprature) {
      this.activeTemprature = temprature;
    },
    changePressure: function(pressure) {
      this.activePressure = pressure;
    },
    changeHumidity: function(humidity) {
      this.activeHumidity = humidity;
    },
    changeWindSpeed: function(windspeed) {
      this.activeWindSpeed = windspeed;
    }
  }
};
</script>

<style lang="scss" scoped>
.weather__settings {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  &--buttons,
  &--selected {
    display: flex;
    justify-content: space-between;
  }
}

.fadeInUp-enter-active,
.fadeInUp-leave-active {
  transition: all 0.3s;
  opacity: 1;
  transform: translateY(0);
}
.fadeInUp-enter,
.fadeInUp-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
