
<template>
    <div class="juji">            
            <div class="mock">
                <p class="ji" v-for="(item, index) in dat" :key="index">
                     <img :src="item.juji[fn()]" alt="">
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
      

      this.$http.get("/api/getData1").then((res) => {
      console.log(res.data);
      this.dat = res.data;
    });
  },
  }
  
</script>
<style scoped>
.juji{
    /* border: 1px red solid; */
    margin: 0 auto;
    width: 680px;
    height: 500px;
}
.mock{
width: 680px;
height: 500px;
/* border: 1px black solid; */
margin: 0 auto;
}
.mock img{
width: 220px;
height: 240px;
float: left;

}
</style>