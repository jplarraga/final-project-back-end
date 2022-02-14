const express = require('express')

const app = express()

const dotenv = require('dotenv').config();

const port = process.env.PORT;

const cors = require('cors');


const connectDb = require('./db/connection')
const router = require('./routes/routes')



app.use(express.json())
app.use(cors({
    origin: 'https://final-project-front-bank-app.herokuapp.com/'
}))

//Main Route

app.use('/api/v1',router )



//Start Server

const start = async () =>{
    try {
        await connectDb(process.env.DATABASE_CONNECT);
        app.listen(port, (req, res) =>{
            console.log('you are listening to port: ', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start();