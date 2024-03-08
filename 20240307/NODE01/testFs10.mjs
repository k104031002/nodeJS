import { rename } from "fs";

rename("./測試連續寫入.txt","./唐伯虎點秋香.txt", (error)=>{
    if(error){
        console.log("改寫失敗");
        return false;
    }
    console.log("改寫成功");
})