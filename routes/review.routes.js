const router = require("express").Router();
const isVerified = require("../middlewares/isVerified.js");
const Review = require('../models/Review.model.js')


//POST '/review/:idtravel'create comment in '/profile'
router.post('/:idTravel', isVerified,async (req,res,next)=>{
  const {idtravel} = req.params
  const {text}=req.body
  try {
      
      const newReview = await Review.create({
        owner:req.payload._id ,
        text:text ,
        travel:idtravel
      })
    res.json(newReview)    
    } catch (error) {
        next(error)
    }
})

//GET '/review/driver' =>  recibir info reseña del driver concreto
router.get('/driver', isVerified, async(req,res,next)=>{
  const  userid = req.payload._id
  
  try {
      const driverReview = await Review.find({owner:userid})
      res.json(driverReview)  
    } catch (error) {
      next(error)      
    }
})

//PATCH

//DELETE


module.exports = router;
