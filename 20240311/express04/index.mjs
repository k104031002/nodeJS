import express from "express";

const fakeData = {
    "CvZP-PIguWG": "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》",
    "CvRz0e3Awmi": "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》"
};
const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")
    // http 模組本來就有
})

app.get("/p/:id?", (req, res) => {
    const { id } = req.params;
    // let pageContent = "IG"
    console.log(id);
    // pageContent = fakeData[id];

    let pageContent = (id) ? (fakeData[id]) ? fakeData[id] : "no data" : "IG";
    // if (id === "CvZP-PIguWG") {
    //     pageContent = `《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》`
    // } else if (id === "CvRz0e3Awmi") {
    //     pageContent = `  《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》`
    // }
    res.send(pageContent)
    // http 模組本來就有
})
app.get("/users/:userID?", (req, res) => {
    console.log(`使用者ID是${req.params.userID}`);
    if (req.params.userID) {
        res.send(`使用者ID是${req.params.userID}`);
    } else {
        res.send(`匿名的訪客`)
    }
    res.send(`使用者ID是${req.params.userID}`);
})

app.get("/books/:cateID/:bookID", (req, res) => {
    res.send(`書本的分類是 ${req.params.cateID}，書本的編號是 ${req.params.bookID}`);
})

app.get("/user/:id([0-9]+)", (req, res) => {
    // 路徑 user/ 後只有帶數字才符合
    // :id([a-z][0-9]+)  => 則 a~z 一個字在加數字才符合 
    res.send(`${req.params.id}`);

})

app.get("/files/*", (req, res) => {
    const filePath = req.params[0];
    res.send(`${filePath}`);
})

// http:localhost:3000/p/id

// https://www.instagram.com/p/CvZP-PIguWG/
// https://www.instagram.com/p/CvRz0e3Awmi/


app.listen(3000, () => {
    console.log("伺服器已啟動於 http://localhost:3000");
})