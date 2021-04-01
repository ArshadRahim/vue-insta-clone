<template>
    <div id="header-main-container">
        <div class="header-flex-container">
<div class="header-image-container">
<img src="https://stackspancakebar.com.au/wp-content/uploads/2018/05/instagram-logo.png" alt="">    
</div>

<div class="header-search-container">
<input type="search" placeholder="Search">
</div>
<div>
<div class="icons-container">
    
    <i class="fa fa-home"></i>
    <i class="fab fa-facebook-messenger"></i>
    <i class="fa fa-compass"></i>
    <i class="fa fa-heart"></i>
    <i class="fa fa-user"></i>
</div>
</div>

        </div>

    </div>
</template>


<script>
    export default {
        name : "Header" 
    }
</script>


<style lang="scss" scoped>


body{
    padding: 0;
    margin:0;
}
#header-main-container{
    position: fixed;
    background-color: white;
    top: 0%;
    z-index: 2;
    // padding-top: 0;
    // margin-top: -30px;
    width: 100%;

}

.header-flex-container{
    border-bottom: 1px solid rgb(221, 216, 216);
    margin-top: 0;
    padding-top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 50px;
}
.header-image-container img {
    width: 150px;
    height: 36px;
}
.icons-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.icons-container  i {
padding: 0px 7px;
font-size: 24px; 
}

.header-search-container input{
    border: 1px solid  rgb(221, 216, 216);
    outline: none;
    padding-left: 8px ;
    border-radius: 4px;
    height: 30px;
    background-color: rgb(255, 248, 248);

}

</style>