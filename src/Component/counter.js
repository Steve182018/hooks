import React,{useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h3>Count:{count}</h3>
            <button onClick={()=> setCount(count+1)}>Click</button>&nbsp;
            <button onClick={()=> setCount(0)}>Reset</button>
        </>
    )

}

export default Counter;