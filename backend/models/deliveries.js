const mongoose = require('mongoose');

const Schema =  mongoose.Schema;
const deliverySchema = new Schema({

    deliveryNo : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    currentLocation : {
        type : String,
        required : true
    },
    deliveredDate: {
        type : String,
        required : true
    },
    dispatchedTime : {
        type : String,
        required : true
    },
     estimatedDeliverytime: {
        type : String,
        required : true
    },
    summery : {
        type : String,
        required : true
    }
})

const delivery = mongoose.model("deliveries",deliverySchema);
module.exports = delivery;
//module.exports = {delivery}
//module.exports = mongoose.model("deliveries",deliverySchema);
