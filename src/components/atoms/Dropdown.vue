<template>
  <div>
    <button @click='toggleShow' class='anchor'>Select a {{text}}</button>
    <div v-if='showMenu' class='menu'>
      <div class='menu__item' v-for="item in this.items" @click="itemClicked(item)" :key="item.index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import VueTypes from "vue-types";

export default {
  props: {
    onClick: VueTypes.func.isRequired,
    items: VueTypes.array.isRequired,
    text: VueTypes.string.isRequired
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleShow: function() {
      this.showMenu = !this.showMenu;
    },
    itemClicked: function(item) {
      this.toggleShow();
      this.onClick(item);
    }
  }
};
</script>

<style lang="scss" scoped >
.anchor {
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: "Courgette", cursive;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;
  color: #000;
  background-color: #7fcea0;
  border-color: #7fcea0;
  margin: 0.5rem 0;
  white-space: nowrap;

  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.5em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.28em solid transparent;
    border-bottom: 0;
    border-left: 0.28em solid transparent;
  }

  &:hover {
    color: #fff;
    background-color: #65bf8a;
    border-color: #65bf8a;
    cursor: pointer;
  }
}

.menu {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  list-style: none;
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  position: absolute;
  text-align: left;

  &__item {
    color: #212529;
    padding: 0.25rem 1.5rem;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: #f4f6f6;
      cursor: pointer;
    }
  }
}
</style>
