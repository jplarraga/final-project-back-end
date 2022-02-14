const CrudSchema = require('../models/userModel');

const getAllData = async (req, res) => {
    try {
        const data = await CrudSchema.find({})
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const createData = async (req, res) => {
    try {
        const data = await CrudSchema.create(req.body)
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


const getOneItem = async (req, res) => {
    try {
        
        const {itemID} = req.params;
        const data = await CrudSchema.find({_id:itemID})

        if(!data){
            res.status(404).json({
                message: 'This transaction dose not exist'
            })
            res.status(200).json({data})
        }
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const updateData = async (req, res) => {
    try {
        const {itemID} = req.params;
        const data = await CrudSchema.findByIdAndUpdate({_id:itemID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!data){
            res.status(404).json({
                message: 'This transaction dose not exist'
            })
            res.status(200).json({data})
        }
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const deleteData = async (req, res) => {
    try {
        const {itemID} = req.params;
        const data = await CrudSchema.findByIdAndDelete({_id:itemID})

        if(!data){
            res.status(404).json({
                message: 'This transaction dose not exist'
            })
            res.status(200).json({data})
        }
    } catch (error) {
        res.status(500).json({message: error})
    }
}



module.exports = {
    getAllData, createData, getOneItem, updateData, deleteData
}
