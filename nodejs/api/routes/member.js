var express = require('express');
var router = express.Router();
let model=require("../model/db.js");
router.get("/login",async(req,res)=>{
    // let {username,pass} = req.body;
    let url = req.url;
    if(url.indexOf('?')>0){
        params = url.split('?')[1];
        paramArray = params.split('&');
    if(!paramArray[0] || !paramArray[1]){
        res.send({"code":"400","msg":"用户名和密码不能为空"})
    }
    let sql = `select * from login where username=${paramArray[0]} &&pass=${paramArray[1]}`
    let[err,data] = await model.query(sql);
    if(data.length==0){
        res.send({"code":"400","msg":"密码错误或账号不存在"})
    }else{
        res.send({
            "code":"200","msg":"登录成功","data":data
        })
    }
}
});
router.get("/user",async(req,res)=>{
    let url = req.url;
    if(url.indexOf('?')>0){
        params = url.split('?')[1];
        paramArray = params.split('&');
    let sql = `SELECT username,CONCAT("http://127.0.0.1:3000/","uploads/",user_img) as user_img,id from user where id=${paramArray[0]}`;
    let [err,data]=await model.query(sql);
    if(data.length==0){
        res.send({"code":"400","msg":"密码错误或账号不存在"})
    }else{
        res.send({
            "code":"200","msg":"登录成功","data":data
        })
    }
  }
})
module.exports = router;