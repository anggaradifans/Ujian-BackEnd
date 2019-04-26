const router = require('express').Router()
const {addCategory, getCategory,deleteCategory,editCategory} = require('./../controller/categoryControllers')


router.get('/getCategory', getCategory)
router.post('/addCategory', addCategory)
router.put('/editCategory/:id', editCategory)
router.delete('/deleteCategory/:id', deleteCategory)

module.exports = router