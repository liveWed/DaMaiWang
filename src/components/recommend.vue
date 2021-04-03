<template>
  <div class="cion">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#FF3C1B"
      
    >
      <el-menu-item index="1">今日推荐</el-menu-item>
      <el-menu-item index="2">即将发售</el-menu-item>
    </el-menu>
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item,index) in dat" :key="index">
          <div class="grid-content bg-purple">
             <img :src="item.imgSrc" alt="">
             <p>{{item.titles}}</p>
             <p>票价 : ￥ <span>{{item.pice.number}}</span></p>
          </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name : 'recommend',
  data(){
    return{
      dat:[],
      // 今日推荐数据
      fdat:[],
      // 即将发售数据
      rdat:[]
    }
  },
  methods:{
    getData(str){
      this.$http.post('/api/getImgUrl').then((result) => {
        // str = result.data;
        this.dat = result.data;
      }).catch((err) => {
        console.log( err )
      });
    },
    // getD(index){
    //   if(index == 1 || index == "1"){
    //     this.dat = this.fdat;
    //   }else{
    //     this.dat = this.rdat;
    //   }
    // },
  },

  mounted(){
    this.getData();
    // this.getData(this.fdat);
    // this.getData(this.rdat);
  }
}
</script>
<style scoped>
.grid-content img{
  width: 100%;
  max-height: 245px;
}
.cion {
 box-sizing: border-box;
  width: 1300px;
  margin: 0 auto;
  padding: 8px 15px;
  background: white;
}
.el-row {
  display: block;
  margin: 20px auto;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background:white !important;
}
.bg-purple {
  background: white;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>