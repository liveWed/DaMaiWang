<template>

    <div class="ac">
        <p class="ju">热门排行</p>
        <remenyouVue />
        <remenzuo class="ab"></remenzuo>
    </div>
</template>
<script>
import remenyouVue from './remenyou.vue';
import remenzuo from './renmenzuo.vue';

export default {
    components: {
        remenyouVue,
    remenzuo,
  },
}
</script>
<style scoped>
.ac{
    width: 1300px;
    height: 600px;
    /* border: 1px gold solid; */
    margin: 0 auto;
    position: relative;
}
.ju{
    font-size: 30px;
    color: white;
    width: 120px;
    height: 40px;
    background-color:red; 
    margin: 10px auto;
}
.ab{
    /* float: left; */
    position: absolute;
    top: 50px;
    left: 0px;
}
</style>
