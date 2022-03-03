

const mongoose = require("mongoose")
let Schema =mongoose.Schema;

const Web3 = require('web3');
const url = 'https://rinkeby.infura.io/v3/3b1489dee17f4a0f967085aabf1c2799'
const web3 = new Web3(url);
var Contract = require('web3-eth-contract');
const abi = require('./src/Abi.json')




Contract.setProvider(url);

const ABI = abi;
const CONTRACT_ADDRESS = '0x28d37B1a8f3B7eD936CE6BC590b07FBd574Ebc69';


let BlockChainSchema=new Schema({

    transactionIndex:{type:Number},
    blockNumber: {type:Number},

    
    },{
        timestamps:true
    })
    

const Data =mongoose.model('data',BlockChainSchema)
mongoose.connect("mongodb+srv://shivaji_01:1234@cluster0.cbbnq.mongodb.net/block-chain",(err)=>{
if(err)return console.log("Cannot connect to DB");

let myContract = new web3.eth.Contract(
    abi,
    CONTRACT_ADDRESS,
    )
    const response = myContract.getPastEvents('Transfer'
    ,
    {
        fromBlock: 10262750,
    }
    )
    .then(results => {
       results.map((values)=>{

            console.log(values.address)
            console.log(values.blockNumber)
            
                let newData=new Data(
                     {transactionIndex:values.address,
                     blockNumber:values.blockNumber
                     }
                     );
                        console.log(newData)
                        newData.save((err)=>{
                          
                        })
        })
   

    })
    .catch(err => { });


})








    
    
    
    
    
    
    
