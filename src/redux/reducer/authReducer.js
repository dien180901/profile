const initialState={
    user:null,
    loading:false,
    error:"",
    isFirst:true
}

const authReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case "LOGIN_REQUEST":
            state.loading=true
            return {...state}
        case "LOGIN_SUCCESS":
            state.loading=false
            state.user=payload
            console.log("fgf",payload)
            state.isFirst=false;
            return {...state}
        case "LOGIN_FAIL":
            console.log("a");
            state.loading=false
            state.error=payload
            return{...state}
        case "LOGOUT":
                state.user=null
                state.loading=false;
                state.isFirst=true
                return{...state}
        default:    
            return {...state}

    }

}
export default authReducer