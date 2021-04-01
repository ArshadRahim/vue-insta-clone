<template>
<div>
  <insta-header> </insta-header>
<div class="home-flex">
  <div class="storiesandposts">
    <insta-stories></insta-stories>
    <!-- <hr> -->
  <insta-posts></insta-posts>
</div>

<div class="sidebar">
<side-bar></side-bar>
</div>


</div>
  <!-- <h1>hey there,  this is home page</h1> -->
  <div id="hey">
  <p v-if="show">Click to read Full article </p>
  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur voluptatem sapiente? Sint eveniet error quidem impedit. Minus illum aspernatur iusto, ut perferendis deleniti omnis, vitae accusantium et, accusamus ducimus!</p>
  <button @click="show = !show" style=" height:30px; background-color:blue;">Click here </button>
</div>
</div>


  <!-- <v-app>

    <v-app-bar app  white bg="black">
    <v-toolbar-title> Instagram</v-toolbar-title>
    <v-spacer>  </v-spacer>

    <v-input-field placeholder="Search" mdi-account-circle label="Home"></v-input-field>
    <v-spacer> </v-spacer>
    
    <v-btn text rounded>home</v-btn>
    <v-btn text rounded>Messages</v-btn>
    <v-btn text rounded>Search</v-btn>
    <v-btn text rounded>likes</v-btn>
    <v-btn text rounded>Profile</v-btn>
    </v-app-bar>
  </v-app> -->
</template>


<script>
import Header from './header'
import Stories from './stories'
export default {
    name: "Home",
    Header, Stories,
  data(){
    return{

    }
  }
}
</script>

<style scoped>
body{
    background: rgb(241, 237, 237);

}
v-input-field{
  border: 1px rgb(221, 216, 213) solid;
  background-color: rgb(255, 255, 255);
  width: 16%;
  height: 50%;
  border-radius: 4px;
  padding: 4px;
  margin-left: 5em;
}

.home-flex{
  
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
}

.storiesandposts{
  margin-right: 2%;
  width: 44%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

}
.sidebar{
  width: 24%;
}

insta-header{
  position: fixed;
  top: 0;
}
 
</style>