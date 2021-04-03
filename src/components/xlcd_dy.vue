<template>
  <div class="memai">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          :default-openeds="['1', '2']"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="red"
        >
          <h5 id="mebq">我的大麦</h5>

          <el-submenu index="1">
            <span slot="title" list_name1="交易中心">交易中心</span>
            <el-menu-item-group>
              <el-menu-item index="1-1" list_name2="订单管理">订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <span slot="title" list_name1="账号中心">账号中心</span>
            <el-menu-item-group>
              <el-menu-item index="2-1" list_name2="个人信息">个人信息</el-menu-item>
              <el-menu-item index="2-2" list_name2="常用购票人">常用购票人</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <!-- 菜单内容主体 -->
      <el-col :span="20" class="caidanzhuti">
        <!-- 菜单列表 -->
        <ul class="caidanliebiao">
          <li>我的大麦</li>
          <i class="el-icon-arrow-right"></i>
          <li>交易中心</li>
          <i class="el-icon-arrow-right"></i>
          <li>订单管理</li>
        </ul>
        <!-- <damai></damai> -->
        <ddgl></ddgl>
        <!-- <grxx></grxx>
        <cygpr></cygpr> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import cygpr from "../components/grzx_dy/cygpr";
import damai from "../components/grzx_dy/damai";
import ddgl from "../components/grzx_dy/ddgl";
import grxx from "../components/grzx_dy/grxx.vue";
export default {
  data() {
    return {
      list_items:{
        yjcd:list_name1,
        ejcd:list_name2
      }
    }
  },
  components: {
    cygpr,
    damai,
    ddgl,
    grxx,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo {
  border-bottom: 1px rgb(223, 223, 223) solid;
}
#mebq {
  background-color: rgb(255, 51, 0);
  color: white;
  font-size: 14px;
  font-weight: 400;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  height: 56px;
  line-height: 56px;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
}
.tac {
  background-color: #fff;
}
.caidanzhuti {
  padding-left: 20px;
  box-sizing: border-box;
}
.caidanliebiao {
  background-image: linear-gradient(to bottom, #f1f1f1, #fff);
  border: 2px #f7f7f7 solid;
  padding-left: 15px;
  line-height: 35px;
  height: 35px;
}

.caidanliebiao li {
  display: inline-block;
  font-size: 13px;
  cursor: pointer;
}
</style>