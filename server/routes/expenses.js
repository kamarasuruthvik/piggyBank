import express from  'express';
import {getExpense, updateExpense, createExpense , deleteExpense} from '../controllers/expenses.js';
import auth from '../middleware/auth.js';

const router= express.Router();

router.get('/',auth,  getExpense); 
router.post('/',auth , createExpense);
router.patch('/:id',  updateExpense);
router.delete('/:id',   deleteExpense);

export default router;