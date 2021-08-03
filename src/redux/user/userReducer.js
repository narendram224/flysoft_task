import { HANDLE_CHANGE_INPUT, ON_SUBMIT_FORM } from "./userType";
import produce from "immer"

const initialState ={
    users:[],
        userField :{
            email:{ 
              label:"Email",
              name:"email",
              value:"",
            },
            dob:{
                label:"Date of Birth",
              name:"dob",
              value:"",
          },
          mobile:{
            label:"Mobile No",
              name:"mobile",
              value:"",
          }
  
          }
      
    
}

const userReducer =produce((draft=initialState, action) => {
    switch (action.type) {
        case HANDLE_CHANGE_INPUT:
            draft.userField[action.payload.name].value=action.payload.value

            return draft;
        case ON_SUBMIT_FORM:
                
                draft.users.push(draft.userField);
            return draft;
        
        default:
            return draft;
    }
});


export default userReducer;