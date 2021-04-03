<template>
    <div class="xiangqing_body02">
        <div class="body02_left">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 演出信息</span>
                <p class="jbxx">
                    <span class="jbxx1">
                        基本信息
                    </span>
                </p>
                <div>
                    <el-table
                        :data="tableData"
                        border
                        style="width: 70%; margin:15px 0 20px 100px;">
                        <el-table-column
                        prop="date"
                        label="演出时间"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="演出场馆">
                        </el-table-column>
                    </el-table>
                </div>
                
            </el-tab-pane>
            <el-tab-pane label="精彩剧评">消息中心</el-tab-pane>
            <el-tab-pane label="购买说明">角色管理</el-tab-pane>
            <el-tab-pane label="付款方式">定时任务补偿</el-tab-pane>
        </el-tabs>

        <p class="jbxx">
            <span class="jbxx1">
                项目介绍
            </span>
        </p>
        <p class="body_txt01">
            英文站入口
        </p>
        <p class="body_txt02">
            英文站购买链接: https://en.dami.cn/event/tickets_135693/
        </p>
        <p class="body_txt01">
            演出介绍
        </p>
        <div class="ycjs">
            <p>
                世界经典原版音乐剧《猫》
            </p>
            <p>
                猫的足迹
            </p>
            <p>
                超过20种语言，3D个国家，3D座城市，730D万观众超过20种语言，30个国家，3QO座城市，730Q万观众超过20种语言，30个国家，3Q0座城市，7300万观众超过2D种语言，30个国家，30D座城市，7300万观众超过20种语言，30个国家，3O0座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众
            </p>
        </div>
        <p class="body02_tu1">
            <img src="../../public/img/base/img_01.png" alt="">
        </p>
        <div class="ycjs ycjs1">
            <p>
                伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一
            </p>
            <p>
                伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一
            </p>
            <p>
                伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一
            </p>
        </div>
        <p class="jbxx">
            <span class="jbxx1">
                写剧评
            </span>
        </p>
        <p class="dafen">
            打个分吧 : 
            <span class="xingxing">
                ★ ★ ★ ★ ★  <span style="color:red">0</span>
            </span>
        </p>
        <p class="kuang">
            <textarea cols="100" rows="8" placeholder="写个评价吧10-10000字...">

            </textarea>
        </p>
        <p class="kuang">
            <button class="btn_pingjia">
                评价
            </button>
        </p>
    </div>
    <div class="body02_right">
        <ul>
            <li class="right_txt02">
                <p class="right_txt01">热门推荐</p>
            </li>
            <li>
                <p class="right_tu1">
                    <img src="../../public/img/base/img_01.png" alt="">
                </p>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>
                    <span class="yuefen">
                        ( 11月)
                    </span>
                </p>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>
                    <span class="yuefen">
                        ( 11月)
                    </span>
                </p>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>
                    <span class="yuefen">
                        ( 11月)
                    </span>
                </p>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>
                    <span class="yuefen">
                        ( 11月)
                    </span>
                </p>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>
                    <span class="yuefen">
                        ( 11月)
                    </span>
                </p>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>
                    <span class="yuefen">
                        ( 11月)
                    </span>
                </p>
            </li>
            <li class="right_txt02">
                <p class="right_txt01">热门推荐</p>
            </li>
            <li>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>( 11月)
                </p>
            </li>
            <li>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>( 11月)
                </p>
            </li>
            <li>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>( 11月)
                </p>
            </li>
            <li>
                <p class="right_txt02">
                    大型多媒体励志互动儿童剧《爱丽丝梦游仙境》
                    <br>( 11月)
                </p>
            </li>
        </ul>
    </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          address: "光华路5号国际会展中心三楼湖西岛音乐厅"
        },
        {
          date: "2016-05-04",
          address: "光华路5号国际会展中心三楼湖西岛音乐厅"
        }
      ]
    };
  }
};
</script>


<style scoped>
.xiangqing_body02{
    height: 1800px;
    width: 1300px;
    /* border: 1px rebeccapurple solid */
}
.body02_left {
  width: 65%;
  float: left;
  /* border: 1px salmon solid; */
}
.jbxx {
  height: 30px;
  border-left: 2px red solid;
}
.jbxx1 {
  font-size: 22px;
  line-height: 30px;
  margin: 10px;
}
.body_txt01 {
  height: 35px;
  background: #eeeeee;
  font-size: 22px;
  margin: 15px 0 0 100px;
  color: gray;
}
.body_txt02 {
  height: 80px;
  line-height: 80px;
  margin-left: 100px;
}
.ycjs {
  margin-left: 100px;
  font-size: 14px;
}
.body02_tu1 {
  text-align: center;
}
.ycjs1 {
  margin-bottom: 30px;
}
.xingxing {
  margin-left: 5px;
  font-size: 22px;
}
.dafen {
  margin-left: 100px;
}
.kuang {
  margin: 10px 0 20px 100px;
}
.btn_pingjia {
  width: 150px;
  height: 50px;
  border: none;
  color: white;
  background: #ff3c1b;
  border-radius: 10px;
}
.right_txt01{
    font-size: 22px;
    line-height: 50px;
}
.right_txt02{
    display: block;
    border-bottom: 1px gray solid;
}
.yuefen{
    display: block;
    text-align: center;
}
.right_tu1{
    display: block;
    text-align: center;
}
</style>

