<template>
    <div class="footers">
        <div class="footersCon">
            <ul v-for="ite in dat.dat" :key="ite.id">
                <li v-for="(ites,i) in ite.texts" :key = "i">
                    <span v-if="[(ite.id == 3 || ite.id == 4) && i != 0]">{{ites}}</span>
                    <img v-if="ite.id == 3 || ite.id == 4" :src="ite.url"/>
                </li>
            </ul>
        </div>
        <div class="footersNav">
            <p>
                <span v-for="(item,index) in dat.companys" :key="index">
                   <a :href="item.theHref">{{item.names}}</a>
                   <span>{{item.dec}}</span>
                </span>
            </p>
            <p class="footerImg">
                <img v-for="(ite , i ) in dat.imgUrls" :key="i" :src="ite" alt="">
            </p>
        </div>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.footerImg{
    margin-top: 15px;
}
.footerImg img{
    max-height:40px;
    margin: 10px 10px;
}
.footersNav{
    width: 1300px;
    margin: 10px auto;
    color:#848484;
    text-align: center;
}
.footersNav a{
    color:#848484;
    padding: 0 6px;
    text-decoration: none;
}
.footers{
    background: #E6E6E6;
    width: 100%;
    height: 320px;
    box-sizing: border-box;
}
.footersCon{
    display: flex;
    justify-content: space-between;
    width:1300px;
    margin: 0px auto;
    padding: 15px 0;
    border-bottom: 2px solid #FF3C1B;
}
.footersCon ul{
    margin: 0;
    padding: 0;
}
.footersCon ul li{
    font-size: 13px;
    padding: 5px 0;
    margin: 0;
    list-style: none;
}
.footersCon ul li span{
    display: block;
}
.footersCon ul li img{
    padding-top: 15px;
}
.footersCon ul li:first-child{
    padding-bottom: 15px;
    font-size: 17px;
}
</style>
<script>
export default {
    name:'Flooter',
    data(){
        return{
            dat : []
        }
    },
    mounted(){
        this.$http.get('/api/flootersData').then((result) => {
            this.dat = result.data;
            console.log(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }
}
</script>