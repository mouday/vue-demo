const express = require("express");
var cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// 首页测试
app.get("/", (req, res)=>{
  res.send("index");
});

// axios下载文件
app.get("/file", (req, res)=>{
  let filename = "三国演义.txt";
  // 设置的文件名，需要对 filename 进行转码，防止下载的文件名中有中文时出现乱码。
  res.setHeader("Content-Disposition", "attachment; filename=" + encodeURI(filename));
  res.setHeader("Content-Type", 'application/octet-stream');
  // axios下载文件取不到content-disposition需要添加响应头
  res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
  // 文件名编码不好控制
  fs.createReadStream("server/public/三国演义.txt").pipe(res)
});


// 直接下载文件
app.get("/download", (req, res)=>{
  res.download("server/public/三国演义.txt");
});


// axios下载图片
app.get("/image", (req, res)=>{
  res.download("server/public/baidu.png");
});

app.listen(8080);
