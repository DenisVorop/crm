const Router = require('express')
const cardInfoController = require('../controllers/cardInfoController')

const router = new Router()

router.post('/', cardInfoController.create)
router.get('/', cardInfoController.getAll)

module.exports = router
