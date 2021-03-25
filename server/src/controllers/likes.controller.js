const { Likes } = require("../../db/models/likes");
const { Artwork } = require("../../db/models/likes");
const { User } = require("../../db/models/likes");


module.exports={
    setlike: async (req,res)=>{
        try{
            const findLikes = await Likes.findOne({where: { Artwork: req.body.artwork_id,userId:req.body.userId }})
            .then((res)=>{
                if(res){
                    res.send(res)


                }else{
                    if(res===undefined){

                    const saveLIkes = Likes.save();
                    }
                }
                res.send("saved",saveLIkes)

            })

        }catch(err){
            console.log(err)
        }
    }
}
