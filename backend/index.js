const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
//ดึงเส้นทาง path ของ API ต่างๆมา
const TodoTaskRoute = require('./routes/todoTaskRoute')

const app = express()

app.use(express.json())
app.use(cors({origin: true}))
app.use(morgan('dev'))

//เชื่อมต่อกับฐานข้อมูล
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:false
})
.then(() => {
    console.log('Connect DATABASE Successfully')
})
.catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.json({
        data: "Wellcome to My API"
    })
})

//กำหนด path API โดยขึ้นต้นด้วย /api ในที่นี้ http://localhost:8080/api
app.use('/api', TodoTaskRoute)

const port = process.env.PORT || 8080
//กำหนด port ที่จะใช้
app.listen(port, () => console.log(`start server in port ${port}`))