<template>
    
<div class="side-bar">
    <div class="profile-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrISoRmIIALKBp_6YsdY4efJrgVhx-2rqig&usqp=CAU" alt="">
        <div>
            <h6>that-code</h6>
            <p>that_dumb_coder</p>
        </div>
    </div>
<div class="suggestions">
    <p>Suggestions for you</p>
    <p>See All</p>
</div>

<div class="suggestion-profiles">
 <div class="profile-container-inner">
        <img src="https://i.pinimg.com/originals/f3/86/c3/f386c3badaca115f7456cf0a8f68a651.jpg" alt="">
        <div>
            <h6>instagranner</h6>
            <p>instagrammer</p>

        </div>
        <div>
            <h4>Follow</h4>
        </div>
    </div>
     <div class="profile-container-inner">
        <img src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="">
        <div>
            <h6>hey_its_sera</h6>
            <p>sera_i_am</p>
        </div>
         <div>
            <h4>Follow</h4>
        </div>
    </div>
     <div class="profile-container-inner">
        <img src="https://i.pinimg.com/originals/7a/d8/5f/7ad85f810b2abcdb1f9954cfc0f6c274.jpg" alt="">
        <div>
            <h6>just_Js_</h6>
            <p>Javascript_community</p>
        </div>
         <div>
            <h4>Follow</h4>
        </div>
    </div>
     <div class="profile-container-inner">
        <img src="https://i0.wp.com/arabicmehndidesign.com/wp-content/uploads/2020/09/Download-35-Latest-Stylish-Whatsapp-Dp-Images-2020-2021-New-Collection-For-Girls-28.png?ssl=1" alt="">
        <div>
            <h6>she-codes</h6>
            <p>lil_liley</p>
        </div>
         <div>
            <h4>Follow</h4>
        </div>
    </div>
     <div class="profile-container-inner">
        <img src="https://i.pinimg.com/736x/1a/c3/01/1ac30130fd42a46c4f20916d933ad42f.jpg" alt="">
        <div>
            <h6>she_devs</h6>
            <p>she_devs</p>

        </div>
         <div>
            <h4>Follow</h4>
        </div>
    </div>

</div>
<insta-footer></insta-footer>
</div>


</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.profile-container{
    display: flex;
    justify-content: flex-start;
}
.profile-container img{
     height: 50px;
    width: 50px;
    border-radius: 50%;
}
.profile-container h6{
    color: rgb(34, 33, 33);
    font-size: 16px;
    margin-right: 2em;
    margin-top: .6em;
    padding: 0;
}
.profile-container p {
    padding-left: 1em;
    color: rgb(121, 120, 120);
    // padding: 0;
    margin: 0;

}
.side-bar {
    width: 20%;
    position: fixed;
    right: 200px;
    // border: green 1px solid;
    // margin-left: 2%;
    margin-top: 2.8em;
}

.suggestions{
    font-size: 14px;
    color: rgb(58, 58, 58);
    font-weight: bold;
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    padding-bottom: .6em;
}

.suggestion-profiles img{
    width: 30px;
    height: 30px;
}
// .profile-container-inner{
//     display: flex;
//     justify-content: space-between;
// }

.profile-container-inner{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.profile-container-inner img{
     height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-left: 1em;
}
.profile-container-inner h6{
    color: rgb(34, 33, 33);
    font-size: 16px;
    text-align: start;
    margin-left: 1em;
    margin-top: .6em;
    padding: 0;
}
.profile-container-inner p {
    font-size: 13px;
    padding-left: 1em;
    color: rgb(121, 120, 120);
    // padding: 0;
    margin: 0;
    text-align: start;

}

.profile-container-inner h4{
   position: absolute;
   right: 0;
    font-size: 13px;
    color: #0095f6;
    margin-left: 5em;
    // margin-top: 1em;

}


</style>