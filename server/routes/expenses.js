import express from  'express';
import {getExpense, updateExpense, createExpense , deleteExpense,getLastFiveExpense} from '../controllers/expenses.js';
import auth from '../middleware/auth.js';

const router= express.Router();
router.get('/five',auth , getLastFiveExpense)
router.get('/',auth,  getExpense); 
router.post('/',auth , createExpense);
router.patch('/:id',  updateExpense);
router.delete('/:id',   deleteExpense);

export default router;