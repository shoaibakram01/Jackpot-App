const adminSchema = require('../models/adminModel');

const adminLogin= async (req,res)=>{
    let adminData;
    try{
        console.log(req.params.walletAddress)
        adminData= await adminSchema.findOne({ walletAddress:req.params.walletAddress, userName:req.params.userName, password:req.params.password});
        console.log(adminData)
    }catch(err){
        res.status(500).send(err);
    }
    if(adminData){
        return res.status(200).json({auth: true, msg:'Welcome Admin'});
    }
    else{
        return res.status(200).json({auth: false, msg:'Invalid User Name/Password/Wallet'});
    }
}
module.exports={
    adminLogin,
}