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
