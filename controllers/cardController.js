const { Card } = require("../models/models")

class cardController {
    async create(req, res) {
        const { card_num } = req.body
        const card = await Card.create({ card_num })
        return res.json(card)
    }

    async getAll(req, res) {
        const card = await Card.findAll()
        return res.json(card)
    }
}

module.exports = new cardController()
