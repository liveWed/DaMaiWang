<template>
  <div class="home">
    <!-- 头部 -->
    <headers/>
    <!-- 头部导航 -->
    <headerNav/>
    <!-- 轮播 -->
    <banner :imgUrl='url' class="banners"/>
    <!-- 今日推荐  -->
    <router-view/>
    <!-- 底部 -->
    <footers/>
  </div>
</template>
<script>
import headers from '../components/Headers'
import banner from '../components/banner';
import headerNav from '../components/HeadNav';
import footers from '../components/footers';
import recommend from '../components/recommend';
import HomeCion from '../components/homeCion.vue';
export default{
  name : 'Home',
  data(){
    return{
      url:['img/base/pic1.jpg','img/base/pic2.jpg','img/base/pic3.jpg'],
      dat:[]
    }
  },
  components:{
    banner,
    headerNav,
    headers,
    footers,
    recommend,
    HomeCion
  },
   mounted() {
    this.$http
      .get("/api/getCion")
      .then((result) => {
        this.dat = result.data;
        console.log("homeCion");
        console.log(result.data);
      })
      .catch((err) => {
        console.error();
      });
  },
}
</script>
<style scoped>
.banners{
  width: auto;
  height: auto;
  background: white;
}
.home{
  background: #F5F5F5;
}
</style>