var express = require('express');
var router = express.Router();

var modelPathUser = "./../db/models/user";
var modelPathMessage = "./../db/models/message";

var UserModel = require(modelPathUser);
var MessageModel = require(modelPathMessage);

router.post('/adduser', function(req, res) {
    var newUser = {
        username: req.body.registerUsername,
        password: req.body.registerPassword,
        email: req.body.registerEmail
    };
    UserModel.findOne({ username: req.body.registerUsername }, function(err, user) {
        if (user) {
            console.log('Already user');
            res.send('alreadyuser');
        } else {
            new UserModel(newUser).save(function (err, user) {
                if (err) throw err;
                res.send('useradded');
            });
        }
    });
});

router.post('/loginuser', function(req, res) {
    UserModel.findOne({ username: req.body.loginusername }, function(err, user) {
        if (user) {
            user.comparePassword(req.body.loginpassword, function(err, isMatch) {
                if (isMatch) {
                    res.send(user._id);
                }
                else res.send('matchfalse');
            });
        } else {
            res.send('nouser');
        }
    });
});

router.get('/userlist', function(req, res) {
    UserModel.find()
        .then( function (doc) {
            res.json(doc);
        });
});

router.post('/sendmessage', function(req, res) {
    var newMessage = {
        from: req.body.from,
        to: req.body.to,
        datetime: Date.now(),
        message: req.body.message
    };
    new MessageModel(newMessage).save(function (err, message) {
        if (err) throw err;
        res.send(message);
    });
});

router.get('/viewinbox/:id', function(req, res) {
    console.log(req.params.id);
    MessageModel.find({'to': req.params.id})
        .then( function (doc) {
            res.send(doc);
        });
});

router.get('/viewoutbox/:id', function(req, res) {
    console.log(req.params.id);
    MessageModel.find({'from': req.params.id})
        .then( function (doc) {
            res.send(doc);
        });
});

module.exports = router;
