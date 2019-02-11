const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const noteControls = require('./noteControls')

app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./Router'))

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => console.log(`locked and loaded on ${app.get('port')}`))