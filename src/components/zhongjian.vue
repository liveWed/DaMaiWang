<template>

    <div class="ac">
        <p class="ju">精彩聚集</p>
        <jujiVue />
        <jujizuo class="ab">

        </jujizuo>
        <jijuyou class="bc">

        </jijuyou>
        
    </div>
</template>
<script>
import jujiVue from './juji.vue';
import jujizuo from './jujizuo.vue';
import jijuyou from './jijuyou.vue';
export default {
      components: {
          jujiVue,
          jujizuo,
          jijuyou
  },
}
</script>
<style scoped>
.ac{
    width: 1300px;
    height: 570px;
    /* border: 1px gold solid; */
    margin: 0 auto;
    position: relative;
}
.ju{
    font-size: 30px;
    color: white;
    width: 120px;
    height: 40px;
    background-color:rebeccapurple; 
    margin: 10px auto;
}
.ab{
    /* float: left; */
    position: absolute;
    top: 50px;
    left: 0px;
}
.bc{
    position: absolute;
    top: 50px;
    right: 0px;
}
</style>
