export const detailsInitalState={
    movie:null,
    isLoading:false,
    error:null
}

export const movieDetailsReducer=(state,action)=>{
 switch(action.type)
 {
    case "FETCH_START":
        return{
            ...state,
            isLoading:true,
            error:null
        }
    case "FETCH_SUCCESS":
        return{
            ...state,
            movie:action.payload,
            isLoading:false,
            error:null
        }
    case "FETCH_FAILURE":
        return{
            ...state,
            isLoading:false,
            error:action.payload
        }
    default: return state;
 }
}