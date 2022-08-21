
const router = require("express").Router();
const isVerified = require('../middlewares/isVerified');
const Travel = require('../models/Travel.model');


//GEt '/profile'  => recibimos la info del perfil del usuario
router.get('/',isVerified, async(req,res,next)=>{

    try {
       const userId= req.payload._id
       const myTravels= await Travel.find({owner:userId})
       res.json(myTravels)
    } catch (error) {
        next(error)
    }

})



module.exports = router;

