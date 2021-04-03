<template>
  <div class="yaoGun">
    <!-- 今日推荐  -->
    <recommend />
    <!-- 主体 -->
    <div class="imgCion">
      <div class="top">
        <p>精彩聚集</p>
        <img src="img/base/ribbon-totem.png" />
      </div>
      <div class="content">
        <div>
          <img :src="imgSrc[0]" alt="" />
        </div>
        <div class="middleDiv">
          <img
            v-for="(ite, index) in imgSrc.slice(2)"
            :key="index"
            :src="ite"
            alt=""
          />
        </div>
        <div>
          <img :src="imgSrc[0]" alt="" />
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="ad">
      <el-image src="img/qinzi/img_18.png" lazy></el-image>
      <el-image src="img/qinzi/img_16.png" lazy></el-image>
      <el-image src="img/qinzi/img_17.png" lazy></el-image>
    </div>
    <!-- 热敏排行 -->
    <div class="imgCion">
      <div class="top">
        <p>热门排行</p>
        <img src="img/base/ribbon-totem.png" />
      </div>
      <div class="show">
        <home-cion-right
          :imgSrc="imgSrc[0]"
          pice="123"
          titleText="不一样的方式"
        ></home-cion-right>
        <div class="imgRext">
          <home-items
          style="width:330px;height:180px"
            v-for="(ite, index) in dat[0].imgUrl"
            :key="index"
            :imgsrc="ite"
            :titles="dat[0].titles[index]"
            :times="dat[0].times[index]"
            :address="dat[0].address[index]"
            pice = '125'
          ></home-items>
        </div>
      </div>
    </div>
    <!-- 日曆插件 -->
    <div class="timeBook">
      <calendat/>
    </div>
  </div>
</template>
<script>
import homeCionRight from "../components/homeCionRight";
import HomeItems from "../components/homeItems.vue";
import recommend from "../components/recommend";
import calendat from "../components/calendat.vue"
export default {
  name: "Home",
  data() {
    return {
      dat: [],
      imgSrc: [
        "img/base/cardimg1.jpg",
        "img/base/cardimg2.jpg",
        "img/base/cardimg3.jpg",
        "img/base/cardimg4.jpg",
        "img/base/cardimg5.jpg",
        "img/base/cardimg6.jpg",
        "img/base/cardimg7.jpg",
        "img/base/cardimg8.jpg",
      ],
    };
  },
  components: {
    recommend,
    homeCionRight,
    HomeItems,
    calendat
  },
  mounted() {
    this.$http
      .get("/api/getCion")
      .then((result) => {
        this.dat = result.data;
        console.log("homeCion");
        console.log(result.data);
      })
      .catch((err) => {
        console.error();
      });
  },
};
</script>
<style scoped>
.show {
  display: flex;
  height: 400px;
  overflow: hidden;;
}
.imgRext {
  display: flex;
  flex-wrap: wrap;
}
.ad {
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  width: 1300px;
}
.ad el-image {
  width: 380px;
  height: 139px;
}
.middleDiv {
  display: flex;
  flex-wrap: wrap;
  width: 650px;
  justify-content: space-around;
}
.top {
  text-align: center;
}
.top img {
  margin-top: -30px;
  margin-left: 30px;
}
.content {
  height: 420px;
  box-sizing: border-box;
  display: flex;
  width: 1300px;
}
.content div:first-child {
  width: 300px;
  height: 400px;
}
.content div:first-child img {
  width: 100% !important;
  height: 100% !important;
}
.content div:last-child img {
  width: 100% !important;
  height: 100% !important;
}
.content div:last-child {
  width: 300px;
  height: 400px;
}
.content img {
  width: 150px;
  height: 180px;
  padding: 10px 20px;
}
.imgCion {
  background: #fff;
}
.yaoGun {
  width: 1300px;
  margin: 0 auto;
}
</style>