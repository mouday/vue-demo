<template>
  <div class="">
    <el-button
      size="small"
      @click="saveFile"
    >保存文件</el-button>
  </div>
</template>

<script>
/**
 * 文件保存
 */
import FileSaver from 'file-saver';

export default {
  methods: {
    saveFile() {
      var blob = new Blob(['Hello, world!'], {
        type: 'text/plain;charset=utf-8',
      });
      FileSaver.saveAs(blob, '文件名.txt');
    },
  },
};
</script>

<style lang="less" scoped>
</style>