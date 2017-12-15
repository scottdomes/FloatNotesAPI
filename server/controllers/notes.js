const Note = require('../models').Note;
const Label = require('../models').Label;

module.exports = {
  create(req, res) {
    return Note
      .create({
        text: req.body.text,
        source_work: req.body.source_work,
        source_author: req.body.source_author
      })
      .then(note => res.status(201).send(note))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Note
      .findAll({
        include: [{
          model: Label,
          as: 'labels',
        }],
      })
      .then(notes => res.status(200).send(notes))
      .catch(error => res.status(400).send(error));
  },
};