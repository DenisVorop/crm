const Router = require('express')
const patientController = require('../controllers/patientController')

const router = new Router()

router.post('/', patientController.create)
router.get('/', patientController.getAll)

module.exports = router
