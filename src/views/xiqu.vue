<template>
  <div class="xiqu">
    <!-- 戏曲主体 -->
    <div class="xiqu_zhuti">
      <div class="zhuti zhuti_cnxh">
        <p :style="bgcimg">猜你喜欢</p>
        <div>
          <ul class="cnxh">
            <li v-for="(img, index) in tupian" :key="index" class="cnxh_lb">
              <img :src="img" alt="" />
              <p>小柯音乐剧 我变了,我...</p>
              <span class="huise">票价：</span>
              <span>￥110</span>
              <span class="huise">起</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="zhuti zhuti_jcjj">
        <p :style="bgcimg">精彩聚集</p>
        <div>
          <ul class="jcjj">
            <li class="lcimg"><img :src="tupian[1]" alt="" /></li>
            <li class="jcjj_lb">
              <div v-for="(img, index) in tupian" :key="index">
                <img :src="img" alt="" />
              </div>
            </li>
            <li class="lcimg"><img :src="tupian[2]" alt="" /></li>
          </ul>
        </div>
      </div>
      <div class="hdxzd">
        <div>
          <img :src="hdxzd" alt="" />
        </div>
        <div>
          <img :src="hdxzd" alt="" />
        </div>
        <div>
          <img :src="hdxzd" alt="" />
        </div>
      </div>
      <div class="tabfenlei">
        <el-tabs type="card">
          <el-tab-pane label="音乐会专区">
            <ul class="tabfenlei_lb">
              <li v-for="(img, index) in tupian1" :key="index">
                <img :src="img" alt="" />
                <div class="tabfenlei_wenben">
                  <h5>小柯音乐剧未来三部曲之《我变了，我没变》</h5>
                  <p>2018.1.8-2018.1.9</p>
                  <p>深圳市少年宫剧场</p>
                  <p>￥120起</p>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="舞蹈专区">
            <ul class="tabfenlei_lb">
              <li v-for="(img, index) in tupian2" :key="index">
                <img :src="img" alt="" />
                <div class="tabfenlei_wenben">
                  <h5>小柯音乐剧未来三部曲之《我变了，我没变》</h5>
                  <p>2018.1.8-2018.1.9</p>
                  <p>深圳市少年宫剧场</p>
                  <p>￥120起</p>
                </div>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="zhuti zhuti_rmph">
        <p :style="bgcimg">热门排行</p>
        <div>
          <ul class="rmph">
            <li
              v-for="(img, index) in tupian3"
              :key="index"
              :class="{ rmph_first: index == 0 }"
            >
              <img :src="img" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 戏曲主体底部-->
    </div>
    <div class="rili">
      <rili></rili>
    </div>
  </div>
</template>
<script>
import headers from "../components/Headers";
import banner from "../components/banner";
import headerNav from "../components/HeadNav";
import footers from "../components/footers";
import rili from "../components/calendat"
export default {
  data() {
    return {
      imgs: [
        "/img/qinzi/img_03.png",
        "/img/qinzi/img_03.png",
        "/img/qinzi/img_03.png",
        "/img/qinzi/img_03.png",
        "/img/qinzi/img_03.png",
      ],
      // 标题背景图片
      bgcimg: {
        background: 'url("/img/base/ribbon-totem.png") no-repeat 330px',
        height: "50px",
        "text-align": "center",
      },
      tupian: [],
      tupian1: [],
      tupian2: [],
      tupian3: [],
      hdxzd: "/img/qinzi/img_16.png",
    };
  },
  mounted() {
    this.$http
      .get("/api/getxiquimg")
      .then((res) => {
        this.tupian = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$http
      .get("/api/getxiquimg1")
      .then((res) => {
        this.tupian1 = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$http
      .get("/api/getxiquimg2")
      .then((res) => {
        this.tupian2 = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$http
      .get("/api/getxiquimg3")
      .then((res) => {
        this.tupian3 = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    banner,
    headerNav,
    headers,
    footers,
    rili
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
.rili{
  width: 1300px;
  margin: 20px auto;
  font-size: 20px;
}
.xiqu {
  background-color: #f5f5f5;
}
.huise {
  color: gainsboro;
}
.banners {
  width: 1300px;
  margin: 0 auto;
}
.banner img {
  width: 1300px;
}
.zhuti {
  margin-top: 20px;
}
.xiqu_zhuti {
  margin-top: 20px;
  padding: 20px 8px;
  border: 1px red solid;
  width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
}
.cnxh {
  display: flex;
}
.cnxh_lb {
  flex: 1;
  padding: 10px;
  text-align: center;
}
.cnxh_lb img {
  width: 100%;
  height: 260px;
}
.jcjj {
  display: inline-block;
  height: 580px;
}
.lcimg {
  display: inline-block;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  padding: 10px;
}
.lcimg img {
  height: 100%;
  width: 100%;
}
.jcjj_lb {
  display: inline-block;
  width: 50%;
}
.jcjj_lb > div {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  width: 33.3333333%;
  height: 50%;
}
.jcjj_lb > div > img {
  width: 100%;
  height: 100%;
}
.hdxzd div {
  display: inline-block;
  width: 33%;
  text-align: center;
}
.tabfenlei {
  margin-top: 10px;
}
.tabfenlei_lb li {
  display: inline-block;
  padding: 5px;
  box-sizing: border-box;
  width: 33%;
  height: auto;
}
.tabfenlei_lb li img {
  vertical-align: top;
  width: 54%;
  height: auto;
}
.tabfenlei_lb .tabfenlei_wenben {
  box-sizing: border-box;
  padding-left: 5px;
  display: inline-block;
  width: 46%;
}
.rmph {
  height: 420px;
}
.rmph li {
  float: left;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left:20px ;
  width: 26%;
  height: 50%;
}
.rmph li img {
  height: 100%;
}
.rmph_first {
  float: left;
    box-sizing: border-box;

  height: 100% !important;
  width: 20%  !important;
}
.rmph_first img {
  height: auto;
  width: 100%;
}
</style>