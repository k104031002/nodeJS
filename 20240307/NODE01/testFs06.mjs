import { readFileSync } from "fs";

const data = readFileSync("./測試連續寫入.txt");

console.log(data.toString());