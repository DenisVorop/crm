const { Symptoms_ob } = require("../models/models")

class symptomsObContoller {
    async create(req, res) {
        const {  } = req.body
        const symptoms_ob = await Symptoms_ob.create({  })
        return res.json(symptoms_ob)
    }

    async getAll(req, res) {
        const symptoms_ob = await Symptoms_ob.findAll()
        return res.json(symptoms_ob)
    }
}

module.exports = new symptomsObContoller()
