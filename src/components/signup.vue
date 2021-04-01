<template>
    <div>
<div v-if="error" class="error"> {{error.message}} </div>
<form class="signup-form" @submit.prevent="pressed">
<img src="https://stackspancakebar.com.au/wp-content/uploads/2018/05/instagram-logo.png" alt="">
    <p class="see-photos">Sign up to see photos and videos from your friends.</p>
    
      <button class="submit" type="submit" > <i class="fab fa-facebook-square fb-ico"> </i> <a href="http://www.facebook.com"> Login with Facebook</a> </button>
      <div class="options">
          OR
     </div>
    <div class="email">
        <input type="email" v-model="email" placeholder="Mobile Number or Email">
    </div>
    <div class="email">
        <input type="text" v-model="fullname" placeholder="Full Name">
    </div>
    <div class="email">
        <input type="text" v-model="username" placeholder="Username">
    </div>
    <div class="password">
        <input type="password" v-model="password" placeholder="password">
    </div>
    <button class="submit"  type="submit"  > <a href="http://localhost:8080/home">Sign up </a> </button>

    <p class="data-policy">By signing up, you agree to our <a href="https://help.instagram.com/581066165581870">Terms,</a> <a href="https://help.instagram.com/581066165581870">Data Policy</a> and <a href="https://help.instagram.com/581066165581870">Cookies Policy</a>.</p>

     
</form>

<div class="option-signup" >
          Have an account? <a class="sign-up" href="http://localhost:8080/"> Log in </a>
        </div>
          <p class="get-app">Get the app.</p>
        <div class="icos-container">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt=""
            href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt=""
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D1ED44794-AE93-4745-9351-64AAA7FADE2E%26utm_content%3Dlo%26utm_medium%3Dbadge"
          />
        </div>
<insta-footer></insta-footer>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
    export default {
        methods:{
           async pressed(){
               try{
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                console.log(user)
                this.$router.replace({replace: "home"})
                alert('hey')
               }catch(err){
                   console.log(err)

               }
                
            }
        },
        data(){
            return{
                     email: "",
                     password: "",
                     error : "",
            }
        }
    }
</script>

<style lang="scss" scoped>

input {
    width: 280px;
    height: 40px;
    margin: 4px;
    padding-left: 6px;
    font-size: 14px;
    outline: none;
    border: rgb(231, 229, 229) 1px solid;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.939);
}
button{
    width: 280px;
    height: 30px;
    margin: 4px;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    background-color:#0095f6;
    color: white;
    border-radius: 3px;
}
.options{
    margin: .6em auto ; 
}

.option::before {
    font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f007";
  }
  .signup-form{
      border: 1px solid #dbdbdb;
      width: 360px;
      margin: auto;
      margin-top: 0;
      background-color: white;
  }
  .signup-form img{
      margin-top: 2em;
      width: 60%;
      height: 60px;
  }
  .signup-form .see-photos{
       color: slategrey;
       font-weight: bold;
       width: 60%;
       margin: .4em auto 1em auto;
       font-size: 18px;
    //    margin-bottom: 2em;
  }

  .data-policy{
       color: slategrey;
    //    font-weight: bold;
       width: 80%;
       margin: .4em auto 1em auto;
       font-size: 14px;
  }
  .data-policy a {
      text-decoration: none;
      color:rgb(88, 102, 116) ;
      font-weight: bold;
      font-size: 14px;
  }

  .option-signup {
      
      margin: auto;
   width: 360px;
  padding: 20px 10px 20px 10px;
  margin-top: 12px;
  background-color: white;
  border: 1px solid #dbdbdb;
  text-align: center;
  align-items: center;
}
.option-signup a{
color: #0095f6;
      text-decoration: none;
}
.icos-container {
  display: flex;
  justify-content: center;
  height: 100px;
}

.icos-container img {
  margin: 1.4em 4px;
  height: 40px;
  width: 140px;
}
.get-app {
  margin-top: 1.2em;
}
.fb-ico{
    font-size: 20px;
    padding-right: 4px;
    margin-bottom: 2px;
}
.submit a {
    text-decoration: none;
    color: white;
}

</style>