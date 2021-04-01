<template>
    <div>
<div class="posts-container">
   <div> <div class="posts-header-container">
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPg7ojmUi4cuEvYrdd7oEh0ML07uioR4zqpw&usqp=CAU" alt="">
            <h4> the_dream_setup</h4>

        </div>
        <div>
            <i class="fa fa-ellipsis-h"></i>
        </div>
    </div>

    <img class="post-picture" src="https://instagram.fisb7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/151009903_136314945017110_3202922456784265011_n.jpg?_nc_ht=instagram.fisb7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=-bLs2r38mDQAX-2FGTD&tp=1&oh=ca9a5ca74c05fd61c01ce2d4348c31f6&oe=60561589" alt="">

    <div class="bottom-icons-container">
        <div>
            <i class="fa fa-heart"></i>
            <i class="fa fa-comment"></i>
            <i class="fa fa-share"></i>

        </div>
        <div>
            <i class="fa fa-bookmark"></i>
        </div>
    </div>
</div>

</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>


.posts-container {
    // margin-right: 5em;
    display: flex;
    justify-content: center;
     border: 1px solid rgb(221, 216, 216);

}

.post-picture{
    width: 100%;
}
.posts-header-container{
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.posts-header-container img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 10px;
    
}
.posts-header-container h4{
    padding-left: 10px;
    color: rgb(43, 41, 41);
    display: inline-block;
   
}
.posts-header-container i {
    margin-right: 15px;
    color: rgb(139, 135, 135);
}
.posts-header-container div{
    display: flex;
    justify-content: center;
    align-items: center;

}

.bottom-icons-container {
    display: flex;
    justify-content: space-between;
    // border: springgreen solid 1px;
}
.bottom-icons-container i {
    font-size: 22px;
}

</style>