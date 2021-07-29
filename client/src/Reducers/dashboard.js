export default (dashboard=[] , action )=>{
    switch(action.type){
        case  'FETCH_FIVE':
            return action.payload;
        default:
            return dashboard;
    }
}