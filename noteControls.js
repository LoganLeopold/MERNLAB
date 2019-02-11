const express = require('express')
const router = express.router
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { Note } = require('./noteModel')

module.exports = {

    list: (req,res) => {
        Note.find()
        .then((notes) => {
            res.json(notes)
          })
          .catch((err) => {
            console.log()
          })
    }

}
