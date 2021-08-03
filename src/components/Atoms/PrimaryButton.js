import React from 'react'
import './PrimaryButton.css'
const PrimaryButton = ({onSubmitBtn}) => {
    return (
        <button type="submit" className="button" onClick={(e)=>onSubmitBtn(e)} >Sumbit</button>
    )
}

export default PrimaryButton
