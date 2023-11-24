import React,{useEffect, useState} from 'react'

const Age = () => {

    
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log(count)
    },[count])

    return (
        <>
            <h4>Age:{count}</h4>
            <button onClick={()=>setCount(count+1)}>+1</button>&nbsp;
            <button onClick={()=>
                {if(count === 0){
                    setCount(0)
                }else{
                setCount(count-1)}}}>-1</button>&nbsp;
            <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )

}

export default Age;