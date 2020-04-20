const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Sound.find(req.query)
        .sort({ id: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Sound.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Sound.create(req.body)
        .then(dbModel = res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}