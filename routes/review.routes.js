const router = require("express").Router();
const isVerified = require("../middlewares/isVerified.js");
const Review = require('../models/Review.model.js')


//POST '/review/:idtravel'create comment in '/profile'
router.post('/:idDriver', isVerified,async (req,res,next)=>{
  const {idDriver} = req.params
  const {text}=req.body
  try {
      
      const newReview = await Review.create({
        owner:req.payload._id ,
        text:text ,
        user:idDriver
      })
    res.json(newReview)    
    } catch (error) {
        next(error)
    }
})

//GET '/review/driver' =>  recibir info reseña del driver concreto
router.get('/:idDriver/get', isVerified, async(req,res,next)=>{
  
  const {idDriver} = req.params
  
  try {
      const driverReview = await Review.find({user:idDriver})
      res.json(driverReview)  
    } catch (error) {
      next(error)      
    }
})



module.exports = router;
