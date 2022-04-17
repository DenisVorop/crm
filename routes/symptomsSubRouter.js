const Router = require('express')
const symptomSubController = require('../controllers/symptomSubController')

const router = new Router()

router.post('/', symptomSubController.create)
router.get('/', symptomSubController.getAll)

module.exports = router
