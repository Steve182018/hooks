import React, { useState } from 'react';

const Text = () => {

    const [text,setText] = useState("Steve")

    function changetext(e){
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} onChange={changetext}></input>
            <h3>You Typed: {text}</h3>
            <button onClick={()=> setText("Steve")}>Reset</button>
        </>
    )
}

export default Text;