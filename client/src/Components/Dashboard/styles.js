import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
      },
    card:{
      width: '300px',
      marginTop:'20px',
    },
    cardContent:{
      display:'flex',
      justifyContent:'space-around',
      margin:'0',
    }
}));