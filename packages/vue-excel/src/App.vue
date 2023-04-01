<template>
  <div class="container">
    <h2>Excel上传下载</h2>
    
    <div style="display:flex;">
      <el-upload
        ref="upload"
        action="action"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        :show-file-list="false"
        :on-change="onUploadChange"
      >
        <el-button
          size="small"
          type="primary"
        >点击上传</el-button>
      </el-upload>

      <el-button
        size="small"
        @click="handleDownload"
      >点击下载</el-button>

    </div>

    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="key in Object.keys(tableData[0]|| {})"
        :prop="key"
        :label="key"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { readExcelToJson, saveJsonToExcel } from './utils.js';

export default {
  data() {
    return {
      file: null,
      tableData: [],
    };
  },

  methods: {
    // 读取文件为json数据
    onUploadChange(file) {
      console.log(file);
      this.file = file;
      readExcelToJson(file).then((res) => {
        this.tableData = res;
      });
    },

    handleDownload() {
      saveJsonToExcel(this.tableData, this.file.name);
    },
  },
};
</script>

<style lang="less">
body {
  background: #f4f4f4;
  padding: 0;
  margin: 0;
}
.container {
  width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}
</style>
