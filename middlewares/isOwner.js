const Travel = require('../models/Travel.model')

const isOwner = async (req,res,next) =>{

    const userId = req.payload._id
    const {id} =req.params
    const myTravel = await Travel.findById(id)
    try {
        if (myTravel.owner == userId){
            next()
        }else{
            res.status(401).json({errorMessage:'You are not the owner'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    isOwner
}