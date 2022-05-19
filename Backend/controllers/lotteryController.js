const lotterySchema = require('../models/lotteryModel');

const createLottery= async (req,res)=>{
    
    const lottery= new lotterySchema({
        lotteryId:req.params.lotteryId,
        remainingTime:req.params.remainingTime
    });
    try{
        await lottery.save();
        return res.status(200).send("Lottery Saved");
    }catch(err){
        return res.status(500).send(err);
    }
    
}

const readLottery= async (req,res)=>{
    let lottery
    
    try{

        lottery = await lotterySchema.findOne().sort({'_id':-1}).limit(1)
        return res.status(200).json(lottery);
    }catch(err){
        return res.status(500).send(err);
    }
    
}

module.exports={
    createLottery, readLottery
}