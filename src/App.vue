<template>
 <div id="app">
   
  <router-view>  

    <ul>
      <li><router-link to="/">Login</router-link></li>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/user/123">User </router-link></li>
      <li><router-link to="signup" >Signup</router-link></li>
  </ul>
  
  </router-view>

  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#app{
  margin: auto;
  /* align-items: center; */
  text-align: center;
  margin-top: 2em;
}

#app ul{
  margin-top: 4em;
  padding: 3em;
}
</style>