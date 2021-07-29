import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
    userId:String,
    dateTime:{
        type:Date,
        default:new Date()
    }, 
    amount:Number,
    currency:String,
    description:String, 
    category:String,
});

const expenseModel= mongoose.model('expenseModel', expenseSchema);

export default expenseModel;