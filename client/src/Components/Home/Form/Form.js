import React, { useState , useEffect} from 'react'
import useStyles from './styles'
import {TextField , Button , Typography , Paper, RadioGroup ,FormControlLabel, Radio , Grid } from '@material-ui/core';
import { useDispatch , useSelector} from 'react-redux';
import {createExpense, updateExpense } from '../../../Actions/expenses';


const Form = ({currentId, handleUpdate}) => {
    const [expData, setExpData] = useState({
        amount:null, description:'', category: ''
    });
    const expense= useSelector((state)=> currentId?state.expenses.find((exp)=> exp._id===currentId):null);

    const classes= useStyles();
    const dispatch  = useDispatch();
   useEffect(()=>{
       if(expense)
            setExpData(expense);
   },[expense])

    //function to handle submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId!=null){
            dispatch(updateExpense(currentId, expData));
        }else{
            dispatch(createExpense(expData));
        }
        clear();
    }


    const clear=()=>{
        handleUpdate(null);
        setExpData({amount:'', description:'', category: ''})

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

            <Typography variant="h6">
               Create an Expense
            </Typography>
        <TextField name="amount" variant="outlined" type="Number" label="Amount" required fullWidth value={expData.amount} onChange={(e) => setExpData({ ...expData, amount: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={expData.description} onChange={(e) => setExpData({ ...expData, description: e.target.value })} />

                <RadioGroup className={classes.fileInput} row aria-label="category" name="category" value={expData.category} onChange={(e)=> setExpData({...expData, category: e.target.value})}>
                <Grid alignContent="center" alignItems="center"> 
                <FormControlLabel  value="Home" control={<Radio />} label="Home" />
                <FormControlLabel value="Food" control={<Radio />} label="Food" />
                <FormControlLabel value="Fuel" control={<Radio />} label="Fuel" />
                <FormControlLabel value="Shopping" control={<Radio />} label="Shopping" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </Grid>


            </RadioGroup>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        
        </form>
    </Paper>
    );
}

export default Form;
