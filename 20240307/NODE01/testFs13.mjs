import { stat, existsSync } from "fs";

let path = "./video/movie.mp4";
if (process.argv[2] === "a") {
    path = "./video";
} else if (process.argv[2] === "b") {
    path = "./video1";
}


stat(path, (error, data) => {
    // 讀取檔案狀態
    if (error) {
        console.log("讀取失敗");
        console.log(error);
        return false;
    }
    console.log("讀取成功");
    console.log(data);
    // console.log(new Date(data.birthtimeMs));
});