import { appendFile } from "fs";

const file1 = "./測試寫入2_esm.txt";
const content2 = "\r\n可是你媽說你快升天，我真的快升天"
// \r\n 是clg內的換行


appendFile(file1, content2, (error) => { 
    if(error){
        console.log("增加內容失敗");
        return false;
    }
    console.log("增加內容成功");
})