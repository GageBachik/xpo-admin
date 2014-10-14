var Item = require('../models/items.js');

var indexController = {

	index: function(req, res) {

        if (req.session.password !== 'Ava123!') {
            res.redirect('/auth');
        }else{
            Item.find({}, function (err, items) {
                res.render('index', {items: items});
            });
        }

        // Item.findOneOrCreate({item: 'Brightline Bags'}, {
        //     item: 'Brightline Bags', 
        //     price: 164.37
        // }, function(err, user){
        //     if (err) { 
        //         res.send(err);
        //     }
        // });
	},

    auth: function(req, res){
        if (req.body.pass === 'Ava123!') {
            req.session.password = 'Ava123!';
            res.send('success');
        }else{
            res.render('auth');
        }
    }
};

module.exports = indexController;