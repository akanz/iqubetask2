let defaultState = {
    data:[]
}

const userReducer =(state=defaultState, action)=>{
    if(action.type==='callData'){
        return{
            ...state,
            data:action.data
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default userReducer