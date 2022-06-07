var express = require('express');
var router = express.Router();
let model=require("../model/db.js");
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/user')
    },
    filename:function (req,file,cb){
        cb(null,file.originalname)
    }
})
const upload =multer({
    storage
})
router.get("/login",async(req,res)=>{
    // let {username,pass} = req.body;
    let url = req.url;
    if(url.indexOf('?')>0){
        params = url.split('?')[1];
        paramArray = params.split('&');
    if(!paramArray[0] || !paramArray[1]){
        res.send({"code":"400","msg":"用户名和密码不能为空"})
        return 
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
router.get("/register",async(req,res)=>{
    let url = req.url;
    if(url.indexOf('?')>0){
        params = url.split('?')[1];
        paramArray = params.split('&');
        if(!paramArray[0] || !paramArray[1]||!paramArray[2]){
            res.send({"code":"400","msg":"用户名和密码不能为空"})
            return 
        }
        if( paramArray[1]!==paramArray[2]){
            res.send({"code":"400","msg":"两次密码需要一样"})
            return
        }
    let sql = `SELECT username,CONCAT("http://127.0.0.1:3000/","uploads/",user_img) as user_img,id from user where id=${paramArray[0]}`;
    let [err,data]=await model.query(sql);
    if(data.length!==0){
        res.send({"code":"400","msg":"账号已存在"})
    }else{
        let sql = `insert into login set username=${paramArray[0]},pass=${paramArray[1]}`;
        let [err,data]=await model.query(sql);
        res.send({
            "code":"200","msg":"登录成功","data":data
        })
    }
  }
})
router.get("/order",async(req,res)=>{
    let url = req.url;
    if(url.indexOf('?')>0){
        params = url.split('?')[1];
        paramArray = params.split('&');
        
    let sql = `SELECT rimai_id from orderd where user_id=${paramArray[0]}`;
    let [err,data]=await model.query(sql);
    resultArray = JSON.parse(JSON.stringify(data));
    console.log(resultArray[0]["rimai_id"]);
    let x=[];
    for(let i = 0; i < resultArray.length; i++){
        x.push(resultArray[i]["rimai_id"])
    }
    console.log(x)
    // var tokens = new Array(x.length).fill('?').join(',');
    let str="" 
    let h=1
    for (let val of x)  { if(h!==x.length){str+=val+",";h++}
else{
    str+=val
}}
    console.log(str)
     sql = `SELECT name,amount,CONCAT("http://127.0.0.1:3000/","uploads/",img) as img from rimai where rimai_id in (${str})`;
     [err,data]=await model.query(sql);
    
     res.send({
                "code":"200","msg":"登录成功","data":data
            })

    // if(data.length!==0){
    //     res.send({"code":"400","msg":"账号已存在"})
    // }else{
    //     let sql = `insert into login set username=${paramArray[0]},pass=${paramArray[1]}`;
    //     let [err,data]=await model.query(sql);
    //     res.send({
    //         "code":"200","msg":"登录成功","data":data
    //     })
    // }
  }
})
router.post("/file",upload.single('file'),(req,res)=>{
    console.log(req.file)
    res.send('ok')
})
module.exports = router;