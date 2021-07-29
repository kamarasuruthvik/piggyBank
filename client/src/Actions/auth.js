import * as api from '../api/index.js';

export const signin =(formData, history)=> async(dispatch)=>{
    try{
        // login the user..
        console.log('A signin request has been sent!!');
        const {data}= await api.signin(formData);
        dispatch({type: 'AUTH', data});
        history.push('/');
    }catch(error){
        console.log(error);
    }
}
export const signup =(formData, history)=> async(dispatch)=>{
    try{
        // signup the user..
        console.log('A singup request has been sent!');
        const {data}= await api.signup(formData);
        dispatch({type: 'AUTH', data})
        history.push('/');
    }catch(error){
        console.log(error);
    }
}