import { resolve, sep, parse, basename, dirname, extname, join } from "path";
import { fileURLToPath } from "url";
// console.log(resolve("aaa.txt"));  //顯示路徑
// console.log(sep); //顯示目前系統分隔路經的斜線方向
// console.log(import.meta.url); //顯示位置

// console.log(import.meta.url);
// console.log(fileURLToPath(import.meta.url));
// console.log(parse(import.meta.url)); //解析
// base 完整檔名  ext 副檔名  name 主檔名

// console.log(import.meta.dirname);
// console.log(import.meta.filenamename);

// 取得完整檔名
// console.log(basename(import.meta.filename)); //必須接檔案
// 也可以用 下面的方式取得 basename
// console.log(parse(import.meta.filename));

// 取得路徑名稱
// console.log(dirname(import.meta.filename));
// 也可以用 下面的方式取得 dirname
// console.log(parse(import.meta.filename).dir);

// 取得副檔名
// console.log(extname(import.meta.filename));
// 也可以用 下面的方式取得 extname
// console.log(parse(import.meta.filename).ext);

// 獲取完整路徑
console.log(resolve("測試寫入2.txt"));
console.log(resolve(import.meta.dirname, "./測試寫入2.txt"));
console.log(join(import.meta.dirname,"./測試寫入2.txt"));