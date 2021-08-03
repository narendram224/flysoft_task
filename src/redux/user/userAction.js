import {  HANDLE_CHANGE_INPUT, ON_SUBMIT_FORM } from "./userType"

 export const handleChangeInput = (name, value) => {
    return {
        type:HANDLE_CHANGE_INPUT,payload:{name,value}
    }
}
export const handleOnSumbitForm = ()=>{
    return {
        type:ON_SUBMIT_FORM
    }
}

//  const fetchUserSuccess = user=>{
//         return {
//             type:FETCH_USER_SUCCESS,
//             payload:user
//         }
// }   

//  const fetchUserFailure = error=>{
//     return {
//         type:FETCH_USER_FAILURE,
//         payload:error
//     }
// }

// export const fetchUser = ()=>{
//     return (dispatch)=>{
//             dispatch(fetchUserRequest);
//             Axios.get("https://jsonplaceholder.typicode.com/users")
//             .then( response=>{
//                     const user = response.data;
//                     dispatch(fetchUserSuccess(user))
//             })
//             .catch((err)=>{
//                 const error = err.message;
//                 dispatch(fetchUserFailure((error)))
//             })
//     }
// }