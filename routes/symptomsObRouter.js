const Router = require('express')
const symptomsObController = require('../controllers/symptomsObController')

const router = new Router()

router.post('/', symptomsObController.create)
router.get('/', symptomsObController.getAll)

module.exports = router
