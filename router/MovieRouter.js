const router = require('express').Router()
const {addMovie,getMovies, deleteMovie, editMovie} = require('../controller/MovieControllers')


router.get('/getMovies', getMovies)
router.post('/addMovies', addMovie)
router.put('/editMovies/:id', editMovie)
router.delete('/deleteMovies/:id', deleteMovie)


module.exports = router