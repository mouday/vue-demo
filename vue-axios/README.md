# vue-axios

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Axiox文件下载

本例使用vue做前端项目 和 express做后端服务

axios的config参数 `responseType: 'blob'` ,很多地方都提到需要设置，我没有设置也能正常下载
 
 
依赖
 
- concurrently 插件来运行命令
- nodemon 监控重启 node 后台
- cors 处理跨域

### a标签下载文件
```js
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
```

## axios下载
```js
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
```

后端服务需要做一些特殊设置
```js
// 设置的文件名，需要对 filename 进行转码，防止下载的文件名中有中文时出现乱码。
res.setHeader("Content-Disposition", "attachment; filename=" + encodeURI(filename));
res.setHeader("Content-Type", 'application/octet-stream');
// axios下载文件取不到content-disposition需要添加响应头
res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
```

## 下载图片

可以直接用img标签加链接就可以显示
```html
<img v-if="imageSrc" :src="imageSrc" alt="">
```

>参考
>[使用axios如何下载文件](https://segmentfault.com/a/1190000022423204)
>[https://blog.csdn.net/shuangmu9768/article/details/108846417](axios下载文件取不到content-disposition)
