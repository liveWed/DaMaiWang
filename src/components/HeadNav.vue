<template>
  <div class="headerNav">
    <router-link
      to="/shouye"
      class="links"
      active-class="active"
      @click.native="activeClick(0)"
    >
      全部商品分类
    </router-link>
    <ul class="list" v-if="tits[0].isShow">
        <!-- 使用 @mouseover 和 mouseout 实现 hover 事件 -->
      <li
        class="list-item"
        v-for="(item, index) in world"
        :key="index"
        @click.self="ctrl(index)"
        @mouseover="item.isShow = true"
        @mouseout="item.isShow = false"
      >
        {{ item.text }}
        <span
          class="el-icon-arrow-right"
          style="float: right; margin-right: 12px"
        ></span>
        <div v-show="item.isShow" class="sec-list">
          {{ item.text }}
        </div>
      </li>
    </ul>
    <router-link
      v-for="(ite, index) in tits.slice(1)"
      :key="index"
      class="links"
      active-class="active-red"
      @click.native="activeClick(index + 1)"
      :to="ite.link"
      >{{ ite.text }}</router-link
    >
  </div>
</template>
<script>
export default {
  name: "HeadNav",
  data() {
    return {
      tits: [
        { text: "全部商品分类", isShow: false },
        { text: "戏剧", isShow: false,link:'/xiqu'},
        { text: "体育", isShow: false ,link:'/tiyu'},
        { text: "亲子", isShow: false , link:'/qinzi'},
        { text: "舞蹈古典", isShow: false ,link :'/dance'},
        { text: "摇滚", isShow: false ,link :'/yaogun'},
      ],
      world: [
        { text: "演唱会", isShow: false },
        { text: "音乐会", isShow: false },
        { text: "歌剧话剧", isShow: false },
        { text: "曲苑杂坛", isShow: false },
        { text: "体育比赛", isShow: false },
        { text: "舞蹈芭蕾", isShow: false },
      ],
      // 存储图片地址
      imgUrl: [],
    };
  },
  methods: {
    //
    activeClick(ind) {
      for (let i = 0; i < this.tits.length; i++) {
        this.tits[i].isShow = false;
      }
      this.tits[ind].isShow = true;
    },
    // 读取mock中的图片
    imgData() {
      this.$http
        .get("")
        .then((result) => {
          this.imgUrl = result.data;
        })
        .catch((err) => {
          console.error();
        });
    },
    //    二级列表控制器
    ctrl(index) {
      // let lis = document.getElementsByClassName('list-item');
      // for(let i = 0; i < lis.length; i++){

      // }
      for (let i = 0; i < this.tits.length; i++) {
        this.world[i].isShow = false;
      }
      this.world[index].isShow = true;
    },
  },
  mounted() {
    let lin = document.getElementsByClassName("links")[0];
    let widt = lin.clientWidth;
    let heig = lin.clientHeight - 1;
    let ul = document.getElementsByClassName("list")[0];
    ul.setAttribute("style", "width:" + widt + "px;top:" + heig + "px");
    console.log(widt,heig);
    this.imgData();
    // bodys.click(function () {
    //   for (let i = 0; i < this.tits.length; i++) {
    //     this.world[i].isShow = false;
    //   } 
    //   console.log('dd');
    // });
  },
};
</script>
<style scoped>
.sec-list {
  position: absolute;
  left: 218px;
  top: 0;
  height: 420px;
  width: 500px;
  z-index: 9;
  background: rgba(255, 255, 255, 0.5);
}
.headerNav {
  position: relative;
  width: 1300px;
  margin: 0 auto;
  font-size: 17px;
  transition: all 1s;
  background: white;
}
.list-item {
  /* position: relative; */
  height: 25px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  padding: 15px 5px 15px 35px;
}
.headerNav .links {
  display: inline-block;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  padding: 18px 55px;
}
.active {
  background: black;
  color: white !important;
}
.active-red {
  background: #ff3c1b;
  color: white !important;
}
.list {
  position: absolute;
  /* top: 49px; */
  left: 0;
  z-index: 2;
  height: 421px;
  background: #ff3c1b;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
