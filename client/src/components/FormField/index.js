import React from 'react';
import './FormFieldStyles.css'

export default ({ valueField, onPress, onChange, type, nameValue, placeholder, value ='', submit , color,styles }) => {
    if(type === "textarea"){
        return (
            <div className='field-container'>
                <textarea onChange={onChange}  value={valueField} rows='4' autoComplete='off' placeholder={placeholder}></textarea>
            </div>
        )
    }
    if(type === 'button'){
        return (
            <div className='field-container'>
                <input className='button' style={{ backgroundColor: color }} type={'button'} name={nameValue} value={value} onClick={onPress}/>
            </div>
        )
    }
    return (
        <div className='field-container'>
            <input onChange={onChange}  type={ type ==='password' ? 'password':'text' } className='form-field' style={styles}
            name={nameValue} placeholder={placeholder} autoComplete='off' value={valueField}/>
        </div>
    )
}