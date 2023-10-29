// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models/db');

// Get all comments
router.get('/', function(req, res) {
    db.Comment.findAll().then(function(comments) {
        res.send(comments);
    });
});

// Get a comment
router.get('/:id', function(req, res) {
    db.Comment.findById(req.params.id).then(function(comment) {
        res.send(comment);
    });
});

// Create a comment
router.post('/', function(req, res) {
    db.Comment.create({
        text: req.body.text
    }).then(function(comment) {
        res.send(comment);
    });
});

// Update a comment
router.put('/:id', function(req, res) {
    db.Comment.update({
        text: req.body.text
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(comment) {
        res.send(comment);
    });
});

// Delete a comment
router.delete('/:id', function(req, res) {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(comment) {
        res.json({
            status: 'success'
        });
    });
});

module.exports = router;