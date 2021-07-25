<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
      <h1>ตารางรายรับรายจ่าย</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-image: linear-gradient(rgb(255, 111, 1),rgb(247, 247, 195));

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  h1{
    color: rgb(0, 0, 0);
    
    font-family: Chonburi;
    font-size: 3.5em;
    
  }

  
}
@font-face {
    font-family: Chonburi;
    src: url(Chonburi-Regular.ttf);
  }

</style>
