import express from "express";
import path from 'path'
import configViewEngine from "./config/viewEngine";

const app = express()

const port = 3000

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log('http://localhost:' + port)
})