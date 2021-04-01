<template>
    <div>

        <div class="stories-container">
            <ul>
                <li v-for="(story, index) in stories" :key="index">
                   
                    <img :src="story.imgSrc" alt="">

                     {{story.para}} 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Stories",
        data(){
            return {
                stories: [
                    {   imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPg7ojmUi4cuEvYrdd7oEh0ML07uioR4zqpw&usqp=CAU',
                    para: "Salmon"
                    },
                    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/137218268_432341048117310_632996006243899399_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=tzbFhyneqUkAX_Rsock&tp=1&oh=736951fac09d9226ecbcd7a2ddc764c3&oe=60382791",
      para: "brikey ",
    },
        {
            imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141639224_1147504299032841_3169191141559363586_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0AN3I-e2LBgAX9bmMt3&tp=1&oh=d4719daede4fbb5d9cf14d1bce8e58cf&oe=6037C1DB",
        para: " Gracey_miles",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141015040_240134277555926_6147611302933006454_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=CK5sssRoe5cAX_WDfsh&tp=1&oh=a2a66cbdd7f4527fc57bda8a9598d757&oe=603813A7",
        para: " Tajwar_S",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/141868857_821896198359515_3102383621842277534_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=SUEuQFWWyxEAX-UzSWx&tp=1&oh=9281ae8f66c629c440e0d9369ecdd183&oe=6036E652",
        para: "Zubiar_dk",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141168919_2508333426137213_8444832479795454461_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OogLzozTLK0AX9i_z5k&tp=1&oh=48cc9a7c5260a690794c1bb4a05b209b&oe=6039CC64",
        para: "Hena_Gray",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141484214_240877694207852_206435309474063534_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tmj1ZyzUG08AX9tBM33&tp=1&oh=b4cf895ac7f40b5a1670ebc2394a99e0&oe=60399449",
        para: " Gracey_miles",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141356541_115765210422674_2285142056738289603_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4pXffSuF470AX_RzTXh&tp=1&oh=ba8b97f5dd4e86a0329059eae8cf0dd8&oe=6039D5DC",
        para: " Tajwar_S",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141527966_247574700108660_195094871082594157_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=mfibkn57yNUAX_8uE_X&tp=1&oh=ad8418d13010fca247dea7481dcd43ec&oe=6036ED2A",
        para: "Zubiar_dk",
      },
      
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141015040_240134277555926_6147611302933006454_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=CK5sssRoe5cAX_WDfsh&tp=1&oh=a2a66cbdd7f4527fc57bda8a9598d757&oe=603813A7",
      para: " Tajwar_S",
    },
   
                ]
            }
        }

    }
</script>

<style lang="scss" scoped>

.stories-container {
    border-bottom: 1px solid #dbdbdb;
    overflow: hidden;
    margin-top: 2em;
    background: #fff;
    background: rgba(var(--d87,255,255,255),1);
    border: 1px solid #dbdbdb;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 3px;
    margin-bottom: 24px;
    padding: 16px 0;
}
  
.stories-container img {
    width: 60px;
    height: 60px;
    border: 3px solid rgb(184, 62, 62);
    border-radius: 50%;
}

ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
}
li{
    
    padding: 4px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

</style>