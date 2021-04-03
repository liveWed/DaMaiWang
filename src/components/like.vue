
<template>
    <div class="like">
            <p class="caip">猜你喜欢</p>
            <div class="mock">
                <p class="title" v-for="(item, index) in dat" :key="index">
                     <img :src="item.url[fn()]" alt="">
                <span class="RMD">
                    <p>{{ item.name }}</p>
                    <span class="shou">售价￥</span>
                </span>
                {{ item.RMB}}
                <span class="RMB">起</span>
            </p>
          </div>
    </div>
</template>
<script>
  export default {
    components: {
  },
    name: 'carrousel',
    data() {
      return {
        dat:[]
      }
    },
    methods:{
        fn:function(){
                var arr=(Math.floor(Math.random() * 6));
                return arr;
        }
    },

    mounted() {
      this.$http.get("/api/getData").then((res) => {
      console.log(res.data);
      this.dat = res.data;
    });
  },
  }
  
</script>
<style scoped>
.mock{
    height: 300px;
    /* border: 1px red solid; */
}
.title{
    width: 180px;
    height: 260px;
    /* border: 1px saddlebrown solid; */
    float: left;
    margin-left: 30px;
    font-size: 15px;
}
.title img{
    width: 170px;
    height: 180px;
}
.like{

    /* border: 1px red solid; */
    margin: 0 auto;
    width: 1300px;
    height: 400px;
}
.caip{
    font-size: 30px;
    color: white;
    width: 120px;
    height: 40px;
    background-color:red; 
    margin: 10px auto;
}
.caiul{
    
    height: 300px;
    /* border: 1px black solid; */
}
.caiul li{
    list-style: none;
    height: 280px;
    width: 190px;
    /* border: 1px blue solid; */
    display: inline-block;
    margin-left: 15px;
}
.caiul li img{
    width: 185px;
    height: 200px;
}
</style>
