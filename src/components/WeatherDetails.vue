<template>
  <div class="weather__details">
    <div class="user__location">
      <span> {{data.name}} </span>
      <span> has {{data.weather[0].main}} weather </span>
    </div>
    <div class="weather__info">
      <div class="weather__info--temprature">
        <strong><span>{{data.main.temp | celsius}} <sup>o</sup> C </span></strong>
      </div>
      <div class="weather__info--details">
        <ul>
          <li>
            Pressure: <strong>{{data.main.pressure}} mb</strong>
          </li>
          <li>
            Humidity: <strong>{{data.main.humidity}} %</strong>
          </li>
          <li>
            Wind speed: <strong>{{data.wind.speed}} mph </strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import filters from "../filters/index";
import VueTypes from "vue-types";

export default {
  extends: filters,
  props: {
    data: VueTypes.object.isRequired
  }
};
</script>

<style lang="scss" scoped>
.weather__details {
  background-color: rgba(173, 231, 245, 0.2);
  padding: 1rem;
  border-radius: 10px;
  .user__location {
    font-size: 30px;
    text-align: center;
  }

  .weather__info {
    display: flex;
    justify-content: space-between;

    &--temprature {
      span {
        font-size: 5rem;
      }
      sup {
        font-size: 48px;
        vertical-align: text-top;
      }
    }

    &--details {
      ul {
        list-style-type: none;
        line-height: 2rem;
        margin: 0;
      }
    }
  }
}
</style>
