const express = require('express')
const router = express.Router()
//เรียกตัวควบคุม API มาใช้
const { todoTaskCreate, todoTaskList, todoTaskUpdate, todoTaskRemove } = require('../controllers/todoTaskController')

//กำหนด path ของ API เพื่อทำ CRUD
// post = Create
// get = Read
// put = Update
// delete = Dalete
router.post('/create', todoTaskCreate)
router.get('/todolist', todoTaskList)
router.put('/todolist/:id', todoTaskUpdate)
router.delete('/todolist/:id', todoTaskRemove)

module.exports = router;