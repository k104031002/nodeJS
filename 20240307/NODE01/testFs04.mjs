import { createWriteStream } from "fs";

const ws = createWriteStream("./測試連續寫入.txt");

ws.on("finish", () => {
    console.log("全部寫入完成");
});

ws.write("紅燒雞翅，\r\n")
ws.write("我最喜歡吃\r\n")
ws.write("可是你媽說你快升天，\r\n")
ws.write("我真的快升天\r\n") 
ws.write("你真的快升天?\r\n")
ws.write("我真的快升天\r\n") 

ws.end();
