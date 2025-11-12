import React from 'react';
import { FaCircleCheck, FaCircleExclamation } from 'react-icons/fa6';

const CheckPassword = ({password}) => { 
    const errors=[
        ["Password should 6 character long", password.length>=6],
        ["Password must contain one uppercase", /[A-Z]/.test(password)],
        ["Password must contain one lowercase", /[a-z]/.test(password)]
    ]

    const error=errors.find(item=>item[1]==false)

    if(!error){
        return null; //there is no error return null
    }

    return (
        <div>
        {errors.map(item=><div className='flex gap-2 justify-between'>{item[0]} {item[1]? <FaCircleCheck className='text-green-400' /> : <FaCircleExclamation className='text-red-400' />}</div>)}
        </div>
    );
};

export default CheckPassword;