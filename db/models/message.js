var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    from: String,
    to: String,
    datetime: Date,
    message: String
}, {collection: 'messages'});

module.exports = mongoose.model('MessageModel', MessageSchema);