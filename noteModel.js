const mongoose = require('./Connection')
const Schema = mongoose.Schema

const Note = new Schema({

    title: '',
    content: ''

});

module.exports = mongoose.model('Note', Note)

