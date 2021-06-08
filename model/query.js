const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const QuerySchema = new Schema(
    {
        name: {
            type: String
        },
        query: {
            type: String
        },
        address: {
            type: String
        },
        mobileNumber: {
            type: String
        },
        email: {
            type: String
        }
        ,
        time: {
            type: Date,
            default: Date.now
        }
    }
)

var Query = mongoose.model('Query', QuerySchema);
module.exports = Query;