const app = require('./app')

const cloudinary = require('cloudinary')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

// handling uncaught error
process.on('uncaughtException',err =>{
    console.log(`Error: ${err.message}`)
    console.log("Server is shutting down due to uncaught error")

    process.exit(1)
})

dotenv.config({path:"backend/config/config.env"})

connectDatabase()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})


// Unhandled Promise Error

process.on("unhandledRejection",err =>{
    console.log(`Error: ${err.message}`)
    console.log('Server is shutting down due to unhandled promise rejection')

  server.close(()=>{
    process.exit(1)
  })
})