<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:"HomeRecommend",
      data(){
          return{
              recommendList:[
                {
                    id:"001",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
                    title:"上海迪士尼乐园上海迪士尼乐园上迪士尼乐园上海迪士尼乐园上海迪士尼乐园上海迪士尼乐园上海迪士尼乐园",
                    desc:"167734条评论"
                },
                {
                  id:"002",
                  imgUrl:"http://img1.qunarzz.com/sight/p0/201405/30/0c4071981e46cf9ce0812b56522ebb17.jpg_200x200_0c7e5a75.jpg",
                  title:"虎啸峡漂流",
                  desc:"2251条评论"
                },
                {
                  id:"003",
                  imgUrl:"http://img1.qunarzz.com/sight/p0/1706/45/456c4be6ba4fa604a3.img.jpg_200x200_81d9a0be.jpg",
                  title:"杭州浪浪浪水公园",
                  desc:"2251条评论"
                },
                {
                  id:"004",
                  imgUrl:"http://img1.qunarzz.com/sight/p0/201408/14/dba7220ac844600c07a1af703f640935.jpg_200x200_a84b7d79.jpg",
                  title:"杭州乐园",
                  desc:"4738条评论"
                }
              ]
          }
      }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.title
  line-height:0.8rem;
  text-indent :0.2rem
  background :#eeeeee
  margin-top:0.2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding:0.1rem
  .item-info
    flex:1
    min-width :0
    padding:0.1rem
    .item-title
      line-height: 0.54rem
      font-size :0.32rem
      ellipsis()
    .item-desc
      line-height:0.4rem;
      color:gray
      ellipsis()
    .item-button
      line-height:0.44rem;
      margin-top:0.16rem
      background :#ff9300
      padding 0 0.2rem
      border-radius :0.3rem
</style>
