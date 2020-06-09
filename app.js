const express = require('express')
const app = express()
const cors = require('cors')
const { mongoUrl, PORT } = require('./utils/config')
const mongoose = require('mongoose')

//Middleware
const middleware = require('./controllers/middleware')

//Routers
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

app.use(middleware.tokenExtractor)

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app