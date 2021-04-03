<template>
    <div class="juji">            
            <div class="mock">
                <p class="ji" v-for="(item, index) in dat" :key="index">
                     <img :src="item.jijuyou[index]" alt="">
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

    mounted() {
      

      this.$http.get("/api/getData111").then((res) => {
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
    width: 270px;
    height: 500px;
}
.mock{
width: 270px;
height: 500px;
/* border: 1px black solid; */
margin: 0 auto;
}
.mock img{
width: 270px;
height: 500px;
float: left;

}
</style>