const { mongoose } = require("mongoose")

const dbConnection = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/blockfuse')
        console.log("database connection successful")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection;