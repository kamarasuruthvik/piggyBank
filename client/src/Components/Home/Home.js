import React,{useState,  useEffect} from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import Form from './Form/Form';
import Expenses from './Expenses/Expenses';
import {useDispatch} from 'react-redux'; 

import {getExpenses} from '../../Actions/expenses'
const Home = () => {
    const [currentId, setCurrentId]= useState(null);
    const handleUpdate =(id)=>{
        setCurrentId(id);
    }
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getExpenses());
    },[dispatch,currentId]);
    return (
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Expenses handleUpdate={handleUpdate}/>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                           <Form currentId={currentId} handleUpdate={handleUpdate} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    );
}

export default Home
