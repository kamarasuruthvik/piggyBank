import { CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card:{
        width:'300px',
        marginTop:'20px',
    },
    actions:{
        display:'flex', 
        justifyContent:'space-between'
    },
    green:{
        color:'green'
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        marginBottom:'10px',
    },
    main:{
        display:'flex',
        justifyContent:'center',
    },
    description:{
        textAlign:'center',
    }
});