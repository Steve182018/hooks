import React from 'react';
import { useNavigate } from 'react-router-dom';
import Counter_Ref from './counter_ref';

const UseRefExa = () => {

    const navigate = useNavigate()

    function gohome(){
        navigate("/")
    }

    return (
        <>
            <center>
                <Counter_Ref/><br/><br/>
                <button onClick={gohome}>Go back</button>
            </center>
        </>
    )
}

export default UseRefExa;