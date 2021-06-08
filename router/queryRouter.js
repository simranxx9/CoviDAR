
var express = require('express')
var bodyParser = require('body-parser')
const Query = require('../model/query.js')

const router = express.Router()

router.use(bodyParser.json());

router.get('/', (req, res, next) => {
    Query.find({})
        .then((queries) => {
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json')
            res.json({
                success: true,
                queries: queries
            })
        }, (err) => (next(err)))
        .catch((err) => {
            next(err);
        })
})

router.post('/', (req, res) => {
    const obj = {
        name: req.body.name,
        query: req.body.query,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email
    }
    console.log(obj);
    Query.create(obj, (err, items) => {
        if (err) {
            console.log(err)
        }
        else {
            res.statusCode = 201;
            res.setHeader('Content-type', 'application/json')
            res.json({
                success: true,
                queries: items
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