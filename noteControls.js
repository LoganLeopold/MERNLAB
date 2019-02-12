const express = require('express')
const methodOverride = require('method-override');
const Note = require('./noteModel')

module.exports = {

    list: (req,res) => {
        Note.find()
        .then((notes) => {
            res.json(notes)
            console.log(notes)
          })
          .catch((err) => {
            console.log()
          })
    },

    delete: (req,res) => {
      console.log(req.params)
      Note.findOneAndDelete(
        {_id: req.params.id}
      )
      .then ((deletion) => {
        console.log('deletion successful')
        res.redirect('/')
      })
    }

}

