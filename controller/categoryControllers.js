const db = require('./../database')


module.exports = {
    getCategory : (req,res) => {
        var sql = `select * from categories`
        db.query(sql, (err,result) => {
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    },
    addCategory : (req,res) => {
        var newData = {
            nama : req.body.nama
        }
        var sql = `select * from categories where nama = '${req.body.nama}'`
        db.query(sql, (err,result) => {
            if(err) throw err
            if(result.length > 0){
                res.send('Kategori sudah Ada')
            } else {
                var sql2 = `insert into categories set ?`
                db.query(sql2, newData, (err,result1) => {
                    if(err) throw err
                    res.redirect('/cat/getCategory')
                })
            }  
        })
       
    },
    editCategory : (req,res) => {
        var newData = {
            nama : req.body.nama
        }
        var sql = `update categories set ? where id = ${req.params.id}`
        db.query(sql, newData, (err,result) => {
            if(err) throw err
            res.redirect('/cat/getCategory')
        })
    },
    deleteCategory : (req,res) => {
        var sql = `delete from categories where id = ${req.params.id}`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.redirect('/cat/getCategory')
        })
    }
}