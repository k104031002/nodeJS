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

app.get("/p/:id", (req, res) => {
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
app.get("/users/:userID",(res, req)=>{
    console.log(`使用者ID是${res.params.userID}`);
    req.send(`使用者ID是${res.params.userID}`);
})

// http:localhost:3000/p/id

// https://www.instagram.com/p/CvZP-PIguWG/
// https://www.instagram.com/p/CvRz0e3Awmi/


app.listen(3000, () => {
    console.log("伺服器已啟動於 http://localhost:3000");
})