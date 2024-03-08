import { rename, readdir } from "fs";

// 透過 rename 達成搬移檔案的效果
rename("./唐伯虎點秋香.txt","./text/唐伯虎點秋香.txt", (error)=>{
    if(error){
        console.log("改寫失敗");
        return false;
    }
    console.log("改寫成功");
})