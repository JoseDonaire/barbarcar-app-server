const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
const authRoutes = require('./auth.routes')
router.use('/auth',authRoutes)

const travelsRoutes = require('./travels.routes')
router.use('/travels',travelsRoutes)

const profileRoutes = require('./profile.routes')
router.use('/profile',profileRoutes)

const reviewRoutes = require('./review.routes')
router.use('/review',reviewRoutes)


module.exports = router;
