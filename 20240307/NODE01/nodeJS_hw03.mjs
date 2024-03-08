import { readdir, renameSync } from "fs";

const path = "./work";
let files = "";
for (let i = 1; i < 10; i++) {
    files = `./work/work${i}.html`
    renameSync(files, `./work/work0${i}.html`)
}
readdir(path, (error, files) => {
    if (error) {
        console.log("讀取失敗");
        console.log(error);
        return false;
    }
    console.log("讀取成功");
    console.log(files);
})



  // 迴圈處理每個檔案
    // files.forEach((file) => {
    //     // 令檔案名稱為變數
    //     const filename = `${path}/${file}`;
    //     // 使用正規表達式取得數字部分
    //     const match = file.match(/(\d+)/);
    //     if (match) {
    //         const number = match[0]  //檔案名稱中的數字部分
    //         const paddedNumber = number.padStart(2, '0'); // 在數字前補0 至 兩位數

    //         rename(filename, `${path}/${file.replace(number, paddedNumber)}`, (error) => {
    //             if (error) {
    //                 console.log("改名失敗");
    //                 console.log(error);
    //                 return false;
    //             }
    //             console.log("改名成功");
    //             console.log(file);
    //         })

    //     }

    // })