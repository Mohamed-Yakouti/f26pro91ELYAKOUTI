var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    let images = [
        'item1.jpg',
        'item2.jpg',
        'item3.jpg',
        'item4.jpg',
        'item5.jpg'
    ];

    let selected = [];

    while (selected.length < 3) {
        let randomIndex = Math.floor(Math.random() * images.length);
        let image = images[randomIndex];

        if (!selected.includes(image)) {
            selected.push(image);
        }
    }

    res.render('randomitem', {
        title: 'Random Items',
        images: selected
    });
});

module.exports = router;