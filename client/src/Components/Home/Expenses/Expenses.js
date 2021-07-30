import React from 'react'
import useStyles from './styles';
import Expense from './Expense/Expense'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

// const expenses= [{dateTime: new Date(), amount: 500, category: 'Food', description: 'Pizza at Dominos', currency:'$'},
//                 {   dateTime: new Date(), amount: 1337, category: 'Shopping', description: 'Bought cool sneakers and laptop coolers at Mall in Vijayawada', currency:'$'},
//                 {dateTime: new Date(), amount: 1000, category: 'Fuel', description: 'Fuel at Indian Oil Petrol Bump', currency:'$'}]
const Expenses = ({handleUpdate}) => {
    const classes= useStyles();
    const expenses= useSelector( (state)=> state.expenses);
    console.log('From expenses',expenses);


    return (

         (
            <Grid  container direction="column" justifyContent="center" alignItems="center">
                {
                    expenses.map((expense, index)=>(
                        <Grid key={index} item xs={12} sm={6}>
                            <Expense expense={expense} handleUpdate={handleUpdate} />
                        </Grid>
                    ))
                }
            </Grid>
        )

    );
}

export default Expenses
