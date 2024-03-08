import { writeFile, writeFileSync } from "fs";

for(let N =1;N<=20 ; N++){
    const file1 = `./work${N}.html`;
    const content1 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>這是第 ${N} 個 HTML 檔</h1>
    </body>
    </html>`;
    if (N<=20){
        writeFile(file1, content1, (error) => {
            if (error) {
                console.log("寫入失敗");
                return false;
            }
                console.log("寫入成功");
        })    
    }
}
  

