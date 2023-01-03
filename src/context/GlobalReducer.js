const GlobalReducer = (state , action) => {
    switch (action.type) {
        
        case "GET_DATA" : 
        return {
            ...state,
            photos : action.payload
        }
    
        default:
            return state;
    }
}

export default GlobalReducer