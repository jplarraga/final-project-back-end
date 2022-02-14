const mongoose = require('mongoose');

const CrudSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim:true,
        maxlength: [20, 'Name must be less than 20 characters']
    },
    email: {
        type:String,
        required: true
    },

    password: {
        type:String,
        required: true
    },
    
    balance: {
        type: Number,
        required: true,
    }


}, {
    timestamps: true
    })

    module.exports = mongoose.model('Users', CrudSchema)