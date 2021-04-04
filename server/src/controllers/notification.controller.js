const { Notification } = require("../../db/models/notification.model");
const { Auction } = require("../../db/models/auction.model");
const { Artist } = require("../../db/models/artist.model");


module.exports ={
    postNotification: async (req, res) => {
        try {
          const auction = await Auction.findOne({
            where: { id: req.body.auction_id },
          });
          const artist = await Artist.findOne({ where: { id: req.body.artist_id} });
          if (artist && auction) {
            const notification = await Notification.create({
        
             auction_id: auction.id,
             artist_id: artist.id,
          
            });
            res.send(" notification created");
          } else {
            res.send("check artist id or auction id");
          }
        } catch (err) {
          console.log(err);
        }
      },
      getAllNotification:async (req, res) => {
       try{
           const notification = await Notification.findAll({where: {artist_id: req.params.id}})
           if(notification){

               res.send(notification)
           }
           else {
               console.log("no artist with this id ")
           }
       }catch (err) {
           console.log(err)
       }
      }
}


