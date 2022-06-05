let mysql=require("mysql");

let config={
    host:"121.40.129.193",
    port:3306,
    user:"admin",
    password:"123456",
    database:"daojucheng"
};
class Db{
    constructor(){
        this.connect = mysql.createConnection(config);
        this.connect.connect((err)=>{
            if(err){
                console.log("数据库连接失败")  
         
            }else{
                console.log("数据库连接成功")}
            
        })
    }
    query(sql){
        let p=new Promise((resolve,reject)=>{
            this.connect = mysql.createConnection(config);
            this.connect.query(sql,(err,result)=>{
                // try{
                //     resolve([null,result])
                //     console.log("查询成功")
                //     console.log(result)
                // }catch(err){
                //     reject([err,null])
                //     console.log("查询失败")
                // }
                if(err){
                    console.error("查询出错"+err.message);
                  
                    return;
                }
                resolve([null,result])
                console.log(result);
            })
        
    
    })
    // .catch(err => {
    //     console.log(err);
    // })
        
        return p;
    }
}
let db = new Db();
module.exports = db;