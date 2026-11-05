var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let rows = Number(req.query.rows);
    let cols = Number(req.query.cols);

    let message = "";
    let grid = [];

    if (!Number.isInteger(rows) || !Number.isInteger(cols)) {
        message = "Rows and columns must be numbers.";
    }
    else if (rows < 2 || rows > 12 || cols < 2 || cols > 12) {
        message = "Rows and columns must be between 2 and 12.";
    }
    else {
        for (let r = 1; r <= rows; r++) {
            let row = [];

            for (let c = 1; c <= cols; c++) {
                row.push(c - r);
            }

            grid.push(row);
        }
    }

    res.render('grid', {
        title: 'Grid',
        message: message,
        grid: grid
    });
});

module.exports = router;