<template>
    <div class="xiangqing_body01">  
        <div class="qmdj_left">
            <span class="tupian01">
                <img src="../../public/img/base/img_01.png" alt="">
            </span>
            <div class="qmdj">
                <h2 class="txt01">大型多媒体励志互动儿童剧《奇门遁甲》(11月)</h2>
                <p class="txt02">
                "奇门遁甲"
                </p>
                <p class="buzhou">
                    <el-steps :active="active" finish-status="success">
                    <el-step finish-status="success" title="项目待定"></el-step>
                    <el-step finish-status="success" title="预售 预定"></el-step>
                    <el-step finish-status="success" title="售票中"></el-step>
                    <el-step title="演出开始"></el-step>
                    </el-steps>
                </p>
            </div>
            <div class="showtime">
                <p class="showtime1">
                    演出时间 ：
                </p>
                <button class="shijian">
                    2020-3-28-10:00
                </button>
                <button class="shijian">
                    2020-3-28-10:00
                </button>
                <button class="shijian">
                    2020-3-28-10:00
                </button>
                <button class="shijian">
                    2020-3-28-10:00
                </button>
            </div>
            <div class="selectFare">
                <p class="selectFare1">
                    选择票价 :
                </p>
                <button class="selectFare2" disabled>
                    80元
                </button>
                <button class="selectFare2">
                    90元
                </button>
                <button class="selectFare2">
                    100元
                </button>
            </div>
            <div>
                <button class="ksxz">
                选座购买
                </button>
            </div>
        </div>
        <div class="qmdj_right">
            <ul>
                <li>
                    <p>
                        大麦网评分:
                    </p>
                    <p >
                        <pingfenVue></pingfenVue>
                        <!-- <span class="pf">
                            4.6   
                        </span>
                        <span class="xingxing">
                            ★ ★ ★ ★ ★
                        </span> -->
                        <span style="color : red">3000</span>人参与评论
                    </p>
                </li>
                <li>
                    <p class="right_txt1">
                        演出时间
                    </p>
                    <p>
                        2020-3-26 ~ 2021-4-3
                    </p>
                </li>
                <li>
                    <p class="right_txt1">
                        演出场馆
                    </p>
                    <p>
                        中国儿童中心剧院-海淀
                    </p>
                </li>
                <li>
                    <p class="right_txt1">
                        票品支持
                    </p>
                    <p>
                        返积分
                    </p>
                </li>
                <li>
                    <p class="right_txt1">
                        实票配送
                    </p>
                    <p>
                        同城满100.00元免运费,不满收10.00元，发货后1-3天到达
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import pingfenVue from "../components/pingfen.vue"
export default {
  data() {
    return {
      active: 2
    };
  },
  components:{
    pingfenVue,
  },
  mounted() {},
  methods: {

  }
};
</script>

<style scoped>
.tupian01 {
    float: left;
}
.qmdj_left{
    display: inline-block;
    width: 65%;
    /* border: 1px red solid; */
    float: left;
}
.qmdj_right{
    display: inline-block;
    width: 35%;
    /* border: 1px rebeccapurple solid; */
}
.txt01 {
  margin-bottom: 20px;
}
.txt02 {
  margin-bottom: 20px;
}
.buzhou {
  width: 80%;
}
.showtime1 {
  /* height: 80px; */
  line-height: 105px;
  float: left;
}
.selectFare1 {
  line-height: 105px;
  float: left;
  position: relative;
  top: -20px;
}
.shijian {
  height: 40px;
  width: 130px;
  margin: 15px 10px;
  border: none;
  text-align: center;
}
.selectFare2 {
  height: 40px;
  width: 130px;
  margin: 10px;
  border: none;
  text-align: center;
}
.ksxz {
  width: 120px;
  height: 40px;
  background: #ff3c1b;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
}
.qmdj_right ul li{
    display: block;
    border-bottom: 2px gray dotted;
}
.pf{
    font-size: 26px;
    color : red;
}
.xingxing{
    font-size: 22px;
    color : red;
}
.right_txt1{
    font-size: 18px;
}

</style>
