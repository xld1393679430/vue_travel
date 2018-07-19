<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination-icon"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
    name:"HomeIcons",
    data(){
       return{
         swiperOption:{
           pagination:".swiper-swiper-pagination-icon",
           loop:true
         },
         iconList:[
           {
             id:'001',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"景点门票景点门票"
           },
           {
             id:'002',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
             desc:"一日游"
           },
           {
             id:'003',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"主题乐园"
           },
           {
             id:'004',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"漂流"
           },
           {
             id:'005',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"西湖"
           },
           {
             id:'006',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"夏日玩水"
           },
           {
             id:'007',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"宋城千古情"
           },
           {
             id:'008',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"杭州必游"
           },
           {
             id:'009',
             iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
             desc:"千岛湖千岛湖"
           }
         ]
       }
  },
  computed:{
      pages(){
          const pages = [];
          this.iconList.forEach( (item,index) => {
              const page = Math.floor( index / 8 );
              if(!pages[page]) {
                pages[page] = []
              }
              pages[page].push(item)
          } )
        return pages
      }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
.icons  >>>  .swiper-container
  height:0
  padding-bottom: 50%
.icons
    margin-top:0.1rem
  .icon
    width:25%
    height:0
    padding-bottom :25%
    overflow:hidden
    position: relative
    float: left
    .icon-img
      position :absolute
      left:0
      right:0
      top:0
      bottom:0.44rem
      box-sizing border-box
      padding :0.1rem 0.1rem 0 0.1rem
      .icon-img-content
        display :block
        margin  0 auto
        height:100%
    .icon-desc
      position: absolute
      left:0
      right:0
      bottom:0
      height: 0.44rem
      line-height:0.44rem
      color: $darkTextColor
      text-align :center
      ellipsis()

</style>
