<template>
    <div class="box">
        <div class="xiangqing">
        <div class="top">
            <dingbuNav></dingbuNav>
            <p class="txt01">
                大麦
                <span class="fuhao">></span>
                北京
                <span class="fuhao">></span>
                <span class="dy">
                    电影
                </span>
                <span class="fuhao">></span>
                大型多媒体励志互动儿童剧《奇门遁甲》(11月)
            </p>
        </div>
        <xiangqing_body01></xiangqing_body01>
        <br><br><br>
        <xiangqing_body02></xiangqing_body02>
        <br><br><br>
    </div>
    <footersVue></footersVue>
</div>
    
</template>
<script>
import dingbuNav from '../components/dingbuNav.vue'
import xiangqing_body01 from '../components/xiangqing_body01.vue'
import xiangqing_body02 from '../components/xiangqing_body02.vue'
import footersVue from '../components/footers.vue'
export default {
    components:{
        dingbuNav,
        xiangqing_body01,
        xiangqing_body02,
        footersVue
    }
}
</script>
<style scoped>
.xiangqing{
    width: 1300px;
    margin: 0 auto;
    /* border: 1px rebeccapurple solid; */
}
.txt01{
    margin: 50px;
}
.txt01 .fuhao{
    color: gray;
    margin-right: 15px; 
}
.dy{
    color: orange;
}
</style>
