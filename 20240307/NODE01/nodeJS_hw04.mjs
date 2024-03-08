import { mkdirSync, renameSync, writeFileSync, } from "fs";

mkdirSync("./zero")


let files = "";
for (let N = 1; N <= 20; N++) {
    files = `./zero${N}.html`;
    const content = `<!DOCTYPE html>
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
    writeFileSync(files, content)
}
for (let N = 1; N <= 20; N++) {
    files = `./zero${N}.html`
    renameSync(files, `./zero/zero${N}.html`)
}
for (let i = 1; i<10; i++){
    files = `./zero/zero${i}.html`
    renameSync(files, `./zero/zero0${i}.html`)
}

