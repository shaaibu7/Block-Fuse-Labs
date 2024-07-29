const { mongoose } = require("mongoose")

const dbConnection = () => {
    try {
        mongoose.connect()
    } catch (error) {
        console.log(error)
    }
}