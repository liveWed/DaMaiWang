<template>
  <div class="calendar">
    <div class="calendar-title-box">
      <span class="prev-month" id="prevMonth" @click="clickPrev"></span>
      <span class="calendar-title" id="calendarTitle">{{ currentTitle }}</span>
      <span id="nextMonth" class="next-month" @click="clickNext"></span>
    </div>
    <div class="calendar-body-box">
      <table id="calendarTable" class="calendar-table">
        <thead>
          <tr>
            <th v-for="(item, index) in weekName" :key="index">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(x, index) in (dayKey.length / 7)-1" :key="index">
            <td v-for="(y, i) in dayKey.length / 6" class=" " :key="i">
              <div
                class="calendar-desc"
                v-if="currentMonth == dayKey[(x - 1) * 7 + y - 1].substr(0, 6)"
              >
                <div
                  class="calendar-day"
                  v-if="
                    currentMonth == dayKey[(x - 1) * 7 + y - 1].substr(0, 6) ||
                    (x - 1) * 7 + y - 1 < 7
                  "
                >
                  {{ dayKey[(x - 1) * 7 + y - 1] | capitalize }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weekName: [
        "SUNDAY 日",
        "MONDAY 一",
        "TUESDAY 二",
        "WEDNESDAY 三",
        "THURSDAY 四",
        "FRIDAY 五",
        "SATURDAY 六",
      ],
      currentDay: "",
      currentMonth: "",
      currentTitle: "",
      dayKey: [],
    };
  },
  filters: {
    capitalize: function (value) {
      
      value = value.toString();
      value = value.substr(6)
      return value;
    },
  },
  methods: {
    // index 0 代表当前月数据，-1 为当前月的上一个月，1为当前月下一个月的数据
    init(index) {
      this.currentDay = new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth() + index,
        this.currentDay.getDate()
      );
      // 更新当前月数据和当前月显示title数据信息
      this.currentMonth = this.currentDay.Format("yyyyMM");
      this.currentTitle = this.currentDay.Format("yyyy 年 MM 月 ");
      this.getDateMap();
    },
    // 给Date对象增加Format方法
    addDatePro() {
      // 判断此函数是否存在，如果存在直接返回，不执行后续代码
      if (Date.prototype.Format) {
        return;
      }
      Date.prototype.Format = function (fmt) {
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "H+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds(), //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
        return fmt;
      };
      /**
       * 重写toJSON方法
       * returns {string}
       */
      Date.prototype.toJSON = function () {
        var format = this.Format("yyyy-MM-dd HH:mm:ss");
        return format.replace(" ", "T") + ".000Z";
      };
    },
    getDateMap() {
      let dayArray = [];
      let firstDay = new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth(),
        1
      );
      for (let i = 0; i < 42; i++) {
        let time = new Date(
          this.currentDay.getFullYear(),
          this.currentDay.getMonth(),
          i + 1 - firstDay.getDay()
        ).Format("yyyyMMdd");
        dayArray.push(time);
      }
      this.dayKey = dayArray;
    },
    clickPrev() {
      // 点击上一个月的操作
      this.init(-1);
    },
    clickNext() {
      // 点击下一个月的操作
      this.init(1);
    },
  },
  mounted() {
    this.currentDay = new Date();
    this.addDatePro();
    this.init(0);
    this.getDateMap();
  },
};
</script>

<style scoped>
.calendar {
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  /*background: #cccccc;*/
}
/**
   设置日历顶部盒子
  */
.calendar-title-box {
  position: relative;
  width: 100%;
  height: 125px;
  line-height: 36px;
  text-align: center;
  border-radius: 20px 20px 0 0;
  background: #FF3C1B;
  background-size: 100%;
  color: #ffffff;
  font-weight: 900;
  font-size: 24px;
  border-bottom: 2px groove #FF3C1B;
}
.calendar-title,
.next-month,
.prev-month {
  line-height: 100px;
  margin: 5px;
  cursor: pointer;
}
.prev-month::before {
  content: "<";
}
.next-month::after {
  content: ">";
}
/* 
  设置日历body 结构样式信息显示
  */
.calendar-body-box {
  background: #ffffff;
}

/* 设置日历表格样式 */
.calendar-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}
thead tr:first-child {
  line-height: 30px;
  height: 40px;
  background: #eaeaea;
}
th:first-child,
th:last-child {
  color: red;
}
.calendar-table tr {
  line-height: 28px;
  font-size: 14px;
}
.calendar-table td {
  width: 170px;
  height: 170px;
  border: 1px solid #eeeeee;
}
.calendar-desc {
  float: left;
  width: 168px;
  height: 170px;
}
.calendar-day {
  width: 42px;
}
.calendar-list {
  font-size: 12px;
}
.dm-card .calendar {
  padding: 0;
}
</style>