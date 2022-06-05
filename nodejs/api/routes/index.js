var express = require('express');
var router = express.Router();
let model=require("../model/db.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/banner",async(req,res)=>{
  let sql = `SELECT name,amount,CONCAT("http://127.0.0.1:3000/","uploads/",img) as img from rimai`;
  let [err,data]=await model.query(sql);
  if(err){
    res.send({"code":"500","msg":"查询失败"})
  }else
  { if(JSON.stringify(data) !== '[]'){
    res.send({"code":"200","msg":"查询成功","data":data})}
    else{
      res.send({"code":"500","msg":"查询失败"})
    }
  }
})

module.exports = router;
