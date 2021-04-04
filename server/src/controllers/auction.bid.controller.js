const { Auction } = require("../../db/models/auction.model.js");

module.exports = {
    getoneauction:async function (req, res) {
        try{
         const auction=await Auction.findOne({where:{id:req.params.id}})
         res.send(auction)
        }catch(err){
            console.log(err)
        }
    }

}

