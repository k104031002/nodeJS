const fs = require("fs");

const file1 = "./測試寫入.txt";
const content2 = "\r\n可是你媽說你快升天，我真的快升天"

fs.appendFileSync(file1, content2)