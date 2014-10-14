var Item = require('../models/items.js');

var apiController = {

    save: function(req, res) {

        Item.findOne({item:req.body.item}, function (err, item) {
            item.price = req.body.price
            item.save(function(err, item){
                console.log("item saved!");
            });
            res.send('success');
        });
    },

    get: function(req, res) {

        Item.findOne({item:req.body.item}, function (err, item) {
            res.send(item);
        });
    }
};

module.exports = apiController;