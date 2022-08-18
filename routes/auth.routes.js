const router = require("express").Router();
const User = require('../models/User.model');


//POSt '/auth/signup' => recibir perfil de usuario y crearlo en la BD
router.post('/signup', async (req,res,next)=>{
    console.log(req.body)
    const{username, email, password}= req.body
    if(!username|| !email|| !password){
        res.status(400).json({errorMessage: 'Debes rellenar todos los campos'})
        return;
    }
    let passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
    if(passwordRegex.test(password)===false){
        res.status.json({errorMessage: 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un signo'});
        return;
    }
    try {
        const foundUser = await User.findOne({email: email})
        if(foundUser !== null){
            res.status(400).json({errorMessage: 'Ese correo ya está siendo usado'})
            return;
        }
        const foundUserByUsername = await User.findOne({username});
        if(foundUserByUsername !== null){
            res.status(400).json({ererrorMessage:'Ese nombre de usuario ya está siendo usado'})
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        await User.create({
            username: username,
            email: email,
            password: hashedPassword
        })
        res.status(201).json()     
    } catch (error) {
        next(error)
    }
   
})

//POST 'auth/login' => validar las credenciales
router.post('/login', async(req,res,next)=>{
    console.log(req.body)
    const {username,password} = req.body;
    if(!username|| !password){
        res.status(400).json({errorMessage: 'Debes rellenar todos los campos'})
        return;
    }
    try {
        const foundUser = await User.findOne({username: username})
        if(foundUser === null){
            res.status(400).json({errorMessage: 'Usuario no existe'})
            return;
        }


        const isPasswordValid = await bcrypt.compare(password, foundUser.password);
        console.log('aqui', isPasswordValid);
        if (isPasswordValid === false){
            res.status(400).json({errorMessage:'Contraseña no valida'}); //no me sale
            return;
        }
    res.json('probando ruta')     
    } catch (error) {
        next(error)
    }
   
})


//GET '/auth/verify' verifcar que el usuario ya ha sido validado y está activo


module.exports = router;