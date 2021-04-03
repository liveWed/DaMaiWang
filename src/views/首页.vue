<template>
  <div class="home">
\
    <!-- 今日推荐  -->
    <recommend/>  
    <!-- 主体内容 -->
    <home-cion v-for="(ite , index) in dat" :key="index" :items="ite" :i = "index">
      <h2 slot="titleText">
        <span style="color:#FF3D1D">{{ite.foots}}</span>
        {{ite.text}}
      </h2>
    </home-cion>
  </div>
</template>
<script>

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