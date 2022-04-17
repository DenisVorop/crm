const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'admin' }
})

const Patient = sequelize.define('patient', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    time_id: { type: DataTypes.INTEGER },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    sex: { type: DataTypes.STRING },
    marital_status: { type: DataTypes.STRING },
    birth: { type: DataTypes.INTEGER },
    reg_addres: { type: DataTypes.STRING },
    fact_addres: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.INTEGER, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    policy: { type: DataTypes.INTEGER, unique: true },
    card_num: { type: DataTypes.INTEGER, unique: true },
    clinic_addres: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    first_record: { type: DataTypes.INTEGER },
    last_record: { type: DataTypes.INTEGER },
})

const Card = sequelize.define('card', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // card_info: { type: DataTypes.ARRAY },
    // last_records: { type: DataTypes.ARRAY },
    policy: { type: DataTypes.INTEGER, unique: true },
    card_num: { type: DataTypes.INTEGER, unique: true },
})

const Card_info = sequelize.define('card_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    system: { type: DataTypes.STRING },
    label_sub: { type: DataTypes.STRING },
    label_ob: { type: DataTypes.INTEGER },
    symptoms_sub: { type: DataTypes.STRING },
    symptoms_ob: { type: DataTypes.STRING },
})

const Symptoms_sub = sequelize.define('symptoms_sub', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    1: { type: DataTypes.STRING },
    2: { type: DataTypes.STRING },
    3: { type: DataTypes.STRING },
    4: { type: DataTypes.STRING },
    5: { type: DataTypes.STRING },
    6: { type: DataTypes.STRING },
    7: { type: DataTypes.STRING },
    8: { type: DataTypes.STRING },
    9: { type: DataTypes.STRING },
    10: { type: DataTypes.STRING },
    11: { type: DataTypes.STRING },
    12: { type: DataTypes.STRING },
    13: { type: DataTypes.STRING },
    14: { type: DataTypes.STRING },
})

const Symptoms_ob = sequelize.define('symptoms_ob', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    1: { type: DataTypes.STRING },
    2: { type: DataTypes.STRING },
    3: { type: DataTypes.STRING },
    4: { type: DataTypes.STRING },
    5: { type: DataTypes.STRING },
    6: { type: DataTypes.STRING },
})

Patient.hasOne(Card)
Card.belongsTo(Patient)

Card.hasOne(Card_info)
Card_info.belongsTo(Card_info)

Card_info.hasMany(Symptoms_sub)
Symptoms_sub.belongsTo(Card)

Card_info.hasMany(Symptoms_ob)
Symptoms_ob.belongsTo(Card_info)

module.exports = {
    Patient, Card, Card_info, Symptoms_sub, Symptoms_ob, User
}
