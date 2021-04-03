<template>
  <div class="logossk">
    <div style="margin-top: 15px" class="ssk">
      <el-input
        placeholder="请输入演出、艺人、场馆名称..."
        v-model="input3"
        class="input-with-select"
        background-color="red"
      >
        <el-button slot="append" class="btn">搜索</el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
import './logo_ssk_dy.css'
export default {
  data() {
    return {
      input3: "123",
    };
  },
};
</script>
<style scoped>

</style>
