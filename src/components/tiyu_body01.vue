<template>
    <div class="tiyu_body01">
        <div class="top">
            <h3 class="cnxh">
            精彩效果
            </h3>
            <p class="datu_left">
                <img src="../../public/img/base/big4.jpg" alt="" width="300px" height="580px">
            </p>
            <div class="mock">
            <p class="title" v-for="(item, index) in tableDate" :key="index">
                  <span class="tupian01">
                      <img :src=" item.url[fn()] " alt="">
                  </span>
            </p>
          </div>
        <p class="datu_right">
            <img src="../../public/img/base/big2.jpg" alt="" width="300px" height="580px">
        </p>
        </div>
        <div class="zhongjian">
            <ul>
                <li>
                    <img src="../../public/img/qinzi/img_16.png" alt="">
                </li>
                <li>
                    <img src="../../public/img/qinzi/img_17.png" alt="">
                </li>
                <li>
                    <img src="../../public/img/qinzi/img_18.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableDate: [],
      activeName: "first"
    };
  },
  methods: {
    fn: function() {
      var suijishu = Math.floor(Math.random() * 6);
      return suijishu;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.$http.get("/api/getData").then(res => {
      this.tableDate = res.data;
    });
  }
};
</script>

<style scoped>
.top {
  margin-bottom: 20px;
}
.mock {
  display: inline-block;
  width: 690px;
  height: 600px;
  /* border: 1px seagreen solid; */
  position: relative;
  top: 25px;
}
.cnxh {
  height: 50px;
  background: url("../../public/img/base/ribbon-totem.png") no-repeat 52% 0%;
  text-align: center;
  /* border: 1px rebeccapurple solid; */
}
.tupian01 img {
  width: 100%;
  height: 100%;
}
.tupian01 {
  width: 100%;
  height: 100%;
}
.tupian02{
  display: inline-block;
  float: left;
}
.datu_left {
  display: inline-block;
}
.datu_right {
  display: inline-block;
}
.title {
  float: left;
  width: 30%;
  height: 45%;
  margin: 10px;
}
.zhongjian {
  /* height: 300px; */
  width: 100%;
  /* border: 1px saddlebrown solid; */
}
.zhongjian ul li {
  margin: 25px;
}
</style>
