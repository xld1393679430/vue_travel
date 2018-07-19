<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id" @click="clickItem">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data() {
      return{
        recommendList:[
          {
            id:"001",
            imgUrl:"http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg",
            title:"上海迪士尼乐园上海迪士尼乐园上迪士尼乐园上海迪士尼乐园上海迪士尼乐园上海迪士尼乐园上海迪士尼乐园",
            desc:"167734条评论"
          },
          {
            id:"002",
            imgUrl:"http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg",
            title:"虎啸峡漂流",
            desc:"2251条评论"
          },
          {
            id:"003",
            imgUrl:"http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg",
            title:"杭州浪浪浪水公园",
            desc:"2251条评论"
          },
          {
            id:"004",
            imgUrl:"http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg",
            title:"杭州乐园",
            desc:"4738条评论"
          }
        ]
      }
    },
    methods:{
      clickItem(){
          console.log(12312)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
