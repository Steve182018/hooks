import React from 'react';
import { useNavigate } from 'react-router-dom';
import Memo from './memo';

const UseMemoExa = () => {

    const navigate = useNavigate()

    function gohome(){
        navigate("/")
    }

    return (
        <>
            <center>
                <Memo/>
                <button onClick={gohome}>Go back</button>
            </center>
        </>
    )
}

export default UseMemoExa;