import ejs from "ejs"
import {readFileSync} from "fs"
import {resolve} from "path"
const __dirname = import.meta.dirname

const name = "Ben"
const str = "Hello world"

// console.log(str + ", " +name);
// console.log(`${str}, ${name}`);
// const template = "<%=str%>, <%=name%>"
const template = readFileSync(resolve(__dirname, "template01.html")).toString();
const result = ejs.render(
    template,
    {str,name}
);
console.log(result);