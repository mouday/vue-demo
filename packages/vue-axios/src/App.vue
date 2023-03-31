<template>
  <div id="app">
    <div>
      <button @click="download">直接下载文件</button>

      <button @click="downloadFile">axios下载文件</button>

      <button @click="downloadImage">axios下载图片</button>
    </div>

    <div>
      <img v-if="imageSrc" :src="imageSrc" alt="">
    </div>
  </div>
</template>

<script>
  import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
        imageSrc: ''
    }
  },
    methods: {
        // a标签下载
        download(){
            let href  = "http://localhost:8080/download";
            const dom = document.createElement('a');
            dom.style.display = 'none';
            dom.href = href;
            document.body.appendChild(dom);
            //点击下载
            dom.click();
            //下载完成移除元素
            document.body.removeChild(dom);
        },

        // 下载图片
        async downloadImage(){
            this.imageSrc = "http://localhost:8080/image";
        },

        // 下载文件
        async downloadFile(){
            const res = await axios.get("http://localhost:8080/file");

            console.log(res);

            const blob = new Blob([res.data], {type: res.headers['content-type']});
            let patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
            let result = patt.exec(res.headers['content-disposition']);
            let filename = decodeURI(result[1]);

            const downloadElement = document.createElement('a');
            const href = window.URL.createObjectURL(blob);

            console.log(filename);
            downloadElement.style.display = 'none';
            downloadElement.href = href;
            downloadElement.download = filename ; //下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement); //下载完成移除元素
            window.URL.revokeObjectURL(href); //释放掉blob对象
        }
    }
}
</script>

<style>

</style>
