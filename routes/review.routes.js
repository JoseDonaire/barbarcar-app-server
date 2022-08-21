const router = require("express").Router();
const isVerified = require("../middlewares/isVerified.js");
const Review = require('../models/Review.model.js')
//POST '/review'create comment in '/profile'
router.post('/', isVerified,async (req,res,next)=>{
    try {
      const {text}=req.body
      // id travel
      const newReview = await Review.create({
        owner:req.payload._id ,
        text:text ,
       // travel:travel
      })
    res.json(newReview)    
    } catch (error) {
        next(error)
    }
})

//GET '/review/driver' =>  recibir info reseña del driver concreto
router.get('/driver', isVerified, async(req,res,next)=>{
    try {
      const driverReview = await Review.find({owner:req.payload._id})
      res.json(driverReview)  
    } catch (error) {
      next(error)      
    }
})

//PATCH

//DELETE


module.exports = router;
