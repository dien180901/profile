const  initialstate={
    originalJobList:[],
    singlejob:{}
}
const jobReducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case "GET_JOB_SUCCESS":
            state.originalJobList=[...payload]
            return {...state}
        case "SINGLE_JOB_REQUEST_SUCCESS":
            state.singlejob={...payload}
            console.log(state.singlejob)
            return {...state}
        default:
            return {...state}
    }
    
};
export default jobReducer;