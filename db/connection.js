const mongoose = require('mongoose');

const connectDb = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        //useCreateIndex: true,
        //usefindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDb;