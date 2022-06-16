import React, { useEffect, useState } from "react";

function Coordinate(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0);

    const getMousePosition = (e) =>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("use effect called");
        window.addEventListener('mousemove',getMousePosition)

        return ()=>{
            console.log('Component unmounting');
            window.removeEventListener('mousemove',getMousePosition);
        }
    },[])
    return (
        <>
        Position X - {x} 
        Position Y - {y}
        </>
    )
}
export default Coordinate