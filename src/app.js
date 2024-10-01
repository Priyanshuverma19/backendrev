import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"





const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

// this is for which type of data come from the app

app.use(express.json({limit:"16kb"}))
// this is use for url data come from the app

app.use(express.urlencoded({extended:true,limit:"16kb"}))
// this use for static file like  pdf 

app.use(express.static("public"))

app.use(cookieParser())

export {app}