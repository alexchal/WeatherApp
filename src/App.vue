<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  position: relative;
  opacity: 1;
  background-image: url("./assets/sun.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Courgette", cursive;
}
#app {
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
</style>
