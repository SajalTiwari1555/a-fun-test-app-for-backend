// // const btn = document.getElementsByClassName("box");
// // console.log(btn);
// const btn = document.querySelectorAll(".box").addEventListener("click" ,function main(e){
//     document.body.innerHTML=`<h1>final</h1>`;
// },true)



// const heading = document.getElementById("h1").addEventListener("click",function map(e){
//    document.body.innerHTML=`<h1>Hello</h1>`;
// console.log("hello");
// },true)
require('dotenv').config()
const express = require('express')
const app = express();
const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("this page is home page");
})

app.get('/twitter',(req,res)=>{
    res.send("this is twitter pageQ!")
})
app.get('/login',(req,res)=>{
  res.send(`<h1>This is login page</h1>`)
})
app.get('/youtube',(req,res)=>{
    res.send(`<h1>SajjutheTradingLife</h1>`)
  })

app.listen(port,() =>{
    console.log(`server is running${port}`);
})

