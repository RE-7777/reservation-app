const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const UserCtrl = require('../controllers/user');

// router.get('/secret', UserCtrl.authMiddleWare, function(req,res) {
//     return res.json({"secret": true});
// })

router.get('', function(req,res) {
    Product.find({},function(err,foundProducts) {
        res.json(foundProducts);
    })
})

router.get('/:productId', UserCtrl.authMiddleWare, function(req,res) {
    const productId = req.params.productId;
    Product.findById (productId, function(err,foundProduct) {
        if(err) {
            return res.status(422).send({errors:[{title:'Product error', detail:'Product not found!'}]});
        }
        res.json(foundProduct);
    })
})
module.exports = router;