const db = require('../database')

module.exports = {
    getMovies : (req,res) => {
        var sql = `select * from movies`
        db.query(sql, (err,result) => {
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    },
    addMovie : (req,res) => {
        var newData = {
            nama : req.body.nama,
            tahun : req.body.tahun,
            description : req.body.description
        }
        var sql = `insert into movies set ?`
        db.query(sql, newData, (err,result) => {
            if(err) throw err
            res.redirect('/api/getMovies')
        })
    },
    editMovie : (req,res) => {
        var newData = {
            nama : req.body.nama,
            tahun : req.body.tahun,
            description : req.body.description
        }
        var sql = `update movies set ? where id = ${req.params.id}`
        db.query(sql, newData, (err,result) => {
            if(err) throw err
            res.redirect('/api/getMovies')
        })
    },
    deleteMovie : (req,res) => {
        var sql = `delete from movies where id = ${req.params.id}`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.redirect('/api/getMovies')
        })
    }

}