<template>
    <div class="dingbuNav">
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
    
        <p class="logo">
            <img src="../../public/img/logo-334-120.png" alt="">
        </p>
        <p class="sousuo">
            <input type="text" class="sousuo1">
            <button class="sousuo2">搜索</button>
        </p>
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.dl{
    font-size: 16px;
}
.dingbuNav{
    position: relative;
    /* background: #f7f7f7; */
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
      position: absolute;
      left: 80px;
  }
  .sousuo{
        position: relative;
        left: 200px;
        top: 10px;
  }
  .sousuo1{
      width: 500px;
      height: 40px;
      border: 2px #FF3C1B solid;
  }
  .sousuo2{
      height: 44px;
      width: 80px;
      border: 1px #FF3C1B solid;
      background: #FF3C1B;
      color: white;
      font-size: 18px;
      position: relative;
      top: 3px;
  }
</style>
