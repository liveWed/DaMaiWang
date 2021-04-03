<template>
  <div class="headers">
   <div style="width:100%;background:#f7f7f7; border-bottom: 1px solid #969696;">
      <div class="tops">
      <span>
        HI,欢迎来大麦[
        <a href="login.vue" style="color: #ff3c1b; text-decoration: none"
          >登录</a
        >
        &nbsp;
        <a href="register.vue" style="color: black; text-decoration: none"
          >注册</a
        >
        ]
      </span>
      <span class="myDaMai"
        >我的大麦<span class="el-icon-arrow-down"></span
      ></span>
      <div class="right">
        <span class="titleText">大麦网微信</span>
        <span class="titleText">手机版</span>
        <span class="titleText"
          >客户服务<span class="el-icon-arrow-down"></span
        ></span>
        <span class="titleText"
          >网站导航<span class="el-icon-arrow-down"></span
        ></span>
        <span class="titleText">English</span>
      </div>
      <div class="selectBox"></div>
    </div>
   </div>
    <div class="headers-con">
      <router-link class="logo" to="/">
        <img src="../../public/img/logo.png" alt="" />
      </router-link>
      <select name="city" id="city">
        <option v-for="(item, index) in citys" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
      <div class="selectDiv">
        <input class="" type="text" placeholder="舞蹈 演出 娱乐……"/>
        <button class="selectBtn">搜索</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.selectDiv{
    position: absolute;
    left: 40%;
    top: 30px;
}
.selectDiv input{
    float: left;;
    width:300px;
    height: 40px;
    padding-left: 8px;
    outline: none;
    border: 3px solid #FF3C1B;
}
.selectDiv .selectBtn{
     float: left;
    border: none;
    background: #FF3C1B;
    border-radius: 0px;
    outline: none;
    color: #fff;
    height: 48px;
    width: 70px;
    margin-left: -2px;
}
.logo{
    float: left;
}
#city {
  border: none;
  outline: none;
  height: 50px;
  /* width: 80px;
     */
  background: #F5F5F5;
  padding: 0;
}
.headers-con {
 position: relative;
  margin: 0 auto;
  padding-top: 20px;
  width: 1300px;
  height: 110px;
}
.right {
  float: right;
  padding-right: 5px;
}
.titleText {
  padding: 0 10px;
}
.tops {
  background: #f7f7f7;
  width: 1300px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
}
.myDaMai {
  display: inline-block;
  padding: 0 5px;
}
</style>
<script>
export default {
  name: "Headers",
  data() {
    return {
      citys: [],
    };
  },
  mounted() {
    this.$http
      .get("/api/getCity")
      .then((result) => {
        this.citys = result.data;
        console.log(result.data);
      })
      .catch((err) => {
        console.error();
      });
  },
};
</script>