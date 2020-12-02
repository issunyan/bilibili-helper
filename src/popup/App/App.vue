<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button type="primary" style="float: right; padding: 3px 0">
        操作按钮
      </el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      o: [1, 2, 3, 4],
    };
  },
};
</script>

<style>
.box-card {
  width: 300px;
}
</style>
