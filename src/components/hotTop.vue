<template>
  <div class="hotTop">
    <h3 class="tit">热门演出排行 <span style="float: right">查看更多</span></h3>
    <ul>
      <li v-for="(item,index) in dat" :key="index">
        <span>{{index+1}}</span>{{item}}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.hotTop {
  background: #fff;
  padding: 8px;
  box-sizing: border-box;
  width: 300px;
  height: 420px;
}
ul {
  padding: 0;
  margin: 0;
}
.hotTop ul li {
  list-style: none;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
}
.tit {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
ul li span {
  display: inline-block;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  color: #fff;
  padding: 5px 10px;
  margin-right: 2px;
  background: #808080;
}
ul li:nth-child(1) span {
  background: red !important;
}
ul li:nth-child(2) span {
  background: red !important;
}
ul li:nth-child(3) span {
  background: red !important;
}
</style>
<script>
export default {
    name : 'hotTop',
    data(){
        return{
            dat : []
        }
    },
 mounted() {
    this.$http
      .get("/api/gethotTop")
      .then((result) => {
        this.dat = result.data;
        console.log("homeCion");
        console.log(result.data);
      })
      .catch((err) => {
        console.error();
      });
  },
}
</script>
