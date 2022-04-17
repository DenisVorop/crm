require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandlerMiddleware = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 4444

const app = express()
const corsConfig = {
    credentials: true,
    origin: true,
}

app.use(cors(corsConfig))
app.use(express.json())
app.use('/api', router)



// Обработка ошибок, идет в конце
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()
