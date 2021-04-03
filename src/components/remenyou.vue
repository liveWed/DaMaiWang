<template>
         <div class="mock">    
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
  width: 950px;
  height: 500px;
  /* border: 1px red solid; */
  float:right;
}
.title {
    display: inline-block;
    
  /* border: 1px black solid; */
  width: 300px;
}
.RMD {
  float: right;
}
.title img{
    width: 150px;
    height: 200px;
}
</style>
