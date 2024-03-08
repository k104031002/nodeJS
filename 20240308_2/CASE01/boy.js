const aaa = "你好"

function sayMyName() {
    console.log("唐伯虎");
}

function sayMyCountry() {
    console.log("大唐");
}

module.exports = {
    sayMyName,sayMyCountry, aaa
        //  ↑　可替代寫法　↓
//    sayMyName: sayMyName,
//    sayMyCountry: sayMyCountry
};
　// ↑　可替代寫法　↓
//   但上面寫起來比較爽
// exports.sayMyName = sayMyName;
// exports.sayMyCountry = sayMyCountry