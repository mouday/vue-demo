# xlsx实现Excel文件的导入导出

依赖
```
npm i file-saver xlsx -S
```

引入element-ui
```js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

App.vue

```html
<template>
  <div class="container">
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

<style lang="scss">
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

```

工具类文件 utils.js
```js
import XLSX from "xlsx";
import FileSaver from 'file-saver';

/**
 * 异步读取Excel文件的sheet表为json数据
 * 不支持合并单元格
 * @param {File对象} file
 */
export function readExcelToJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, { type: "array" });
      //  console.log("workbook: ", workbook);

      //将Excel 第一个sheet内容转为json格式
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      let json = XLSX.utils.sheet_to_json(worksheet);
      //   console.log("jsonExcel:", jsonExcel);
      resolve(json);
    };

    reader.readAsArrayBuffer(file.raw);
  });
}

/**
 * 保存json为Excel文件
 * @param {*} data 
 * @param {*} filename  文件名后缀为.xlsx
 */
export function saveJsonToExcel(data, filename) {
  let sheet = XLSX.utils.json_to_sheet(data);

  let workbook = {
    SheetNames: ["sheet1"],
    Sheets: {
      sheet1: sheet,
    },
  };

  let wbout = XLSX.write(workbook, {
    bookType: "xlsx",
    bookSST: true,
    type: "array",
  });

  FileSaver.saveAs(
    new Blob([wbout], { type: "application/octet-stream" }),
    filename
  );
}

```
参考文章
> [如何使用JavaScript实现纯前端读取和导出excel文件](https://www.cnblogs.com/liuxianan/p/js-excel.html)
> [前端导出Excel和下载后端Excel以及前端处理Excel](https://blog.csdn.net/qq_42031498/article/details/108256345)