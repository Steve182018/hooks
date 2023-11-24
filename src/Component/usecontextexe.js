import React from 'react';
import { useNavigate } from 'react-router-dom';
import Context_Example from './context';

const UseContextExa = () => {

    const navigate = useNavigate()

    return (
        <>
            <center>
                <Context_Example/><br/><br/>
                <button onClick={()=>navigate('/simple_context')}>Simple Context Example</button><br/><br/>
                <button onClick={()=>navigate('/')}>Go back</button>
            </center>
        </>
    )
}

export default UseContextExa;