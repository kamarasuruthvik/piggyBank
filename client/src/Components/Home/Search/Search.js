import { FormControl, Paper, FormControlLabel,FormGroup, Checkbox,Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; 
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch} from 'react-redux';
import { getExpenses,searchExpenseByCategory } from '../../../Actions/expenses';

const Search = () => {
    const classes= useStyles();
    const [checked, setChecked] = useState([]);
    const dispatch= useDispatch();
const handleCheck = (event) => {
        const { value } = event.target;
        setChecked(checked.includes(value) ?checked.filter(c => c !== value) :[...checked, value]);
};

const handleSubmitSearch= ()=>{
    const searchQuery= checked.join();
    if(searchQuery=='')
        dispatch(getExpenses());
    else
        dispatch(searchExpenseByCategory(searchQuery));
}
    return (
        <Paper className={classes.paper}>
            <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={e=>handleCheck(e)} checked={checked.includes('Food')} color="" name="Food" value="Food"/>} label="Food"></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={e=>handleCheck(e)} checked={checked.includes('Home')} color="" name="Home" value="Home"/>} label="Home"></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={e=>handleCheck(e)} checked={checked.includes('Fuel')} color="" name="Fuel" value="Fuel"/>} label="Fuel"></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={e=>handleCheck(e)} checked={checked.includes('Shopping')} color="" name="Shopping" value="Shopping"/>} label="Shopping"></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={e=>handleCheck(e)} checked={checked.includes('other')} color="" name="other" value="other"/>} label="other"></FormControlLabel>
                <Button onClick={()=>handleSubmitSearch()} fullWidth variant="contained"><SearchIcon></SearchIcon>SEARCH</Button>
                
            </FormGroup>
        </Paper >
    )
}

export default Search;