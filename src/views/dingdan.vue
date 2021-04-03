<template>
    <div class="dingdan">
        <Headers />
       
        <ul class="zhong">
                <li>
                    1.选择商品
                </li>
                <li>
                   2.订单信息
                </li>
                <li style="background-color: orange;">
                 3.支付订单
                   
                </li>
                <li>
                   4.收取商品
                </li>
        </ul>
        <div>
             <el-table
                :data="tableData"
                border
                    style="width: 100%">
                <el-table-column
                prop="date"
                label="订单编号"
                width="325">
                </el-table-column>
                <el-table-column
                prop="name"
                label="商品名称"
                width="325">
                </el-table-column>
                <el-table-column
                prop="address"
                label="订单金额"
                width="325">
                </el-table-column>
                <el-table-column
                prop="abc"
                label="应付金额"
                width="325">
                </el-table-column>
            </el-table>
        </div>
        <p class="ying">应付总金额<span class="qian">84.71</span></p>
        <p>以下支付平台大多银行卡</p>
        <div class="aa">
             <el-radio v-model="radio" label="1"><img src="../../public/img/base/wx_10127.jpg"></el-radio>
            <el-radio v-model="radio" label="2"><img src="../../public/img/base/zfb_8129.jpg"></el-radio>
            <p>
                <a href="">确认无误，支付</a>
            </p>
        </div>
        
        <footers />

    </div>
</template>

<script>
import Headers from '../components/Headers.vue';
import footers from '../components/footers.vue';
  export default {
      components: {
        Headers,
    footers,
  },
    data() {
      return {
          radio: '1',
        tableData: [{
          date: '113514531313',
          name: '中国',
          address: ' 84.71',
          abc:'84.71'
        }, ]
      }
    }
  }
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  color: black;
}
.dingdan {
  width: 1300px;
  height: 700px;
  margin: 0 auto;
  /* border: 1px red solid; */
}
.zuo {
  float: left;
  width: 300px;
  height: 30px;
  border: 1px rebeccapurple solid;
}
.zuo li {
  line-height: 30px;
  list-style: none;
  display: inline-block;
  height: 30px;
  /* border: 1px rebeccapurple solid; */
}
.zuo li a {
  text-decoration: none;
}
.ali {
  color: orangered;
}
.you {
  float: right;
  width: 450px;
  height: 30px;
  border: 1px rebeccapurple solid;
}
.you li {
  line-height: 30px;
  list-style: none;
  display: inline-block;
  height: 30px;
  margin-left: 15px;
}
.you li a {
  text-decoration: none;
}
.zhong {
  width: 1000px;
  height: 60px;
  margin: 50px auto;
}
.zhong li {
  background-color: black;
  list-style: none;
  width: 250px;
  height: 60px;
  display: inline-block;
  font-size: 30px;
  color: white;
  line-height: 60px;
  text-align: center;
}
/* .kehu{

    background-color: orange;
} */
.el-dropdown-link {
    cursor: pointer;
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.qian{
    color: orangered;
}
.ying{
    margin-top: 20px;
}
.aa p{
    width: 120px;
    height: 30px;
    background-color: orangered;
    margin-left: 20px;
}
.aa p a{
    text-decoration: none;
    color: white;
    line-height: 30px;
    text-align:center  ;
}
.xia{
    width: 1000px;
    height: 30px;
    border: 1px chartreuse solid;
    margin: 10px auto;
}
.xia ul li{
    width: 90px;
    margin-left: 20px;
    display: inline-block;
}
.di{
    width: 800px;
    height: 100px;
    margin: 100px auto;
    background-color: gainsboro;
}
.di p{
    width: 700px;
    margin: 10px auto;
}
</style>
