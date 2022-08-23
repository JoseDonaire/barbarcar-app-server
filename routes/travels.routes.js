const router = require("express").Router();
const Travel = require('../models/Travel.model')

const isVerified = require('../middlewares/isVerified')

//GET '/api/travels' => enviar todos los viajes
router.get('/', async (req,res,next)=>{
    try {  
        const allTravels = await Travel.find()
        res.json(allTravels) 
    } catch (error) {
        next(error)     
    }
})

//GET '/api/travels/:idtravels' ==> enviar mis viajes
router.get('/mytravels',isVerified, async(req,res,next)=>{
    try {
      const userId = req.payload._id
      console.log('hola', req.payload._id)  
      const myTravels = await Travel.find({owner:userId})
      res.json(myTravels)
    } catch (error) {
        next(error)
    }
})

//POST '/api/travels/create' => recibir y crear un nuevo viaje
router.post('/create' ,isVerified,async(req,res,next)=>{
    const{date,from,to,car,bags,seatsCar,price,navigator}=req.body
  //  if(!date ||!from ||!tocar ||!bags ||!seatsCar ||!price) {
  //      res.json({errorMessage: '¡Nos falta información sobre tu viaje!'})
  //  }
    

    try {
       const newTravel = await Travel.create({
        date:date,
        from:from,
        to:to,
        car:car,
        bags:bags,
        seatsCar:seatsCar,
        price:price,
        owner:req.payload._id,
       }) 
        res.json(newTravel)
    } catch (error) {
        next(error)
    }
})


//GET  '/api/travels/:idTravel' => enviar los detalles de un viaje
router.get('/:idTravel',async (req,res,next)=>{
    const{idTravel}=req.params
    try {
        const singleTravel = await Travel.findById(idTravel)
        res.json(singleTravel)
    } catch (error) {
        next(error)
    }
})


//PATCH '/api/travels/:idTravel' ==> modificar los asientos libres
router.patch('/:idTravel',isVerified, async (req,res,next)=>{
    const{idTravel}=req.params
    const{date,from,to,car,bags,seatsCar,price}=req.body
    try {
        await Travel.findByIdAndUpdate(idTravel, {
            date:date,
            from:from,
            to:to,
            car:car,
            bags:bags,
            seatsCar:seatsCar,
            price:price
        })
        res.json('probando')
    } catch (error) {
        next(error)
    }
})

//DELETE '/api/travels/:idTravel' => eliminar viaje
router.delete('/:idTravel',isVerified, async (req,res,next)=>{
    const{idTravel}=req.params
    try {
        await Travel.findByIdAndDelete(idTravel)
        res.status(200).json()
    } catch (error) {
        next(error)
    }
})


module.exports = router;




