<template>
  <swiper class="se" ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="slid" v-for="(ite,index) in imgUrl" :key = 'index'>
        <img :src="ite" alt=""/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: 3000,
        // effect:'slide',
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      }
    };
  },
  props:['imgUrl'],
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // },
  },
  mounted() {
//     console.log("Current Swiper instance object", this.swiper);
//     this.swiper.slideTo(0, 1000, false);
  },
};
</script>
<style scoped>
.se {
  width: 1300px !important;
  height: 420px !important;
  overflow: hidden;
}
.slid {
  width:1300px;
  text-align: center;
  font-size: 3rem;
}

</style>
