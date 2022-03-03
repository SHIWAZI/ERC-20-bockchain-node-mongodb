let mongoose =require('mongoose');
let data=require("./model");

mongoose.connect("mongodb+srv://shivaji_01:1234@cluster0.cbbnq.mongodb.net/block-chain",(err)=>{
if(err)return console.log("Cannot connect to DB");
// console.log("database is connected")

connctionCallback();

console.log(connctionCallback)

});

let connctionCallback=()=>{


}

module.exports.onConnect=(callback)=>{
   data=callback;
}
