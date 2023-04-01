<template>
  <div class="">
    <el-button
      size="small"
      @click="downloadFile"
    >保存文件</el-button>
  </div>
</template>

<script>
/**
 * a标签点击实现文件下载
 */
export default {
  methods: {
    downloadFile() {
      var blob = new Blob(['Hello, world!'], {
        type: 'text/plain;charset=utf-8',
      });

      // 存在浏览器兼容性
      let href = URL.createObjectURL(blob);

      let alink = document.createElement('a');
      alink.style.display = 'none';
      alink.download = '文件名.txt'; //下载后文件名
      alink.href = href;
      document.body.appendChild(alink);
      alink.click();
      document.body.removeChild(alink); //下载完成移除元素

      URL.revokeObjectURL(href); //释放掉blob对象
    },
  },
};
</script>

<style lang="scss" scoped>
</style>