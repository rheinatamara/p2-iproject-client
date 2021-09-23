<template>
  <div id="app">

    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dosis&family=Pacifico&display=swap');
  $main-color: #f89c4b;
  $dark-color: #333;
  $website-width: 1200px;
  $light-color: #f4f4f4;
  $medium-color: #ccc;
  $primary-color: #ee4c72;
  $window-margin: 1rem 5rem;
  $main-border-radius: 20px;
  $main-gradient: linear-gradient(90deg,$main-color, $primary-color);
  * {
    font-family: 'Dosis', sans-serif;
	  line-height: 1.6;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
	text-decoration: none;
  }
  ul {
    list-style: none;
  }
</style>
