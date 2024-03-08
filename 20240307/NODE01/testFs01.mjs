import {writeFile} from "fs";

const file1 = "./測試寫入_esm.txt";
const content1 = "你真的快升天？我真的快升天";

writeFile(file1, content1, (error) => {
    if(error){
        console.log("寫入失敗");
        return false;
    }
    console.log("寫入成功");
})