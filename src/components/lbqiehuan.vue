<template>
    <div class="abc"> 
            <el-tabs v-model="activeName" @tab-click="handleClick" class="aa">
            <el-tab-pane label="热门推荐" name="first">
                <h1>热门推荐</h1>
                        <div class="mock"  :style="{ color: activeColor, fontSize: fontSize + 'px' }">
               
                            <p class="title" v-for="(item, index) in dat" :key="index">
                                <img :src="item.url[fn()]" alt="" class="TU">
                                
                            <span class="RMD">
                                <span>[{{ item.add }}]{{ item.addd }}</span>
                                <p>
                                    {{item.ad}}
                                </p>
                                <span>{{ item.sj }}</span>
                                <br>
                                <p>{{ item.shi }}</p>
                                {{ item.RMB}}---{{ item.A}}<span class="RMB">元               售票中</span>
                               
                                
                            </span>
                            
                        </p>
                    </div>
                </el-tab-pane>

            <el-tab-pane label="最近开场" name="second">
                <h1>最近开场</h1>
                     <div class="mock"  :style="{ color: activeColor, fontSize: fontSize + 'px' , width:size+'px',height:size+'px'}">
               
                            <p class="title" v-for="(item, index) in dat" :key="index">
                                <img :src="item.url[fn()]" alt="" class="TU">
                                
                            <span class="RMD">
                                <span>[{{ item.add }}]{{ item.addd }}</span>
                                <p>
                                    {{item.ad}}
                                </p>
                                <span>{{ item.sj }}</span>
                                <br>
                                <p>{{ item.shi }}</p>
                                {{ item.RMB}}---{{ item.A}}<span class="RMB">元               售票中</span>
                                
                                
                            </span>
                            
                        </p>
                    </div>
            </el-tab-pane>
                
            <el-tab-pane label="最新上架" name="third">
                            <h1>最新上架</h1>
                         <div class="mock"  :style="{ color: activeColor, fontSize: fontSize + 'px' }">
               
                            <p class="title" v-for="(item, index) in dat" :key="index">
                                <img :src="item.url[fn()]" alt="" class="TU">
                                
                            <span class="RMD">
                                <span>[{{ item.add }}]{{ item.addd }}</span>
                                <p>
                                    {{item.ad}}
                                </p>
                                <span>{{ item.sj }}</span>
                                <br>
                                <p>{{ item.shi }}</p>
                                {{ item.RMB}}---{{ item.A}}<span class="RMB">元               售票中</span>
                                
                                
                            </span>
                            
                        </p>
                    </div>
            </el-tab-pane>
            <div class="di">
                    <ul>
                        <li>
                            <el-button>共23页</el-button>
                        </li>
                        <li>
                            <el-button> 《 </el-button>
                        </li>
                        <li>
                            <el-button>1</el-button>
                        </li>
                        <li>
                            <el-button>2</el-button>
                        </li>
                        <li>
                            <el-button>></el-button>
                        </li>
                    </ul>
            </div>
            <div class="bth">
                <ul>
                    <li>
                        <el-button @click="BigDiv">大</el-button>
                    </li>
                    <li>
                        <el-button @click="SmallDiv">小</el-button>
                    </li>
                </ul>
                
                
            </div>
        </el-tabs>
        <div class="you">               
                            <p class="title" v-for="(item, index) in dat" :key="index">
                                <img :src="item.url[fn()]" alt="" class="pian">            
                            <span class="c">                          
                                <span>{{ item.sj }}</span>
                                <br>
                                                             
                            </span>                           
                        </p>  
        </div>
    </div>
</template>
<script>

export default {
    name: 'carrousel',
    data() {
        return {
            activeName: 'first',
            dat:[],
            fontSize: 20,
            activeColor: 'red'
        }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      BigDiv(e) {
          this.fontSize=30;
           this.activeColor='red';6
      },
      SmallDiv(e) {
          this.fontSize=20;
          this.activeColor='black';
      },
      fn:function(){
                var arr=(Math.floor(Math.random() * 5));
                return arr;
        }
    },
    mounted() {
      this.$http.get("/api/getData2").then((res) => {
      console.log(res.data);
      this.dat = res.data;
    });
  },

    
}
</script>
<style scoped>
.abc{
    width: 1300px;
    height: 1500px;
    /* border: 1px red solid; */
    margin: 0px auto;
}
.aa{
    position: relative;
    float: left;
    width: 950px;
    height: 1500px;
    /* border: 1px greenyellow solid; */
}
.mock{
    width: 900px;
    height: 1200px;
    /* border: 1px gold solid; */
}
.mock img{
    width: 200px;
    height: 220px;
}
.TU{
      float: left;
}
.you{
    background-color: gainsboro;
    height: 610px;
    width: 260px;
    float: right;
}
.you img{
    width: 100px;
    height: 100px;
}
.c{
    float: right;
}
.di ul li{
    display: inline-block;
    margin-left: 20px;
}
.bth{
    position: absolute;
    top: 30px;
    right: 20px;
}
.bth ul li{
    display: inline-block;
    margin-left:10px ;
}
</style>
