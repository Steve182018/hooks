import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const Simple_Context = () => {
    
    const [user, setUser] = useState("Steve Mali");

    return (
        <UserContext.Provider value={user}>
            <center><h1>{`Hello ${user}!`}</h1>
                <Component2 /></center>
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);
    const navigate = useNavigate()
    return (
        <>

            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
            <button onClick={()=>navigate('/')}>Go back</button>
        </>
    );
}

export default Simple_Context