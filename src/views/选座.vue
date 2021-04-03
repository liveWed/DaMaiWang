<template>
    <div class="xuanZuo">
        <!-- 头部导航 -->
    <!-- <headers /> -->
    <!-- 选座组件 -->
    <seat/>
    <!-- 底部 -->
    <!-- <footers/> -->
    </div>
</template>
<script>
import headers from '../components/Headers';
import footers from '../components/footers';
import seat from '../components/seat'
export default {
   name : 'xuanzuo',
    components:{
    headers,
    footers,
    seat,

  },
}
</script>
<style scoped>
.headers{
    background: #F5F5F5;
}
</style>