
const reducer = (state, action)=>{
    /* if(action.type === "INC"){
       return (state += 1);
    }
    if(action.type === "DEC"){
        let decNum = 0;
        state >= 1 ? (decNum = state - 1) : (decNum = 0);
        return decNum;
    }
    return state; */
        switch(action.type){
            case 'INC':
                return (state += 1);
            case 'DEC':
                let decNum = 0;
            state >= 1 ? (decNum = state - 1) : (decNum = 0);
            return decNum;
            
            default :
            return state;
        }
    }


    export default reducer;