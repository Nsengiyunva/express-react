import React from 'react';
import './UtilStyles.scss'


export const countItemsinArray = (arrObj) => {
    let result = {};
    if(arrObj instanceof Array){
        arrObj.forEach( (value, index) => {
            if( !result[value.id] ){
                result[value.id] = [index]
            }
            else {
                result[value.id].push( index )
            }
        })
    }
    return result;
}


export const Loader = () => {
    return (
        <>
            <span>Loading...please wait</span>
            <div className='loader' />
        </>
    )
}