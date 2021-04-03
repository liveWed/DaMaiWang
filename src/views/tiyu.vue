<template>
  <div class="box">
    <div class="tiyuVue">
      <div>
    
       
      </div>
        <div class="top">
            <h3 class="cnxh">
            猜你喜欢
            </h3>
            <div class="mock">
            <p class="title" v-for="(item, index) in tableDate" :key="index">
              <span class="RMD">
                  <span class="tupian01">
                      <img :src=" item.url[fn()] " alt="">
                  </span>
                <p>{{ item.name }}</p>
                <span class="shou">售价</span>
              </span>
              {{ item.RMB | addPriceIcon }}
              <span class="RMB">起</span>
            </p>
          </div>
        </div>
        <tiyu_body01></tiyu_body01>
        <br><br>
        <div>
          <tiyu_body02></tiyu_body02>
        </div>
        <calendatVue></calendatVue>
    </div>
    <footerVue></footerVue>
  </div>
    
</template>
<script>
import tiyu_body01 from "../components/tiyu_body01.vue";
import tiyu_body02 from "../components/tiyu_body02.vue"
import dingbuNav from "../components/dingbuNav.vue";
import footerVue from "../components/footers.vue"
import HeadNavVue from "../components/HeadNav.vue"
import calendatVue from "../components/calendat.vue"
export default {
  data() {
    return {
      tableDate: [],
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            loop:true
          },
          // Some Swiper option/callback...
        }
    };
  },
  components: {
    tiyu_body01,
    tiyu_body02,
    footerVue,
    dingbuNav,
    HeadNavVue,
    calendatVue
  },
  methods: {
    fn: function() {
      var suijishu = Math.floor(Math.random() * 6);
      return suijishu;
    }
  },
  mounted() {
    this.$http.get("/api/getData").then(res => {
      console.log(res.data);
      this.tableDate = res.data;
    });
  },
  filters: {
    //处理函数
    addPriceIcon(value) {
      return "￥" + value;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.tiyuVue {
  width: 1300px;
  margin: 0 auto;
  position: relative;
}
.cnxh {
  height: 50px;
  background: url("../../public/img/base/ribbon-totem.png") no-repeat 52% 0%;
  text-align: center;
  /* border: 1px rebeccapurple solid; */
}
.cnxh1 {
  text-align: center;
}
.top {
  height: 350px;
  position: relative;
  /* border: 1px rebeccapurple solid; */
}
ul li img {
  width: 150px;
}
ul li {
  margin-left: 57px;
}
ul {
  border: 1px saddlebrown solid;
}
.mock {
  /* border: 1px red solid; */
  height: 200px;
  position: absolute;
  left: 55px;
}
.title {
  float: left;
  margin-right: 30px;
}
.tupian01 img {
  width: 150px;
  height: 200px;
}
.swiper{
  margin-bottom: 50px;
}
</style>
