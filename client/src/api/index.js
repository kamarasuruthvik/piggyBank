import axios from 'axios'; 
// const url= 'http://localhost:5000';
// export const fetchExpenses= ()=> axios.get(`${url}/expenses`); 
// export const makeExpense= (newExpense)=> axios.post(`${url}/expenses`,newExpense);
// export const deleteExpense = (id)=>axios.delete(`${url}/expenses/${id}`);
// export const updateExpense= (id, newExpense)=> axios.patch(`${url}/expenses/${id}`, newExpense);


// export const signin = (formData)=> axios.post( `${url}/user/signin`, formData); 
// export const signup = (formData)=> axios.post( `${url}/user/signup`, formData); 

const API= axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')) {
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        console.log(req.headers);
    }

    return req;
});

export const fetchExpenses = ()=> API.get('expenses');
export const makeExpense = (newExpense) => API.post('expenses', newExpense);
export const updateExpense = (id, updatedExpense) => API.patch(`expenses/${id}`, updatedExpense);
export const deleteExpense = (id) => API.delete(`expenses/${id}`);


export const signin = (formData)=> API.post('/user/signin', formData);
export const signup = (formData)=> API.post('/user/signup', formData);