import express from  'express';
import {getExpense, updateExpense, createExpense , deleteExpense,getLastFiveExpense,getExpensesBySearch} from '../controllers/expenses.js';
import auth from '../middleware/auth.js';

const router= express.Router();
router.get('/five',auth , getLastFiveExpense);
router.get('/search',auth, getExpensesBySearch)
router.get('/',auth,  getExpense); 
router.post('/',auth , createExpense);
router.patch('/:id',  updateExpense);
router.delete('/:id',   deleteExpense);

export default router;