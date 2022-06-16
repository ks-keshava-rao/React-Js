import React, { useEffect, useState } from "react";
import Coordinate from "./Coordinate";
function CleanUpEffect(){
    const [display,setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=>{setDisplay(!display)}}>
            Toggle
            </button>
            {display?<Coordinate/>:''}
            {/* {display && <Coordinate/>} */}
        </div>
    )
}
export default CleanUpEffect