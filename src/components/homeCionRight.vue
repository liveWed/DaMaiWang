<template>
    <div class="ite">
        <el-image class="imgs" fit="fill" :src='imgSrc' lazy></el-image>
        <div class="tex">
            <p>{{titleText}}</p>
            <span>{{pice}}元</span>
        </div>
    </div>
</template>
<script>
export default {
    name : 'homeCionRight',
    data(){
        return{
            
        }
    },
    props:['imgSrc','titleText','pice',"index"]
}
</script>
<style scoped>
.ite{
    position: relative;
    box-sizing: border-box;
    width: 330px;
    height: 330px;
    color: #fff;
}
.imgs{
    width: 100%;
    height: 100%;
}
.tex{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 5px;
    background: rgba(255, 61, 29, .6);
}
.tex p{
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
}
.tex span{
    padding: 5px;
}
</style>