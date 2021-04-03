<template>
  <div class="top">
    <div class="topbq left">
      <span style="color:#4F566C">HI,欢迎来大麦</span>
      <span>[</span>
      <span>
        <router-link to="/grzx" style="color: red"><span class="dian">·</span>巴巴巴巴</router-link>
        <router-link to="/#"><span class="dian">·</span>退出</router-link>
      </span>
      <span>]</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>我的大麦</span>
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="right">
      <ul>
        <li><a href="#">大麦网微信</a></li>
        <li><a href="#">手机版</a></li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>客户服务</span>
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>网址导航</span>
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li><a href="#">English</a></li>
      </ul>
    </div>
  </div>
</template>
        
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
};
</script>
<style scoped>
* {
  font-size: 14px;
}
a {
    color: black;
}
.left {
    float: left;
}
.right{
    float: right;
}
.right>ul{
    display: inline-block;
}
.right>ul li{
    display: inline-block;
    margin: 0 10px;
}
.top {
    width: 1300px;
    margin: 0 auto;
  height: 50px;
  line-height: 50px;
  
}
.el-dropdown {
  color: black;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>