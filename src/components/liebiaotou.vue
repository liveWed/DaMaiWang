<template>
    <div class="to">
            <p>
                <br/>
                共<span>23</span>个商品
            </p>
            <hr/>
            <div>
                   <p style="float:left">城市:</p> <el-radio-group v-model="radio1">
                    <el-radio-button label="全部" ></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="杭州"></el-radio-button>
                    <el-radio-button label="成都"></el-radio-button>
                    <el-radio-button label="重庆"></el-radio-button>
                    </el-radio-group>
                </div>
                <br />
                <div style="margin-top: 20px">
                        <p style="float:left">分类:</p><el-radio-group v-model="radio2">
                    <el-radio-button label="全部" ></el-radio-button>
                    <el-radio-button label="音乐"></el-radio-button>
                    <el-radio-button label="朗诵"></el-radio-button>
                    <el-radio-button label="曲苑杂坛"></el-radio-button>
                    <el-radio-button label="独奏" ></el-radio-button>
                    <el-radio-button label="管弦乐"></el-radio-button>
                    <el-radio-button label="合唱"></el-radio-button>
                    </el-radio-group>
                </div>
                <br />
                <div style="margin-top: 20px">
                    <p style="float:left">时间:</p>
                    <el-radio-group v-model="radio4"  >
                    <el-radio-button label="全部"></el-radio-button>
                    <el-radio-button label="今天"></el-radio-button>
                    <el-radio-button label="明天"></el-radio-button>
                     
                         <el-time-select
                        v-model="value"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"
                        placeholder="选择时间">
                    </el-time-select>
                    <el-time-select
                        v-model="value"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"
                        placeholder="选择时间">
                    </el-time-select>
                     
                </el-radio-group>
                    
                
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
             value: '',
             radio1: '全部',
        radio2: '全部',
        radio4: '全部'
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
.to{
    
    width: 1300px;
    height: 300px;
    /* background-color: gainsboro; */
    margin: 0px auto;
}
span{
    color: orangered;
    
}
/* el{
    margin-left: 10px;
} */
</style>
