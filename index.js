
const mongoose=require("mongoose")

let Schema =mongoose.Schema;

const Web3 =require('web3');


const url ='https://mainnet.infura.io/v3/55bcb212b55b427d8a498a341e1824fb'

const web3 =new Web3(url)

const address ='0x28d37B1a8f3B7eD936CE6BC590b07FBd574Ebc69'
//schema


let BlockChainSchema=new Schema({
    balance_in_wei:{type:Number},
    balance_in_ETH:{type:Number}
    
    },{
        timestamps:true
    })
    
    
    const Data =mongoose.model('data',BlockChainSchema)
mongoose.connect("mongodb+srv://shivaji_01:1234@cluster0.cbbnq.mongodb.net/block-chain",(err)=>{
if(err)return console.log("Cannot connect to DB");
// console.log("database is connected")

const address ='0x87d6d0fd0b4f1500d339597d578fb8fb13f9a7d0'
// const address ='0x81b106df52e00422ae541efd8176ead0e0b8b6ee'
let balance;
async function checkBalance(){
    try {
        web3.eth.getBalance(address).then((balanceInWei) => {
            balance = web3.utils.fromWei(balanceInWei);
            console.log("Balance in wei:", balanceInWei);
            console.log("Balance in ETH:", balance);
            let newData=new Data( {balance_in_wei:`${balanceInWei}`,
            balance_in_ETH:`${balance}`}
            
            );
            // console.log(newData)
            newData.save((err)=>{
              
            })

        });
    } catch (error) {
        console.log(error);
    }

}
checkBalance()


});











