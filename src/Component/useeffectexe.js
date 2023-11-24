import React from 'react';
import WidthS from './alert';
import { useNavigate } from 'react-router-dom';

const UseEffectExa = () => {

    const navigate = useNavigate()

    function gohome(){
        navigate("/")
    }

    return (
        <>
            <center>
                <WidthS/>
                <button onClick={gohome}>Go back</button>
            </center>
        </>
    )
}

export default UseEffectExa;