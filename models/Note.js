const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
  email: { type: String, required: true },
  note: {
    title: { type: String, required: true },
    text1: { type: String, required: true },
    text2: { type: String, required: true },
    text3: { type: String, required: true },
    text4: { type: String, required: true },
    text5: { type: String, required: true },
    text6: { type: String, required: true },
    date: { type: Date, required: true }
  }
})

module.exports = model('Note', noteSchema)
