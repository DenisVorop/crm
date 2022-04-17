const { Patient } = require("../models/models")

class patientController {
    async create(req, res) {
        const { name } = req.body
        const patient = await Patient.create({ name })
        return res.json(patient)
    }

    async getAll(req, res) {
        const patients = await Patient.findAll()
        return res.json(patients)
    }
}

module.exports = new patientController()
