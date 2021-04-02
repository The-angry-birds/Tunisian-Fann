const { Auction } = require("../../db/models/auction");

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

