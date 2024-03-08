const fs = require("fs");

// ↓ 根據指令去算層數  指令為 node ./text/testFs14.js
// fs.writeFileSync("test.html","test test 123 唐伯虎點秋香");
// fs.writeFileSync("./test.html","test test 123 唐伯虎點秋香");

// fs.writeFileSync("./text/test.html","test test 123 唐伯虎點秋香");

// __dirname 會抓當時檔案的層  [全域變數，指的是目前檔案所屬的資料夾的絕對路徑]
fs.writeFileSync(__dirname+"/test.html","test test 123 唐伯虎點秋香");
console.log(__dirname);  // 該檔案的資料夾位置
console.log(__filename); // 該檔案的位置

