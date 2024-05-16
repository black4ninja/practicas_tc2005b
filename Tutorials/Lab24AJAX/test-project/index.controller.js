const log = console.log;
var path = require('path');

var products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

module.exports.products = async (req, res) => {
    return res.status(200).json({products: products});
}

module.exports.prepare_million_products = async (req, res) => {
    for(var i = 4; i <= 1000000; i++){
        products.push({
            id: i,
            name: 'Product ' + i,
            price: i * 100 
        });
    }
    return res.status(200).json({});
}

module.exports.add_product = async(req,res) => {
    log(req.body)
    if(!req.body.id){
        return res.status(422).json({code:422, msg:'Id is missing'});
    }
    if(!req.body.name){
        return res.status(422).json({code:422, msg:'Name is missing'});
    }
    if(!req.body.price){
        return res.status(422).json({code:422, msg:'Price is missing'});
    }

    var newProduct = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };

    log('New product created:', newProduct);
    products.push(newProduct);
    return res.status(201).json({code:201, msg:'Product created successfully!'});
}