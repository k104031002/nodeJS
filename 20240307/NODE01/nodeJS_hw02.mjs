import { rename, mkdir } from "fs";

mkdir("./work",(error)=>{
    if(error){
        console.log("建立資料夾失敗");
        return false;
    }
    console.log("建立資料夾成功");
})

for (let N = 1; N <= 20; N++) {
    const file1 = `./work${N}.html`
    rename(file1, `./work/work${N}.html`, (error)=>{
        if(error){
            console.log("搬移失敗");
            return false;
        }
        console.log("搬移成功");
    })
}