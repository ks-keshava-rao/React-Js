import React,{useCallback, useState} from 'react'
import DisplayList from './DisplayList'
function HookCallback(){
    const [number,setNumber] = useState(1)
    const [dark,setDark] = useState(false)

    const getItems = useCallback(()=>{
        return [number,number+1,number+2]
    },[number])
    const theme = {
        backgroundColor : dark ? '#333' : '#FFF',
        color : dark ? '#FFF' : '#333'
    }
    return (
        <div style={theme}>
            <input type="number" value={number} onChange = {e=>setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setDark((previousTheme)  => !previousTheme)}>
                Toggle theme
            </button>
            <DisplayList getItems = {getItems}/>
        </div>
    )
}
export default HookCallback;