const express = require('express')
const route = express.Router()
const lessonDetailController = require('../controllers/LessonDetailController')

route.get('/', lessonDetailController.index)

route.post('/delete_quiz', lessonDetailController.deleteQuiz)

route.post('/delete_topic', lessonDetailController.deleteTopic)

// route.get('/update_topic', lessonDetailController.updateTopic)

module.exports = route