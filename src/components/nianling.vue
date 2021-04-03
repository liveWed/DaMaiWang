<template>
         <div class="mock"> 
             <ul>
                 <li>
                     <img src="../../public/img/qinzi/tabsChild_1_hover.png" alt="">
                 </li>
                 <li>
                     <img src="../../public/img/qinzi/tabsChild_3.png" alt="">
                 </li>
                 <li>
                     <img src="../../public/img/qinzi/tabsChild_6.png" alt="">
                 </li>
                 <li>
                     <img src="../../public/img/qinzi/tabsChild_12.png" alt="">
                 </li>
                </ul>      
            <p class="title" v-for="(item, index) in dat" :key="index">
                                <img :src="item.urll[fn()]" alt="" class="TU">
                                
                            <span class="RMD">
                                <span>[{{ item.add }}]{{ item.addd }}</span>
                                <p>
                                    {{item.ad}}
                                </p>
                                <span>{{ item.sj }}</span>
                                <br>
                                <p>{{ item.shi }}</p>
                                {{ item.RMB}}---{{ item.A}}<span class="RMB">元               售票中</span>
                                <p>电子票</p>
                                
                            </span>
                            
                        </p>
                    </div>
</template>
<script>
export default {
  name: "carrousel",
  data() {
    return {
      dat: []
    };
  },
 methods:{
        fn:function(){
                var arr=(Math.floor(Math.random() * 6));
                return arr;
        }
    },
  mounted() {
    this.$http.get("/api/getData22").then(res => {
      console.log(res.data);
      this.dat = res.data;
    });
  }
};
</script>
<style scoped>

.mock {
  width: 1300px;
  height: 600px;
  /* border: 1px red solid; */
  margin: 0px auto;
}
.title {
    display: inline-block;
    padding-left: 20px;
  /* border: 1px black solid; */
  width: 400px;
}
.RMD {
  float: right;
  margin-right: 30px;
}
.title img{
    width: 200px;
    height: 200px;
}
ul li{
    display: inline-block;
    padding-left: 10px;
}
</style>
