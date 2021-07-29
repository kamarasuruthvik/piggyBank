export default (expenses=[] , action )=>{
    switch(action.type){
        case  'FETCH_ALL':
            return action.payload;
        case 'CREATE':{
            return [...expenses , action.payload]; 
        }
        case 'UPDATE':{
            const newArray = expenses.map((expense)=> {return (expense._id=== action.payload)? action.payload._id: expense}); 
            expenses= newArray; 
            console.log('Hey from reducers', newArray);
            return expenses;
        }
        case 'DELETE':{
            return expenses.filter((expense)=> expense._id!== action.payload); 
        }
        default:
            return expenses;
    }
}