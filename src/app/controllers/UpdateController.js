const User = require('../model/UserModel')
const Topic = require('../model/TopicModel')
const ProgramDetail = require('../model/ProgramDetailModel')
const Question = require('../model/QuestionModel')

class UpdateController {
    //hiển thị view update topic:
    showTopic(req, res, next) {
        if (req.query.id_topic == null) {
            res.send('Cần truyền Id')
        }
        Topic.findOne({ _id: req.query.id_topic }).then(topic => {
            var a = { title: topic.title, content: topic.content, _id: topic._id }
            res.render('update_topic', { topic: a })
        }).catch(e => res.render('404'))
    }

    // update topic
    async updateTopic(req, res, next) {
        if (req.query.id == null) {
            res.send('Cần truyền Id')
            return
        }
        try {
            Topic.findOne({ _id: req.query.id }).then(topic => {
                if (topic != null) {
                    topic.title = req.body.title
                    topic.content = req.body.content
                    topic.save().then(topic => {
                        res.redirect('/lesson_detail?lessonId=' + topic.lessonId)
                    }).catch(e => res.send('Có lỗi'))
                }
            })

        } catch (e) {
            res.send('Loi ' + e.message)
        }

    }

// update PROGRAM DETAIL
async updateProgramDetail(req, res, next) {
    if (req.query.id == null) {
        res.send('Cần truyền Id')
        return
    }
    try {
        ProgramDetail.findOne({ _id: req.query.id }).then(pro => {
            if (pro != null) {
                pro.title = req.body.title
                pro.content = req.body.content
                pro.save().then(topic => {
                    res.redirect('/lesson_detail?programId=' + req.body.programId   )
                }).catch(e => res.send('Có lỗi'))
            }
        })
    } catch (e) {
        res.send('Loi ' + e.message)
    }
}

    //update
    updateQuestion(req, res){
        if(req.body.id == null){
            res.json({ message: 'Cần truyền params id', status: false })
            return
        }
            Question.findOne({ _id: req.body.id }).then(question => {
                if (question != null) {
                    var arr = []
                        if (req.body.aA != null && req.body.aA.toString().trim() != '') {
                            arr.push(req.body.aA);
                        }
                        if (req.body.aB != null && req.body.aB.toString().trim() != '') {
                            arr.push(req.body.aB);
                        }
                        if (req.body.aC != null && req.body.aC.toString().trim() != '') {
                            arr.push(req.body.aC);
                        }
                        if (req.body.aD != null && req.body.aD.toString().trim() != '') {
                            arr.push(req.body.aD);
                        }
                    question.question = req.body.question
                    question.answer = arr
                    question.correctAnswer = req.body.correct

                    question.save().then(topic => {
                        res.redirect('/lesson.html')
                    }).catch(e => res.send('Có lỗi'))
                }else{
                    res.send('null roi bạn oi')
                }
            }).catch(e => res.send(e.message))

        
    }


}


module.exports = new UpdateController()