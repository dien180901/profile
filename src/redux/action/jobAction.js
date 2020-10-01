
const getJobData = () => async (dispatch)=>{
    try{
        const url=`${process.env.REACT_APP_BACKEND_SERVER_URL}`
        const response= await fetch(url)
        const data = await response .json()
        console.log("data",data)
        dispatch({type:"GET_JOB_SUCCESS",payload:data})
    
    }catch(err){
        console.log(err.message)
    }
}
const getSingleJob = (id) => async (dispatch) => {
    try {
      let url = `process.env.REACT_APP_BACKEND_SERVER_URL${id}`;
      let data = await fetch(url);
      let result = await data.json();
      console.log("rr", result);
      dispatch({ type: "SINGLE_JOB_REQUEST_SUCCESS", payload: result });
    } catch (error) {
      console.log("error", error);
    }
  };
export const jobAction={
    getJobData,
    getSingleJob
}