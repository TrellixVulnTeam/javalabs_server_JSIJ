const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Chat = new Schema({
    questionId: { type: String, default: '' },
    userId: { type: String, default: '' },
    quizId:{ type: String, default: '' },
    vote: { type: Number, default: 0 },
    message: { type: String, default: '' },
    date: { type: String, default: '' },
})

module.exports = mongoose.model('Chat', Chat)