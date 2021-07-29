import { FormControl, Paper, FormControlLabel,FormGroup, Checkbox,Button } from '@material-ui/core';
import React from 'react'; 
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    const classes= useStyles();
    return (
        <Paper className={classes.paper}>
            <FormGroup row>
                <FormControlLabel
                control={<Checkbox  onChange={()=>{}} name="food" color="" />}
                label="Food"
            />
            <FormControlLabel
                control={<Checkbox  onChange={()=>{}} name="food" color="" />}
                label="Shopping"
            />
            <FormControlLabel
                control={<Checkbox  onChange={()=>{}} name="food" color="" />}
                label="Fuel"
            />
            <FormControlLabel
                control={<Checkbox  onChange={()=>{}} name="food" color="" />}
                label="Home"
            />
            <FormControlLabel
                control={<Checkbox  onChange={()=>{}} name="food" color="" />}
                label="Other"
            />
            <Button fullWidth type='submit' variant="contained" ><SearchIcon/> SEARCH</Button>
            </FormGroup>
        </Paper >
    )
}

export default Search;