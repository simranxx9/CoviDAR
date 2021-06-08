var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applySchema = new Schema({

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

var Query = mongoose.model('Query', applySchema);
module.exports = Query;