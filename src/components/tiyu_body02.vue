<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="音乐会专区" name="first" >
            音乐会专区
        </el-tab-pane>
        <el-tab-pane label="舞蹈专区" name="second">舞蹈专区</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableDate2: [],
    };
  },
  methods: {
    fn: function() {
      var suijishu = Math.floor(Math.random() * 6);
      return suijishu;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
};
</script>
<style scoped>

</style>

