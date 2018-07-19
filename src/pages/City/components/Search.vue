<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />

  </div>
</template>

<script>
  export default{
    name:'CitySearch'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.search
  height: 0.72rem
  padding :0 0.1rem
  background :$bgColor
  .search-input
    width:100%
    hiehgt:0.62rem
    color:#666
    line-height :0.62rem
    border-radius :0.06rem
    box-sizing :border-box
    padding :0 0.1rem
    text-align :center
</style>
