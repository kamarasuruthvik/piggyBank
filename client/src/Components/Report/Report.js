import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import Moment from 'react-moment' ;
import {getExpenses} from '../../Actions/expenses';
import CategoryGraph from './CategoryGraph';
import { Typography ,Grid} from "@material-ui/core";
import useStyles from './styles';
const Report = () => {
    const classes= useStyles();
    const expenses= useSelector((state)=> state.expenses);
    const dispatch= useDispatch();
    const [categoryTotal , setCategoryTotal]= useState();


    useEffect(()=>{
        dispatch(getExpenses());
        console.log(expenses);
    },[]);
    useEffect(()=>{
        divideCategory();
    },[expenses])

    const divideCategory = ()=>{
        const cat=[{name:'Food' , value:0 },{name:'Fuel' , value:0 },{name:'Shopping' , value:0 },{name:'Home' , value:0 },{name:'other' , value:0 }]
        const currentMonth= new Date().getMonth();
        for(let i= 0; i<expenses.length ; i++ ){
            const month= new Date(expenses[i].dateTime).getMonth();
            if(month ===currentMonth){
                for(let j=0; j<cat.length ; j++){
                    if(expenses[i].category===cat[j].name)
                        cat[j].value=cat[j].value+ expenses[i].amount;
                }
            }
        }
        setCategoryTotal(cat);
    }

    const divideWeek= ()=>{
        Date.prototype.getWeek = function() {
            var target  = new Date(this.valueOf());
            var dayNr   = (this.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            var firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() != 4) {
                target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - target) / 604800000);
          }
          
          const today = new Date();
          const weekNumber = today.getWeek();
          console.log(weekNumber); // Returns the week number as an integer
    }
    divideWeek();
    return (
        <div>

            <Grid container>

            <Grid item  xs={12} md={6} className={classes.mainContainer} >
            <Typography variant="h3" gutterBottom>Reports</Typography>
            <CategoryGraph categoryTotal={categoryTotal}/>
            </Grid>

            </Grid>

        </div>
    )
}

export default Report

