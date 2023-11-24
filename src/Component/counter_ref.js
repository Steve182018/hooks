import React, { useEffect, useRef, useState } from 'react'

const Counter_Ref = () => {

    const inputRef = useRef();

    
    const change = ()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    };

    const original = ()=>{
        inputRef.current.style.backgroundColor = "white";
    };
    

    return (
        <>
            <br/><br/><input type='text' ref={inputRef}></input><br/><br/>
            <button onClick={change}>Change Color</button>&nbsp;
            <button onClick={original}>Original Color</button>
        </>
    )

}

export default Counter_Ref;