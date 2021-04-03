<template>
    <div class="item" >
      <!-- lazy 属性定义懒加载 v-for="(imgSrc,i) in its" :key="i"-->
      <el-image class="imgs" :src="imgsrc" fit="fill" lazy></el-image>
      <div class="textCion">
        <p>{{ titles }}</p>
        <p>{{ times }}</p>
        <p>{{ address }}</p>
        <p>￥{{ pice }}</p>
      </div>
    </div>
</template>
<script>
export default {
  props: ["imgsrc", "titles",'times','address','pice'],
};
</script>
<style scoped>
.textCion {
  float: left;
  /* margin-left: 10px; */
  margin: 0 0 0 5px;
  /* border: 1px solid red ; */
}
.textCion p {
  padding: 0;
  margin: 0 0 5px 0;
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
.imgs{
  float: left;
  width: 100px;
  height: 100px;
}
</style>