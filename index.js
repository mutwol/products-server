const express = require("express");

const app = express();


app.get('/soko/products', (req, res) => {
            
    const products = [
        {
            "id":1,
            "product_name":"Product A",
            "unit_price":400,
            "stock_on_hand":24
        },
        {
            "id":2,
            "product_name":"Product B",
            "unit_price":230,
            "stock_on_hand":10
        },
        {
            "id":3,
            "product_name":"Product C",
            "unit_price":1200,
            "stock_on_hand":4
        },
        {
            "id":4,
            "product_name":"Product D",
            "unit_price":120,
            "stock_on_hand":16
        }
    ]

    res.json(products);

});


app.listen(3000 || port, (req, res) =>{
    console.log('Server is up');
});