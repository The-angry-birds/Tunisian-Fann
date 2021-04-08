const router = require("express").Router();
const controllerArtist = require("../controllers/artists.controller.js");

/**
 * @swagger
 * componenets:
 *    schemas:
 *      Artist:
 *           type:object
 *            properties:
 *              id:
 *                  type:integer
 *                  description: The auto generated id
 *              firstName:
 *                  type:string
 *                  description:the name of the artist
 *              lastName:
 *                   type:string
 *                   description:the lastName of the artist
 *              email:
 *                   type:string
 *                   description:the email of the artist
 *              password:
 *                   type:integer
 *                   description:the password of the artist
 *              description:
 *                   type:string
 *                   description:the biography of the artist
 *              imageUrl:
 *                   type:string
 *                   description:the profile picture of the artist
 *              telNumber:
 *                   type:integer
 *                   description:the phone number of the artist
 *              accept:
 *                   type:boolean
 *                   description:the state  of the artist
 *              banned:
 *                   type:boolean
 *                   description:the state of the artist
 */

router.get("/", controllerArtist.getArtist);
router.get("/:id", controllerArtist.getbanned);
router.put("/:id", controllerArtist.bannedArtist);
router.put("/accept/:id/", controllerArtist.acceptArtist);

module.exports = router;
