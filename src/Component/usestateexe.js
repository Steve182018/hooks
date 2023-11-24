import React from 'react';
import Text from './text.js';
import Counter from './counter.js'
import Age from './age.js'
import Form from './form.js';
import { useNavigate } from 'react-router-dom';

const UseStateExa = () => {

    const navigate = useNavigate()

    return (
        <>
            <center>
                <h1>Counter</h1>
                <Counter /><br /><br />
                <h1>Input</h1>
                <Text /><br /><br />
                <h1>Age</h1>
                <Age /><br /><br />
                <h1>Form</h1>
                <Form /><br /><br />
                <button onClick={()=>navigate("/")}>Go back</button>
                
            </center>
        </>
    )
}

export default UseStateExa;