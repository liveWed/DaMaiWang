<template>
  <div class="qinzi">

    <!-- 轮播图 -->
    <!-- <swiper /> -->
    <!-- 猜你喜欢 -->
    <like />
    <!-- 精彩聚集 -->
   <zhongjian />  
   <!-- 中间的ul -->
    <ulvue />
<!-- 年龄 -->
    <nianling />
    <!-- 热门 -->
    <remenVue />
<!-- 日历 -->
    <calendat />

    <!-- 底部 -->
    <!-- <footers /> -->
    
  </div>
  
</template>

 <script>
// import Headers from '../components/Headers.vue';
// import HeadNav from '../components/HeadNav.vue';
// import swiper from '../components/swiper.vue';
import like from '../components/like.vue';
import zhongjian from '../components/zhongjian.vue';
import ulvue from '../components/ul.vue';
import nianling from '../components/nianling.vue';
import remenVue from '../components/remen.vue';
import footers from '../components/footers.vue';
import calendat from '../components/calendat.vue';
  export default {
    components: {
    like,
    zhongjian,
    ulvue,
    nianling,
    remenVue,
    footers,
    calendat,
  },
    name: 'carrousel',
    data() {
      return {
        
      }
    },
    computed: {
      
    },
    mounted() {
      
  },
  }
  
</script>
<style scoped>

*{
  padding: 0;
  margin: 0;
}

</style>
