import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import Moment from 'react-moment' ;
import {getExpenses} from '../../Actions/expenses';
import CategoryGraph from './CategoryGraph';
import { Typography ,Grid,Card,CardContent} from "@material-ui/core";
import useStyles from './styles';
import WeekGraph from './WeekGraph';
const Report = () => {
    const classes= useStyles();
    const expenses= useSelector((state)=> state.expenses);
    const dispatch= useDispatch();
    const [categoryTotal , setCategoryTotal]= useState();
    const [weekTotal, setWeekTotal]= useState();


    useEffect(()=>{
        dispatch(getExpenses());
        console.log(expenses);
    },[]);
    useEffect(()=>{
        divideCategory();
        divideWeek();

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
        const week=[{startDate:1 ,endDate:7, value:0 , name:'Week 1'},{startDate:8 ,endDate:14, value:0 , name:'Week 2' },{startDate:15 ,endDate:21, value:0, name:'Week 3' },{startDate:22 ,endDate:28, value:0 , name:'Week 4'},{startDate:29 ,endDate:31, value:0, name:'Week 5' }]
        const currentMonth= new Date().getMonth();
        for(let i=0 ;i<expenses.length; i++){
            const date= new Date(expenses[i].dateTime).getDate();
            const month= new Date(expenses[i].dateTime).getMonth();
            if(month===currentMonth){
                for(let j=0; j<week.length ; j++){
                    if(date<=week[j].endDate && date>=week[j].startDate)
                        week[j].value=week[j].value+ expenses[i].amount;
                }
            }
        }
        setWeekTotal(week);
    }
    return (
        <div>

            <Grid container>

            <Grid item  xs={12} md={6} className={classes.mainContainer} >
            <Typography variant="h3" gutterBottom>Reports</Typography>
            <CategoryGraph categoryTotal={categoryTotal}/>
            <Typography variant="caption" gutterBottom>categories spending (monthly)</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.mainContainer}>
            <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
            <Typography variant="caption" gutterBottom>Your expenses on a weekly basis this month</Typography>
            <WeekGraph weekTotal={weekTotal} />
            </CardContent>
            </Card>
            </Grid>
            </Grid>

        </div>
    );
}

export default Report

