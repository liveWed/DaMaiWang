<template>
  <div class="choose-seat-container">
    <div class="choose-seat-head">
      <div class="head-first">1 选择区域</div>
      <div class="head-second">2 选择座位</div>
      <div class="head-third">3 结账付钱</div>
    </div>
    <div id="seatMap" :class="'choose-seat-body '">
      <div
        style="border: 0px solid yellow; padding-top: 15px"
        v-for="(item, index) in seatOrder"
        :key="index"
      >
        <div class="items">
          <div style="display: inline-block" v-for="(ite, x) in item" :key="x">
            <div class="image" v-if="ite != '_'">
              <img
                src="/img/xuanzuo/sofa-blue.png"
                @click="getSeat(index + 1, x + 1, ite,$event)"
                ref="chaImg"
                :alt="ite"
              />
            </div>
            <div class="image" v-if="ite == '_'"></div>
          </div>
        </div>
      </div>
      <div class="message" style="z-index: 10000" v-if="getSeats.length != 0">
        <div class="message-list">
          <div v-for="(mes, i) in getSeats" :key="i" style="border-bottom: 1px #848484 dotted;">
            <p>座位：{{ mes.x }}排{{ mes.y }}号</p>
            <p>楼层：{{ address }}剧场</p>
            <p>看台：</p>
            <p style="text-transform: uppercase">等级：{{ mes.ite }} 区</p>
            <p>票价：{{ mes.prices }}元</p>
            <p>状态：</p>
          </div>
        </div>
        <!-- 跳转至确认订单页 -->
        <span class="btn" @click="accounts">结账 : {{ sumPrice }} 元</span>
      </div>
    </div>

    <div class="choose-seat-right"></div>
    <div class="choose-seat-bottom"></div>
  </div>
</template>
<script>
export default {
  name: "seat",
  data() {
    return {
      seatOrder: [
        "_____aaaaa_____aaaa_____aaaa____",
        "___ccccccc____cccccc____ccccc___",
        "__aaaaaaaa___aaaaaaaa___aaaaaa__",
        "__cccccccc__bbbbbbbbbb__ccccccc_",
        "_aaccccccc_bbbbbbbbbbbb_ccccccca",
        "_aaccccccc_bbbbbbbbbbbb_ccccccca",
        "________________________________",
        "_aaaaaaaaa__cccccccccc__aaaaaaaa",
        "_aaaaaaaaa__cccccccccc__aaaaaaaa",
        "__aaaaaaaa___aaaaaaaa___aaaaaaa_",
        "__aaaaaaaa___aaaaaaaa___aaaaaaa_",
      ],
      // 储存img地址
      imgSrc :['/img/xuanzuo/sofa-blue.png','/img/xuanzuo/sofa-selected.png','/img/xuanzuo/sofa-gray.png'],
      chartsSeatArea: " a b c ",
      data: {},
      // 获取座位的位置
      getSeats: [],
      // 总价
      sumPrice: 0,
    };
  },
  // 通过组件之间的传值来获取地址
  props: ["address"],
  methods: {
    // bindScroll() {
    //   //  添加鼠标点下和移动事件，通过这两个事件进行监听，通过修改position的top和left值进行界面的移动。
    //   var oImg = document.getElementById("seatMap");
    //   oImg.onmousedown = function (ev) {
    //     var ev = ev || event;
    //     var disX = ev.clientX - oImg.offsetLeft;
    //     var disY = ev.clientY - oImg.offsetTop;
    //     if (oImg.setCapture) {
    //       oImg.setCapture();
    //     }
    //     document.onmousemove = function (ev) {
    //       var ev = ev || event;
    //       oImg.style.left = ev.clientX - disX + "px";
    //       oImg.style.top = ev.clientY - disY + "px";
    //     };
    //     document.onmouseup = function () {
    //       document.onmousemove = document.onmouseup = null;
    //       //释放全局捕获 releaseCapture();
    //       if (oImg.releaseCapture) {
    //         oImg.releaseCapture();
    //       }
    //     };
    //     return false;
    //   };
    //   // 监听滚轮滚动事件，并使用scale 对页面进行操作，实现界面的放大和缩小。
    //   oImg.onmousewheel = fn;
    //   if (oImg.addEventListener) {
    //     oImg.addEventListener("DOMMouseScroll", fn, false);
    //   }
    //   var scaleSize = 1;

    //   function fn(ev) {
    //     var ev = ev || event;
    //     var b = true;
    //     if (ev.wheelDelta) {
    //       b = ev.wheelDelta > 0 ? true : false;
    //     } else {
    //       b = ev.detail < 0 ? true : false;
    //     }
    //     if (b) {
    //       scaleSize += 0.03;
    //       scaleSize = scaleSize > 2 ? 2 : scaleSize;
    //     } else {
    //       scaleSize -= 0.03;
    //       scaleSize = scaleSize < 0.5 ? 0.5 : scaleSize;
    //     }
    //     this.style.transform = "scale(" + scaleSize + ")";
    //     if (ev.preventDefault) {
    //       ev.preventDefault();
    //     }
    //     return false;
    //   }
    // },
    getItems(item) {
      return item.match(/[a-z_]{1}(\[[0-9a-z_]{0,}(,[0-9a-z_ ]+)?\])?/gi);
    },
    // 选座
    getSeat(x, y, item,el) {
      this.sumPrice = 0;
      let price = 90;
      switch (item.toUpperCase()) {
        case "A":
          price = 130;
          break;
        case "B":
          price = 100;
          break;
        case "C":
          price = 80;
          break;
        default:
          price = false;
      }
      let isAdd = true;
      for (let i = 0; i < this.getSeats.length; i++) {
        if (x == this.getSeats[i].x && y == this.getSeats[i].y) {
          this.getSeats.splice(i, 1);
          el.path[0].setAttribute ('src','/img/xuanzuo/sofa-blue.png') ;
          isAdd = false;

          break;
        }
      }
      // 向订单中添加数据
      if (isAdd) {
        this.getSeats.push({ x: x, y: y, ite: item, prices: price });
        el.path[0].setAttribute ('src','/img/xuanzuo/sofa-selected.png') ;
        // this.$refs.chaImg.currentSrc = '/img/xuanzuo/sofa-selected.png';
        console.log(el)
      }
      // 计算价格
      for (let a = 0; a < this.getSeats.length; a++) {
        this.sumPrice += this.getSeats[a].prices;
      }
    },
    // 结账功能
    accounts(){
      
      window.location.href= '/order?value=' +  this.getSeats;
    }
  },
};
</script>
<style scoped>
.btn {
  display: inline-block;
  position: absolute;
  cursor:pointer;
  bottom: 10px;
  left: 30px;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: white;
  text-align: center;
  background: #ff3d1d;
  border-radius: 5px;
}
.available {
  /* 激活后的样式信息 */
  background-image: url("/img/xuanzuo/sofa-selected.png") !important;
}
.items {
  display: inline-block;

  /* border: 1px solid red; */
}
.message {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background: #f4f4f4;
  height: 600px;
  width: 150px;

  /* height: ; */
}
.message-list {
  height: 500px;
  overflow: auto;
  
}
.image {
  width: 35px;
  height: 35px;
}
.image img {
  width: 35px;
  height: 35px;
}
.choose-seat-container {
  width: 1300px;
  margin: 0 auto;
}
.choose-seat-body {
  position: relative;
}
.choose-seat-head {
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
</style>