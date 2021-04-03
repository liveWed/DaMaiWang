<template>
        <div class="WeChatPay">
        <div class="dingbu">
        <ul class="left">
            <li>Hi,欢迎来大麦</li>
            <li>
                [<el-link type="warning" class="dl">登录</el-link>
            </li>
            <li>
                <el-link type="info" class="dl">注册</el-link>] 
            </li>
            <li>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        我的大麦<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>

        <ul class="right">
            <li>
                大麦网微信
            </li>
            <li>
                手机版
            </li>
            <li>
               <el-dropdown>
                    <span class="el-dropdown-link">
                        客户服务<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        网站导航<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li>
                English
            </li>
        </ul>
    </div>
        <div class="neirong">
            <div class="nr_left">
                <p>
                    订单将在2小时后关闭,请及时付款
                </p>
                <p class="ewm">
                    
                    <!-- <erweimaVue></erweimaVue> -->

                </p>
                <p>
                    请使用微信扫一扫完成支付
                </p>
            </div>
            <div class="nr_right">
                <p>
                    大麦网订单
                </p>
                <p>
                    支付订单号:440001359748151
                </p>
                <p>
                    商品名称:132456
                </p>
                <p>
                    订单金额:￥ <span class="jine">61.551</span> 
                </p>
            </div>
        </div>
    </div>
</template>

<script>
// import erweimaVue from "../components/erweima.vue";
export default {
    components:{
        // erweimaVue
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.WeChatPay{
    background: #F5F5F5;
}
.dl{
    font-size: 16px;
}
.dingbu {
  width: 1300px;
  height: 40px;
  margin: 0 auto;
}
ul li {
  display: inline-block;
  list-style: none;
  line-height: 40px;
  color: black;
}
.left li {
  margin-right: 10px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.right li {
  margin-right: 20px;
}
.el-dropdown-link {
    cursor: pointer;
    font-size: 16px
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .logo{
      position: fixed;
      left: 350px;
  }
  .neirong{
      width: 1300px;
      height: 450px;
      background: white;
      margin: 0 auto;
      position: relative;
  }
  .ewm{
      margin: 30px; 
  }
  .ewm img{
      width: 160px;
  }
  .nr_left{
      width: 300px;
      text-align: center;
      position: relative;
      top: 100px;
      left: 100px;
  }
  .jine{
      color: red;
  }
  .nr_right{
      position: absolute;
      top: 150px;
      right: 350px;
  }
  .nr_right p{
      line-height: 40px;
  }
</style>


