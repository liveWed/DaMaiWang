<template>
  <div class="order">
    <div class="choose-seat-head">
      <div class="head-first">1 选择商品</div>
      <div class="head-second">2 订单确认</div>
      <div class="head-third">3 订单支付</div>
      <div class="head-third">4 收取商品</div>
    </div>
    <div class="cion">
      <tables>
        <el-menu-item index="1" slot="menu">实名证件信息</el-menu-item>
        <div class="cion" slot="divCion">
          <span>购票人 : </span>
          <span class="btn" @click="open">选择购票人</span>
        </div>
      </tables>
      <tables>
        <el-menu-item index="1" slot="menu">选择付款方式</el-menu-item>
        <div class="cion" slot="divCion">
          <!-- 单选按钮 -->
          <el-radio-group v-model="radio" text-color="#000" fill="#FF3D1D">
            <el-radio :label="1">网上付款</el-radio>
          </el-radio-group>
        </div>
      </tables>
      <tables>
        <el-menu-item index="1" slot="menu">商品清单</el-menu-item>
        <div class="cion" slot="divCion">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="商品名称" width="180">
            </el-table-column>
            <el-table-column prop="seatNum" label="座位号" width="180">
            </el-table-column>
            <el-table-column prop="price" label="价格"> </el-table-column>
            <el-table-column prop="number" label="数量"> </el-table-column>
            <el-table-column prop="sumPrice" label="价格小记(元)"> </el-table-column>
          </el-table>
        </div>
      </tables>
      <tables>
        <el-menu-item index="1" slot="menu">我要开发票</el-menu-item>
        <div class="cion" slot="divCion">
            <el-menu
            default-active="1-1"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#FF3C1B"
          >
            <el-menu-item index="1-1" @click = "isShow(true)">公司</el-menu-item>
            <el-menu-item index="1-2" @click = "isShow(false)">个人</el-menu-item>
          </el-menu>
          <div class="fapiao">
            <div style="padding:20px 0" v-show="show">
                公司抬头 : <input type="text" placeholder="请输入公司抬头"/>
                
            </div>
            <div style="padding:20px 0" v-show="show">
                公司税号 : <input type="text" placeholder="请输入公司税号"/>
            </div>
            <span class="btn">确认发票信息</span>
          </div>
        </div>
      </tables>

      <div class="baoxian">
         <p>   <input  type="checkbox" value="true"/> 购买安心订单保险，本单保费金额 ： 20.00元</p>
         <p>查看 保险服务说明 和 《安心订票保险条款》</p>
         <p>购买保险，亲的填写真实姓名</p>
         <p>商品金额 ： <span style="color:#FF3D1D">{{"￥" + prices}}</span>
         </p>
      </div>
      <div class="baoxian" style="border-top:1px dotted #848484">
         <p>待付总金额 ： <span style="color:#FF3D1D">{{"￥" + prices}}</span>
         </p>
         <p>   <input  type="checkbox" value="true"/> 我已阅读并同意 《订购服务条款》《退换货约定》 《退款约定》</p>
         <p>查看 保险服务说明 和 《安心订票保险条款》</p>
         <p>同意票品为不记名凭证,请您妥善保管,遗失不补”</p>
        
         <span class="btn">同意以上协议并提交订单
</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn {
  padding: 8px 10px;
  background: #ff3d1d;
  color: white;
  border-radius: 8px;
}
.baoxian{
    text-align: right;;
}
.cion {
  padding: 15px 10px 25px 10px;
  /* height: 300px; */
}
.fapiao input{
    width: 300px;
    height: 20px;
}
.fapiao{
    border:1px solid #848484;
    border-top: none;
    padding: 10px;
    padding-bottom: 30px;
    
}
.choose-seat-head {
  margin: 0 auto;
  width: 1300px;
  display: flex;
  justify-content: space-between;
}
.choose-seat-head div {
  background: #3f3f3f;
  flex-shrink: 1;
  flex-grow: 1;
  text-align: center;
  color: #fff;
  padding: 10px;
}
.head-second {
  background: #ff3d1d !important;
}
.order {
  width: 1300px;
  margin: 0 auto;
  background: white;
}
</style>
<script>
import tables from "./table";
export default {
  name: "order",
  components: {
    tables,
  },
  data() {
    return {
      radio: 1,
      show:true,
      prices:80,
      tableData: [{
          name: '王小虎',
          seatNum : '1排6座',
          price : 90,
          number : 1,
          sumPrice : 90
        }]
    };
  },
  methods: {
      isShow(val){
          this.show = val
      },
       open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
  },
};
</script>