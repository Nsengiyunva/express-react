import React from 'react';
import './FormFieldStyles.css'

export default ({ type, nameValue, placeholder, value ='', submit , color,styles }) => {
    if(type === "textarea"){
        return (
            <div className='field-container'>
                <textarea rows='4' autocomplete='off' placeholder={placeholder}></textarea>
            </div>
        )
    }
    if(type === 'button'){
        return (
            <div className='field-container'>
                <input className='button' style={{ backgroundColor: color }} type={'button'} name={nameValue} value={value} />
            </div>
        )
    }
    return (
        <div className='field-container'>
            <input type={ type ==='password' ? 'password':'text' } className='form-field' style={styles}
            name={nameValue} placeholder={placeholder} autocomplete='off'/>
        </div>
    )
}