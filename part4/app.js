const personsRouter = require("./controllers/persons")
const config = require("./utils/config")
const logger = require("./utils/logger")
const express = require("express")
const cors = require("cors")
const middleware = require("./utils/middleware")
const mongoose = require("mongoose")
const app = express()

mongoose.set("strictQuery", false)

logger.info("connecting to", config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info("Connected to MongoDB")
    })
    .catch(error => {
        logger.error("Error connecting to MongoDB", error.message)
    })

app.use(express.static("dist"))
app.use(express.json())
app.use(cors())
app.use(middleware.requestLogger)

app.use("/", personsRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
