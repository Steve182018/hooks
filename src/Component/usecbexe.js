import React from 'react';
import Alert_CB from './alert_cb';
import { useNavigate } from 'react-router-dom';

const UseCBExa = () => {

    const navigate = useNavigate()

    function gohome(){
        navigate("/")
    }

    return (
        <>
            <center>
                <Alert_CB/>
                <button onClick={gohome}>Go back</button>
            </center>
        </>
    )
}

export default UseCBExa;