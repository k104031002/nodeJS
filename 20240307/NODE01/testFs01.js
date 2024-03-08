const fs = require("fs");


const file1 = "./測試寫入.txt";
const content1 = "紅燒雞翅，我最喜歡吃";

fs.writeFile(file1, content1, function(error){
    if(error){
        console.log("1 寫入失敗");
        return false;
    }
    console.log("2 寫入成功");
    // if(error){
    //     console.log("寫入失敗");
    // }else{
    //     console.log("寫入成功");
    // }
});

console.log("3 測試用字串");