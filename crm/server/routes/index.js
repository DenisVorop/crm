const Router = require('express')
const router = new Router()

const patientRouter = require('./patientRouter')
const cardRouter = require('./cardRouter')
const cardInfoRouter = require('./cardInfoRouter')
const symptomsObRouter = require('./symptomsObRouter')
const symptomsSubRouter = require('./symptomsSubRouter')
const userRouter = require('./userRouter')

router.use('/patient', patientRouter)
router.use('/card', cardRouter)
router.use('/cardinfo', cardInfoRouter)
router.use('/symptomsOb', symptomsObRouter)
router.use('/symptomsSub', symptomsSubRouter)
router.use('/user', userRouter)

module.exports = router
