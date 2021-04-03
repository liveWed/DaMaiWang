<template>


    <swiper class="se" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="slid"><img src="../../public/img/qinzi/img_03.png"></swiper-slide>
      <swiper-slide class="slid"><img src="../../public/img/qinzi/img_03.png"></swiper-slide>
      <swiper-slide class="slid"><img src="../../public/img/qinzi/img_03.png"></swiper-slide>
      <swiper-slide class="slid"><img src="../../public/img/qinzi/img_03.png"></swiper-slide>
      <swiper-slide class="slid"><img src="../../public/img/qinzi/img_03.png"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  
</template>

<script>

  export default {
    components: {

  },
    name: 'carrousel',
    data() {
      return {
        tableData:[],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            loop:true
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
  },
  }
  
</script>
<style scoped>

*{
  padding: 0;
  margin: 0;
}
.se{
  width: 1300px;
  /* border: 1px red solid; */
}
swiper-slide{
  background: orange;
}
.slid{
  text-align: center;
  font-size: 3rem;
}
/* .slid:nth-child(odd){
  background: orange;

} */
</style>