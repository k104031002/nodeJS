import express from "express";
import moment from "moment";
import connection from "../db2.mjs";
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  const date = moment().format("YYYY-MM-DD")
  // res.send('導向今天的日期');
  res.redirect(`/expe/d/${date}`)
});

router.get('/d/:date', async (req, res, next) => {
  // res.send('讀取指定日期的所有消費');
  const date = req.params.date;
  let sql = "SELECT * FROM 'sort'";
  let [sorts] = await connection.execute(sql).catch(error => [undefined]);
  res.render("index", { date, sorts })
});

router.post('/', (req, res, next) => {
  res.send("新增指定日期的一筆消費");
})

router.put('/', (req, res, next) => {
  res.send("修改指定日期的一筆消費");
})

router.delete('/', (req, res, next) => {
  res.send("刪除指定日期的一筆消費");
})

export default router;