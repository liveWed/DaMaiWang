<template>
  <div class="cion">
    <div class="leftDiv">
      <!-- 设置标题槽口 -->
      <slot name="titleText"></slot>
       <home-cion-right 
          style="float:left;"
          :imgSrc="items.imgUrl[i]"
          :pice="items.numbers.number"
          :titleText="items.titles[i]"
        ></home-cion-right>
      <!-- 使用父子组件传值 -->
      <div class="cont">
        <!-- <home-cion-right v-for="(item , i) in items" :key="i" ></home-cion-right> -->
       
        <div class="item" v-for="(its, index) in items.imgUrl" :key="index" :v-if="index == '0'">
          <!-- lazy 属性定义懒加载 v-for="(imgSrc,i) in its" :key="i"-->
          <el-image class="imgs" :src="its" fit="fill" lazy></el-image>
          <div class="textCion">
             <p>{{items.titles[index]}}</p>
             <p>{{items.times[index]}}</p>
             <p>{{items.address[index]}}</p>
             <p>￥{{items.numbers.number}}</p>
             
          </div>
        </div>
      </div>
    </div>
    <hot-top class="hot-top"></hot-top>
  </div>
</template>
<script>
import homeCionRight from "./homeCionRight";
// import hotTop from './hotTop'
import hotTop from './hotTop'
export default {
  name: "homeCion",
  data() {
    return {};
  },
  props: ["items", "i"],
  components: {
    homeCionRight,
    hotTop
  },
};
</script>
<style scoped>
.leftDiv{
  float: left;
  background: white;
  padding: 10px;
}
.hot-top{
  position: absolute;
  top: 0;
  right: 0;
}
.cont{
  float: left;
  width: 600px;
  height: 380px;
  margin-left: 10px;
  /* border: 1px solid green ; */
}
.textCion{
  float: left;
  /* margin-left: 10px; */
  margin: 0 0 0 5px;
  /* border: 1px solid red ; */
}
.textCion p{
  padding: 0;
  margin: 0 0 5px 0;
}
.imgs{
  float: left;
  width: 100px;
  height: 100px;
}
.item {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 295px;
  height: 180px;
  /* margin-top: 50px; */
  /* border: 1px solid yellow ; */
}
.cion {
  position: relative;
  box-sizing: border-box;
  width: 1300px;
  height: 420px;
  display: flex;
  overflow: hidden;
  margin: 10px auto;
  /* background: white; */
}
.cion .item:first-child {
  display: none;
}

</style>