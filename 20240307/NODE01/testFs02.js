const fs = require("fs");

const file1 = "./測試寫入2.txt";
const content1 = "紅燒雞翅，我最喜歡吃";

fs.writeFileSync(file1, content1);


