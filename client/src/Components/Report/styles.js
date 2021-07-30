import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
      },
    card:{
      marginTop:'20px',
    },
    cardContent:{
        display:'flex', 
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
    
}));