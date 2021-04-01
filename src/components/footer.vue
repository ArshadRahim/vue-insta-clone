<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <a href="https://about.instagram.com/">About</a>
            <a href="https://about.instagram.com/en_US/blog">Blogs</a>
            <a href="https://about.instagram.com/about-us/careers">Jobs</a>
            <a href="https://help.instagram.com/">Help</a>
            <a href="https://www.instagram.com/developer/">API</a>
            <a href="https://help.instagram.com/519522125107875">Privacy</a>
            <a href="https://help.instagram.com/581066165581870">Terms</a>
            <a href="https://www.instagram.com/directory/profiles/"
              >Top Accounts</a
            >
            <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
            <a href="https://www.instagram.com/explore/locations/">Locations</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="https://about.instagram.com/">Beauty</a>
            <a href="https://about.instagram.com/en_US/blog"
              >Dance and Performance</a
            >
            <a href="https://about.instagram.com/about-us/careers">Fitness</a>
            <a href="https://help.instagram.com/">Food & Drink</a>
            <a href="https://www.instagram.com/developer/">Home & Garden</a>
            <a href="https://help.instagram.com/519522125107875">Music</a>
            <a href="https://help.instagram.com/581066165581870">Visual Arts</a>
          </div>
        </div>
        <div class="row copyright">
          <div class="col">
            <a href="https://about.instagram.com/">English</a>
            <a href="https://about.instagram.com/en_US/blog"
              >@2021 Instagram from Facebook</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container .row {
  /* border: 1px solid darkblue; */
  height: 20px;
}
.col a {
  font-size: 14px;
  text-decoration: none;
  padding: 0px 8px;
  color: rgb(138, 137, 137);
}

.copyright {
  margin-top: 1.4em;
  margin-bottom: 3em;
}
</style>