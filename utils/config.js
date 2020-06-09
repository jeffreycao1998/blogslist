require('dotenv').config()

let mongoUrl = process.env.MONGODB_URL
let PORT = process.env.PORT

if (process.env.NODE_ENV === 'test') {
  mongoUrl = process.env.TEST_MONGODB_URL
}

module.exports = { 
  mongoUrl,
  PORT
}