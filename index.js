const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('<h1> Ini Homepage </h1>')
})

app.use('/api', require('./router/MovieRouter'))
app.use('/cat', require('./router/categoryRouter'))
app.use('/movcat', require('./router/conRouter'))

app.listen(port, () => console.log('Server Aktif di Port ' + port))