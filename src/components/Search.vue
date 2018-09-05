<template>
  <div class="search">    
     <form @submit.prevent="getFormValues()" class="search__box">
        <input type="text" placeholder="Search for city..." ref="my_input"  class="search__input"/>
      </form>
    <button class="search__location" @click="getFormValues()">
      <i class="fas fa-search"></i>
    </button>
    <button class="search__current-location" @click="getCurrentLocation()">
      <i class="fas fa-location-arrow"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getSearchLocation", "getCurrentLocation"]),
    getFormValues() {
      this.getSearchLocation(this.$refs.my_input.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &__box {
    width: 75%;
  }

  &__location,
  &__current-location {
    background-color: #eaeaec;
    border: 0;
    border-radius: 2px;
    color: #383842;
    font-size: 15px;
    padding: 15px;
    transition: background-color 0.3s, color 0.3s;
    width: 52px;
    height: 52px;
    cursor: pointer;

    &:hover {
      background-color: #d5d5d8;
      color: #2c2d3e;
    }
  }

  &__location {
    margin-right: -4rem;
  }

  &__input {
    font-size: 20px;
    height: 50px;
    padding: 0 10px;
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 4px;
    color: #383842;
    font-family: "Courgette", cursive;
  }
}
</style>
