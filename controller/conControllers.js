const db = require('./../database')

module.exports = {
    getMovCat : (req,res) => {
        var sql = `select m.nama as Movie, c.nama as Category from movcat
        join movies as m on idmovie = m.id
        join categories as c on idcategory = c.id;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addMovCat : (req,res) => {
        var newData = {
            idmovie : req.body.idmovie,
            idcategory : req.body.idcategory
        }
        var sql = `insert into movcat set ?`
            db.query(sql, newData, (err,result) => {
                if(err) throw err
                res.redirect('/movcat/getMovCat')
            })
    },
    deleteMovCat : (req,res) => {
        var sql = `delete from movcat where id = ${req.params.id}`
            db.query(sql, (err,result) => {
                if(err) throw err
                res.redirect('/movcat/getMovCat')
            })
    }
}