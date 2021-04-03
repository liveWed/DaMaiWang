<template>
    <div class="order">
        <!-- 头部导航 -->
    <headers />
    <!--  -->
    <order/>
    <!-- 底部 -->
    <footers/>
    </div>
</template>
<script>
import headers from '../components/Headers';
import footers from '../components/footers';
import order from '../components/order'
export default {
   name : 'xuanzuo',
    components:{
    headers,
    footers,
    order,

  },
  mounted(){
      
        //   获取地址之中的 数据
        let url = location.search;
        // 创建obj对象
        let theRequest = new Object();
        // 判断是否有数据
        if(url.indexOf('?') != -1){
            // 截取
            let str = url.substr(1);
        }
        console.log('url');
        console.log(url);

  }
}
</script>
<style scoped>
.headers{
    background: #F5F5F5;
}
</style>