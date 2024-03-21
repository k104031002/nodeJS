import express from "express";
import cors from "cors";
import multer from "multer";
import session from "express-session"

const upload = multer();

const users = {
    "ben": {
        pwd: "a12345",
        name: "Ben Chen"
    },
    "mary": {
        pwd: "a12345",
        name: "Mary Lin"
    }
}

const whiteList = ["http://localhost:5500", "http://127.0.0.1:5500", "http://localhost:8080", "http://127.0.0.1:8080"];
const corsOptions = {
    credentials: true,
    origin(origin, callback) {
        if (!origin || whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("不允許傳遞資料"))
        }
    }
}
// app 使用 session 做出來的 Middleware，傳入一個設定的物件
// saveUninitialized: false 新用戶沒有使用到 session 物件時不會建立 session 和發送 cookie
// resave false 沒變更內容是否強制回存
// secret 加密用的字串
// 在 cookie 中的 maxAge 可以設定有效期間
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "benbenben",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1200000
    }
}));

app.get("/", (req, res) => {
    res.send("首頁")
})

app.post("/", upload.none(), (req, res) => {
    console.log(req.body);
    const { account, password } = req.body;
    if (users[account] && users[account].pwd === password) {
        const user = users[account];
        user.account = account;
        req.session.user = user;
        res.json({ user });
    } else {
        res.json({ error: "登入失敗" });
    }
})

app.get("/checkLogin", (req, res)=>{
    console.log(req);
    console.log(req.session.user);
    const {user} = req.session;
    res.json({user});
})

app.listen(3000, () => {
    console.log("server is running");
})