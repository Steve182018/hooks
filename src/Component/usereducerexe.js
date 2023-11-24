import React from 'react';
import { useNavigate } from 'react-router-dom';
import Counter from './reducer';

const UseReducerExa = () => {

    const navigate = useNavigate()

    function gohome(){
        navigate("/")
    }

    return (
        <>
            <center>
                <Counter/>
                <button onClick={gohome}>Go back</button>
            </center>
        </>
    )
}

export default UseReducerExa;