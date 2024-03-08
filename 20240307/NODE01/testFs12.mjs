import { mkdir, readdir, rmdir, rm } from "fs";

if (process.argv[2] === "mkdir") {
    // 建立資料夾
    // mkdir("./html", (error) => {
    // 建立遞迴資料夾
    mkdir("./a/b/c", { recursive: true }, (error) => {
        if (error) {
            console.log("建立資料夾失敗");
            console.log(error);
            return false;
        }
        console.log("建立資料夾成功");
    })
} else if (process.argv[2] === "readdir") {
    // 讀取資料夾
    readdir("./video", (error, files) => {
        if (error) {
            console.log("讀取資料夾失敗");
            return false;
        }
        console.log("讀取資料夾成功");
        console.log(files);
    })
} else if (process.argv[2] === "rmdir") {
    // 刪除資料夾
    // rmdir("./html", (error) => {
    // rmdir("./a", { recursive: true }, (error) => {
    rm("./a", { recursive: true }, (error) => {
        if (error) {
            console.log("刪除資料夾失敗");
            console.log(error);
            return false;
        }
        console.log("刪除資料夾成功");
    })
}



