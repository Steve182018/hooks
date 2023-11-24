import { useEffect, useState } from "react";

const WidthS = () => {
    
    const [width, setWidth] = useState(window.screen.width)

    
    useEffect(()=>{
        window.addEventListener("resize",currentwidth);
        // retrun () => {
        //     window.removeEventListener("resize",currentwidth);
        // }
    });
    
    const currentwidth = ()=>{
        setWidth(()=> window.innerWidth);
    }

    return (
        <>
            <h1>Width:{width}</h1>
        </>
    )
}

export default WidthS;