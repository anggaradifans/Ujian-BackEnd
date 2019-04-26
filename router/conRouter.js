const router = require('express').Router()
const {addMovCat, deleteMovCat, getMovCat} = require('./../controller/conControllers')

router.get('/getMovCat', getMovCat)
router.post('/addMovCat', addMovCat)
router.delete('/deleteMovcat/:id', deleteMovCat)


module.exports = router