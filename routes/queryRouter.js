var express = require('express')
var bodyParser = require('body-parser');
// var multer = require('multer');


const Query = require('../models/query')
const router = express.Router();


router.use(bodyParser.json());
router.get('/', (req, res, next) => {
    Query.find({})
        .then((apply) => {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json')
            res.json({
                success: true,
                apply: apply
            })
        }, (err) => (next(err)))
        .catch((err) => {
            next(err);
        })
})
router.post('/', (req, res) => {
    console.log(req.body)
    var obj = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        query: req.body.query

    }
    console.log(req.body);
    Query.create(obj, (err, items) => {
        if (err) {
            console.log(err)
        }
        else {
            res.statusCode = 201;
            res.setHeader('Content-type', 'application/json')
            res.json({
                success: true,
                apply: items
            })
        }
    })
})

router.put('/', (req, res, next) => {
    res.statusCode = 500;
    res.json({
        success: false,
        message: "not allowed"
    })
})
router.delete('/', (req, res, next) => {
    Query.deleteMany({})
        .then((apply) => {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json')
            res.json({
                success: true

            })
        })

})
module.exports = router;