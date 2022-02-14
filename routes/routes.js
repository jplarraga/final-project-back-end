const express = require('express')
const router = express.Router();

const {getAllData, createData, getOneItem, updateData, deleteData} = require('../controllers/CrudController')

router.route('/users/').get(getAllData).post(createData)
router.route('/:itemID').get(getOneItem).patch(updateData).delete(deleteData);


module.exports = router;