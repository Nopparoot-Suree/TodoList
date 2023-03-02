const TodoTask = require('../models/todoTaskSchema') //ดึง model schema เข้ามา

//เพิ่มข้อมูล โดยรับ content จาก front-end
exports.todoTaskCreate = (req, res) => {
    const { content } = req.body

    TodoTask.create({content})
    .then((data) => {
        res.json({
            message: "้เพิ่มข้อมูลเรียบร้อย"
        })
    }).catch((err) => {
        res.json({err: err})
    })
}

//ดูข้อมูลทั้งหมดใน collection
exports.todoTaskList = (req, res) => {
    TodoTask.find({}).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
}

//แก้ไขข้อมูลด้วย _id ของ row นั้นๆ
exports.todoTaskUpdate = (req, res) => {
    const { content } = req.body
    console.log(req.params);

    TodoTask.findOneAndUpdate({_id:req.params.id}, {content}, {new: true})
    .then((data) => {
        res.json({
            message: "แก้ไขข้อมูลเรียบร้อย"
        })
    }).catch((err) => {
        res.json(err)
    })
}

//ลบข้อมูลด้วย _id ของ row นั้นๆ
exports.todoTaskRemove = (req, res) => {
    TodoTask.findOneAndRemove({_id:req.params.id})
    .then((data) => {
        res.json({
            message: "ลบข้อมูลเรียบร้อย"
        })
    }).catch((err) => {
        res.json(err)
    })
}