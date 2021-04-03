<template>
    <div style="dis">
        <p style="font-size:22px;color:red;">4.6</p>
        <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="">
        </el-rate>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        value: 4.6
      }
    }
  }
</script>