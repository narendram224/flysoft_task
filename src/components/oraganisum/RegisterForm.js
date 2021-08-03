import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeInput, handleOnSumbitForm } from '../../redux'
import PrimaryButton from '../Atoms/PrimaryButton'
import PrimaryInputField from '../Atoms/PrimaryInput'

const RegisterForm = (onSubmit) => {
    const emailRef = useRef()

    const dispatch = useDispatch()
    const onSubmitForm =(e)=>{
        e.preventDefault();
        dispatch(handleOnSumbitForm())
    }
    const onHandleChange =(e)=>{
        console.log("the ",e.target.name,"value",e.target.value);
        e.preventDefault();
        dispatch(handleChangeInput(e.target.name,e.target.value))

    }
    const clearForm = () => { 
        document.getElementById("user_form").reset();
      }
      const user = useSelector(state=>state.user);
      const fieldData =user.userField;
      console.log("the user",fieldData);
      console.log("email",fieldData.email.value);

    const formStaticData =[{
        label:'Name',
        type:'text',
        name:'name'
    },
    {
        label:'Name',
        type:'text',
        name:'name'
    },{
        label:'Name',
        type:'text',
        name:'name'
    }]
    return (
        <div>
            <form id="user_form">
                
                            <PrimaryInputField 
                                ref ={emailRef}
                                label={fieldData.email.label}
                                type={'text'}
                                name={fieldData.email.name}
                                value={fieldData.email.value}
                                handleChange={onHandleChange}
                          />
                    <PrimaryInputField 
                                label={fieldData.dob.label}
                                type={'date'}
                                name={fieldData.dob.name}
                                value={fieldData.dob.value}
                                handleChange={onHandleChange}
                          />
                           <PrimaryInputField 
                          label={fieldData.mobile.label}
                          type={'number'}
                          name={fieldData.mobile.name}
                          value={fieldData.mobile.value}
                          handleChange={onHandleChange}
                    />
                    {/* <PrimaryInputField 
                                label={fieldData.label}
                                type={'text'}
                                name={fieldData.name}
                                value={fieldData.value}
                                handleChange={onHandleChange}
                                value={user}
                          />
                    <PrimaryInputField 
                                label={fieldData.label}
                                type={'text'}
                                name={fieldData.name}
                                value={fieldData.value}
                                handleChange={onHandleChange}
                                value={user}
                          /> */}
                
                <PrimaryButton onSubmitBtn={onSubmitForm} />
            </form> 

</div>
                        )

    
}

export default RegisterForm
