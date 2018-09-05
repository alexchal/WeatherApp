<template>
  <div class="board" :class="{ active: isVisible}">
    <h1 class="board__heading">{{boardTittle}}</h1>
    <Search />
    <WeatherInformation />
    <div class="board__footer">
      <button @click="showSettings()" class="btn__nice-day" :class="{ disable: error.status }">
        What is a nice day for you?
      </button>
      <WeatherSettings v-show="showWeatherSettings && !error.status && !loading"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Search from "./Search";
import WeatherInformation from "./WeatherInformation";
import WeatherSettings from "./WeatherSettings";

export default {
  components: {
    Search,
    WeatherInformation,
    WeatherSettings
  },
  computed: {
    ...mapGetters(["loading", "error"])
  },
  data() {
    return {
      isVisible: false,
      showWeatherSettings: false,
      boardTittle: "Weather App"
    };
  },
  methods: {
    animateBoard() {
      this.isVisible = !this.isVisible;
    },
    showSettings() {
      this.showWeatherSettings = !this.showWeatherSettings;
    }
  },
  created() {
    setTimeout(() => {
      this.animateBoard();
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
.board {
  background-color: transparent;
  border-radius: 3px;
  box-shadow: 0 0 150px 0 rgba(0, 0, 0, 0.5);
  color: #383842;
  max-width: 900px;
  min-height: 600px;
  padding: 32px;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-180rem);

  &__heading {
    text-align: center;
    font-size: 30px;
  }

  &.active {
    opacity: 1;
    transition: all 1s cubic-bezier(0.51, 0.92, 0.24, 1.15);
    transform: translateY(0rem);
  }

  &__footer {
    display: flex;
    flex-direction: column;
    height: 250px;
    position: relative;
    bottom: 0;

    .btn__nice-day {
      width: 100%;
      height: 50px;
      display: inline-block;
      font-family: "Courgette", cursive;
      font-size: 20px;
      font-weight: bold;
      color: #444;
      text-decoration: none;
      text-align: center;
      outline: none;
      padding-top: 6px;
      position: relative;
      cursor: pointer;
      border: none;
      background-color: #eaeaec;
      border-radius: 5px;
      box-shadow: inset 0px 1px 0px #b3b3b3, 0px 5px 0px 0px #d6d1d1bf,
        0px 6px 5px #d6d1d1bf;
      z-index: 100;

      &:active {
        top: 3px;
        box-shadow: inset 0px 1px 0px #d5d5d8, 0px 2px 0px 0px #d5d5d8,
          0px 3px 3px #d5d5d8;
      }

      &.disable {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
}
</style>
