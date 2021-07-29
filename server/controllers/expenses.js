import mongoose from 'mongoose';
import expenseModel from '../models/expenseModel.js';

export const getExpense = async (req, res )=>{
    if(!req.userId)
    return res.json({message: "Unauthenticated"});
    const Id= req.userId; 
    try{
        const expenses= await expenseModel.find({userId:{$eq:Id}});
        res.status(200).json(expenses);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createExpense = async (req, res)=>{
    if(!req.userId)
        return res.json({message: "Unauthenticated"});
    const expense = req.body;
    const Id= req.userId;
    const newExpense = new expenseModel({...expense, userId:Id, dateTime: new Date().toISOString()});

    try{
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch( error){
        res.status(409).json({message: error.message});
    }
}

export const updateExpense = async (req, res)=>{
    const {id}= req.params;
    const { dateTime , amount , currency , description, category } = req.body; 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expense with id: ${id}`);

    const updatedExpense = {dateTime, amount, currency, description, category, _id:id }
 
    await expenseModel.findByIdAndUpdate(id, updatedExpense , {new: true});

    console.log('updatedExpense')
    res.json(updatedExpense);
}


export const deleteExpense= async (req, res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expense with id: ${id}`);


    await expenseModel.findByIdAndRemove(id);

    res.json({message: 'Expense Deleted Successfully'});
}
export const getLastFiveExpense = async (req, res )=>{
    if(!req.userId)
    return res.json({message: "Unauthenticated"});
    const Id= req.userId; 
    try{
        const expenses= await expenseModel.find({userId:{$eq:Id}}).sort({$natural:-1}).limit(5);
        res.status(200).json(expenses);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}