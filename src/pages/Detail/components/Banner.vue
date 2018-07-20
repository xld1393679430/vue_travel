<template>
  <div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">上海迪士尼乐园</div>
      <div class="banner-number">
          <span class="iconfont banner-cion">&#xe71e;</span>
          <span>39</span>
      </div>
    </div>

  </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @closeGarrary = "closeGarrary"
    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from "common/gallary/Gallary"
  export default {
    name:"DetailBanner",
    data(){
        return{
          imgs:[
              "http://img1.qunarzz.com/sight/p0/1711/26/26cfb4d9ad836b52a3.img.jpg_r_800x800_ed8c0a30.jpg",
              "http://img1.qunarzz.com/sight/p0/1501/64/647c8531b67778c0.water.jpg_r_800x800_2f4ed1f7.jpg"
          ],
          showGallary:false
        }
    },
    components:{
      CommonGallary
    },
    methods:{
      handleBannerClick(){
          this.showGallary = true;
      },
      closeGarrary(){
        this.showGallary = false;
      }
    }

  }
</script>

<style lang="stylus" scoped>
.banner
  overflow :hidden
  height :0
  padding-bottom: 55%
  position :relative
  .banner-img
    width:100%
  .banner-info
    position :absolute
    left:0
    right:0
    bottom:0
    line-height: 0.6rem
    display :flex
    color:#fff
    background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    .banner-title
        flex:1
        font-size: 0.32em
        padding :0 0.2rem
    .banner-number
        margin-top :0.14rem
        padding:0 0.3rem
        height:0.32rem
        line-height 0.32rem
        border-radius :0.2rem
        background :rgba(0,0,0,0.8)
        font-size :0.24rem
        .banner-cion
          font-size :0.32rem

</style>
