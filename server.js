const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt")


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/rockthevotedb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the DB')
)

app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ['sha1', 'RS256', 'HS256']}))
app.use("/api/issue", require("./routes/issueRouter.js"))
app.use("/api/users", require("./routes/usersRouter.js"))
app.use("/api/comments", require("./routes/commentRouter.js"))

app.use(
    (err, req, res, next) => {
        console.log(err)
        if(err.name === "UnauthorizedError"){
            res.status(err.status)
        }
        return res.send({errMsg: err.message})
    
         
    }
)

app.listen(7000, ()=> {
    console.log('This server is running on Port 7000')
})