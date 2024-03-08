import { readFileSync, writeFileSync } from "fs";

const data = readFileSync("./video/movie.mp4");
writeFileSync("./video/movie2.mp4",data);
// 上面寫法就是 "複製檔案"

