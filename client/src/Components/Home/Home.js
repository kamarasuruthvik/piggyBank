import React,{useState,  useEffect} from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import Form from './Form/Form';
import Expenses from './Expenses/Expenses';
import Search from './Search/Search'
import {useDispatch} from 'react-redux'; 

import {getExpenses} from '../../Actions/expenses';
import {Link , useHistory ,useLocation} from 'react-router-dom';
import decode from 'jwt-decode';
import Redirect from '../Redirect/Redirect';

const Home = () => {
    const [currentId, setCurrentId]= useState(null);
    const [user , setUser]= useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch= useDispatch();
    const history = useHistory();
    const location= useLocation();

    useEffect(()=>{
        dispatch(getExpenses());
    },[dispatch,currentId]);
    const handleUpdate =(id)=>{
        setCurrentId(id);
    }
    return (user?(
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid  item xs={12} sm={7} style={{maxHeight: '60vh', overflow: 'auto'}}>
                            <Expenses handleUpdate={handleUpdate}/>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Search/>
                           <Form currentId={currentId} handleUpdate={handleUpdate} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    ):(<Redirect/>)
    );
}

export default Home
