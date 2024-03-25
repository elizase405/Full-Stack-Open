const logger = reguire("./utils/logger")
const config = require("./utils/config")
const app = require("./app")

app.listen(config.PORT, () => {
    logger.info(`Server started at PORT ${PORT}`)
})
