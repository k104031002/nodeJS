import { renameSync, unlink, readFileSync, writeFileSync, rm } from "fs";

// // 透過 rename 達成搬移檔案的效果
// rename("./唐伯虎點秋香.txt","./text/唐伯虎點秋香.txt", (error)=>{
//     if(error){
//         console.log("改寫失敗");
//         return false;
//     }
//     console.log("改寫成功");
// })

// renameSync("./text/唐伯虎點秋香.txt", "./text/唐伯虎點秋香2.txt");
if(process.argv[2]==="copy"){
// 複製
const data = readFileSync("./text/唐伯虎點秋香2.txt");
writeFileSync("./text/唐伯虎點秋香.txt", data);
}else{
    // 修改 (僅檔案)
    // unlink("./text/唐伯虎點秋香.txt", (error)=>{
    //     if(error){
    //         console.log("刪除失敗");
    //         return false;
    //     }
    //     console.log("刪除成功");
    // })
    // 修改  (包含資料夾)
    rm("./text/唐伯虎點秋香.txt", (error)=>{
        if(error){
            console.log("刪除失敗");
            return false;
        }
        console.log("刪除成功");
    })
}


