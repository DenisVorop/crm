const { Card_info } = require("../models/models")

class cardInfoController {
    async create(req, res) {
        const { system } = req.body
        const card_info = await Card_info.create({ system })
        return res.json(card_info)
    }

    async getAll(req, res) {
        const card_info = await Card_info.findAll()
        return res.json(card_info)
    }
}

module.exports = new cardInfoController()
