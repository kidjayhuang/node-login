 "use strict"
 //导包
 const express=require("express")
 const path=require("path")
 const session=require("express-session")
 //创建app
 const app=express();
 //集成静态资源中间件
 app.use(express.static(path.join(__dirname,"statics")))
 //获取 post参数parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({
   extended:false
 }))
 //页面失效时间
 app.use(session({secret:"keyboard cat",cookie:{maxAge:60000}}))
 //集成路由
 const accountRouter=require(path.join(__dirname,"routers/accountRouter.js"))
 app.use("/account",accountRouter)
 
