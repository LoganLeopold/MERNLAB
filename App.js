const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override');


app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./Router'))

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => console.log(`locked and loaded on ${app.get('port')}`))