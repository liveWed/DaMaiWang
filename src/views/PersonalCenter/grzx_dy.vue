<template>
  <div class="grzx_dy">
    <div class="grzx_dy_top">
      <topbq></topbq>
    </div>
    <div class="grzx_dy_logossk">
      <logossk></logossk>
    </div>
    <div class="xlcd">
      <div class="xlcd_center">
        <xlcd></xlcd>
      </div>
    </div>
  </div>
</template>
<script>
import xlcd from "../../components/xlcd_dy.vue";
import topbq from "../../components/topbiaoqian_dy";
import logossk from "../../components/logo_ssk_dy";
export default {
  components: {
    xlcd,
    topbq,
    logossk,
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.xlcd {
  background-color: #f7f7f7;
}
.xlcd_center {
  padding-top: 20px;
  width: 1300px;
  margin: 0 auto;
}
.grzx_dy {
  margin: 0 auto;
}
.grzx_dy_top {
  background-color: #f7f7f7;
  border-bottom: 0.5px rgb(197, 188, 188) solid;
}
.grzx_dy_logossk {
  height: 90px;
  background-color: #f7f7f7;
  border-bottom: 2px red solid;
}
</style>