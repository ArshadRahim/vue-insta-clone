<template>
  <div class="login">
    <div class="main">
      <img
        class="iphone"
        src="https://cdn.iphoneincanada.ca/wp-content/uploads/2016/08/tumblr_inline_obae6aJ6lz1svf3j7_540.jpg"
        alt=""
      />
      <div class="move">
        <div class="hello">
          <img
            src="https://stackspancakebar.com.au/wp-content/uploads/2018/05/instagram-logo.png"
            alt="InstaClone"
          />
          <form class="login-form" action="">
            <input
              class="name-input"
              type="text"
              placeholder="Phone number, user name, or email"
              required
            />
            <input
              class="pass-input"
              type="Password"
              placeholder="Password"
              required
            />
            <button class="btn btn-primary" @click="login()">Log In</button>
            <h4 class="or">OR</h4>
            <h3>
              <a href="https://www.facebook.com/"> <i class="fab fa-facebook-square fb-ico" ></i> Log in with Facebook </a>
            </h3>
            <p>
            
              <a
                class="forgot-password"
                href="https://www.instagram.com/accounts/password/reset/"
              >
                Forgot password?
              </a>
            </p>
          </form>
        </div>
        <div class="option-signup" >
          Don't have an account? <a class="sign-up" href="http://localhost:8080/signup"> Sign up </a>
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
      </div>
      <insta-footer class="footer"> </insta-footer>
    </div>
  </div>
</template>

<script>
import Footer from "./footer";

// let nameInput  = document.querySelector(".name-input");

export default {
  name: "Login",
  Footer,
  data() {
    return {
      profiles: [],
    };
  },

  async created() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  },
};
// Footer()
//  mounted(){
//      const login = () => {
//          alert("You are logged in");
//      }
//  }
</script>

<style scoped>
.main {
  position: absolute;
  top: 0;
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
}
.move {
  position: absolute;
  top: 50px;
  right: 20%;
}

.hello {
  position: relative;
  height: 400px;
  width: 350px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(211, 204, 204);
  text-align: center;
  align-items: center;
}
.hello img {
  position: absolute;
  top: 8%;
  width: 60%;
  height: 60px;
  left: 18%;
}
.login-form {
  margin-top: 110px;
}

.hello input {
  outline: none;
  font-size: 13px;
  width: 80%;
  height: 36px;
  padding-left: 10px;
  background-color: #fafafa;
  border: 1px solid rgb(211, 204, 204);
  border-radius: 4px;
  margin: 4px auto;
  display: block;
  align-items: center;
}

.btn-primary {
  width: 80%;
  height: 32px;
  margin: 18px auto;
  padding: 4px 8px 8px 8px;
  display: block;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3%;
  background-color: #0095f6;
  color: white;
  font-weight: bold;
  outline: none;
}


.option-signup {
  width: 350px;
  padding: 20px 10px 20px 10px;
  margin-top: 12px;
  background-color: white;
  border: 1px solid rgb(211, 204, 204);
  text-align: center;
  align-items: center;
}
.or {
  padding-top: 18px;
  line-height: 1px;
  opacity: 0.5;
  /* padding-left: 1em; */
}


.or:before {
   content: "";
    opacity: 0.5;
   display: inline-block;
   border: black 0.1px solid;
   width: 100px;
   height: .1px;
   margin-bottom: 4px;
   margin-right: 18px;
}
.or::after {
   content: "";
    opacity: 0.5;
   display: inline-block;
   border: black 0.1px solid;
   width: 100px;
   height: .1px;
   margin-bottom: 4px;
   margin-left: 18px;
}
.hello a,
h3 {
  color: #2a4f9e;
  font-size: 16px;
  padding-top: 26px;
  text-decoration: none;
  margin: 1em;
}
.forgot-password {
  font-size: 10px;
}

.iphone {
  width: 390px;
  height: 666px;
  margin-right: 18em;
}

.sign-up {
  text-decoration: none;
  color:#0095f6 ;
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

@media screen and (max-width: 1200px) {
  .iphone {
    visibility: hidden;
  }

  .icos-container {
    margin-bottom: 3em;
    
  }
}
</style>