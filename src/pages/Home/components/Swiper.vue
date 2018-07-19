<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  export default{
      name:"HomerSwiper",
      data(){
          return{
            swiperOption:{
              pagination:".swiper-pagination",
              loop:true
            },
            swiperList:[
              {
                  "id":"001",
                  "imgUrl":"http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg"
              },
              {
                  "id":"002",
                  "imgUrl":"http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg"
              },
            ]
          }
      }
  }
</script>

<style lang="stylus" scoped="scoped">
  /*----样式穿透--*/
  .wrapper  >>>  .swiper-pagination-bullet-active
    background :#fff
  .wrapper
    width:100%
    height:0
    overflow :hidden
    padding-bottom 26.67%
    background :#eee
    .swiper-img
      width:100%
</style>
