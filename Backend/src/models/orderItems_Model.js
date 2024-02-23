const { default: mongoose } = require("mongoose");
const { Schema } = require("mongoose");

const orderItemSchema = new Schema({

    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    material:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
});

const OrderItem = mongoose.model('orderItems',orderItemSchema);
module.exports = OrderItem;