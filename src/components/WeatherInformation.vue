<template>
  <div class="weather">
    <Loader v-if="loading"/>
    <div class="weather__error" v-if="error.status && !loading" >
      {{error.message}}
    </div>
    <div v-else>
      <transition-group name="bounce">
        <WeatherDetails :data="getSearchResults" v-if="!loading && (selectedType === 'SEARCH')" v-bind:key="0" />
        <WeatherDetails :data="getLocationResults" v-if="!loading && (selectedType === 'CURRENT')" v-bind:key="1"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Loader from "./atoms/Loader";
import WeatherDetails from "./WeatherDetails";

export default {
  components: {
    Loader,
    WeatherDetails
  },
  computed: {
    ...mapGetters([
      "getSearchResults",
      "getLocationResults",
      "loading",
      "selectedType",
      "error"
    ])
  }
};
</script>


<style lang="scss" scoped>
.weather {
  height: 200px;
  margin-top: 1rem;

  &__error {
    display: inline-block;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.1s;
}
.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
