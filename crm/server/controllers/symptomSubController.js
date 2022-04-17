const { Symptoms_sub } = require("../models/models")

class symptomSubContoller {
    async create(req, res) {
        const { name } = req.body
        const symptoms_sub = await Symptoms_sub.create({ name })
        return res.json(symptoms_sub)
    }

    async getAll(req, res) {
        const symptoms_sub = await Symptoms_sub.findAll()
        return res.json(symptoms_sub)
    }
}

module.exports = new symptomSubContoller()
