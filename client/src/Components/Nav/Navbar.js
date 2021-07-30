import React, {useState, useEffect} from 'react';
import {Link , useHistory ,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AppBar, Typography, Toolbar, Button,Avatar, ButtonGroup} from '@material-ui/core';
import decode from 'jwt-decode';
import useStyles from './styles';
import piggy from '../../Images/piggy.png'
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';

const Nav= ()=>{
    const [user , setUser]= useState(JSON.parse(localStorage.getItem('profile')));
    const classes=useStyles();
    const history = useHistory();
    const location= useLocation();
    const dispatch= useDispatch(); 

    const logout= ()=>{
    
        setUser(null);
        dispatch({type: 'LOGOUT'}); 
        history.push('/auth');
    }
    useEffect(()=>{
      const token= user?.token;
    
      //JWT
      if(token){
          const decodedToken= decode(token);
          if(decodedToken.exp*1000< new Date().getTime())
            logout();
      }


      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
        
        
        <div className={classes.brandContainer}>
          
          <img className={classes.image} src={piggy} alt="icon" height="60" />
          <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Bank</Typography>
     
        </div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button component={Link} to="/"><AppsIcon/></Button>
                <Button component={Link} to="/dashboard"><DashboardIcon/></Button>
                <Button><AssessmentIcon/></Button>
            </ButtonGroup>
        <Toolbar className={classes.toolbar}>
  
        {       
            user? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                    {user?.result.name.charAt(0)}
                    </Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/" variant="contained" color="primary">SignIn</Button>
            )
        }
        </Toolbar>
        </AppBar>
    );
}


export default Nav;