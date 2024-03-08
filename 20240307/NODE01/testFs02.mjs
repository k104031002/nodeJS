import { writeFileSync } from "fs";

const file1 = "./測試寫入2_esm.txt";
const content1 = "紅燒雞翅，我最喜歡吃";

writeFileSync(file1, content1, {flag: "a"});
// flag: "a" = appendFile


// const content2 = "可是你媽說你快升天，我真的快升天";

// writeFileSync(file1, content2);