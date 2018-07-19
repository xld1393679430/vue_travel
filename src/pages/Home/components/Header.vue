<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arraw-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  /*font-size:50px*/

  @import "~styles/varibles.styl"

  .header
    line-height:0.86rem
    display :flex
    background : $bgColor
    color:#fff
    .header-left
      width: 0.64rem
      float :left
      .back-icon
        text-align :center
        font-size .4rem
    .header-input
      flex:1
      background: #fff
      margin-top:0.12rem
      height: 0.64rem
      line-height: 0.64rem
      margin-left :.2rem
      border-radius :0.1rem
      color:#ccc
      padding-left .2rem
    .header-right
      float :right
      width:1.24rem
      text-align: center
      .arraw-icon
        font-size .2rem
        margin-left:-0.04rem

</style>
