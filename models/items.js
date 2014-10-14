var mongoose = require('mongoose');
var findOneOrCreate = require('mongoose-find-one-or-create');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    item: {
        type: String,
        unique: true
    },
    price: {
        type: Number
    }
});

UserSchema.plugin(findOneOrCreate);

var User = mongoose.model('Item', UserSchema);

module.exports = User;