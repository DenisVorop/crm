const Router = require('express')
const cardController = require('../controllers/cardController')

const router = new Router()

router.post('/', cardController.create)
router.get('/', cardController.getAll)

module.exports = router
