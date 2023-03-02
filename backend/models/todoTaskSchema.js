const mongoose = require('mongoose'); //เรียกใช้ ฐานข้อมูล mongodb

//สร้างโครงสร้างฐานข้อมูล
const todoTaskSchema = mongoose.Schema({
    content : {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})


//นำออกไปใช้ในไฟล์ต่างๆ
module.exports = mongoose.model("TodoTask", todoTaskSchema)