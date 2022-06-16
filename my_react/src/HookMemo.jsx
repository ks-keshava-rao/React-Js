import React,{useState,useMemo} from "react";

export default function HookMemo(){
    const [counterOne,setCounterone] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const incrementone = ()=>{
        
        setCounterone(counterOne+1);
    }
    const incrementtwo = () =>{
        setCounterTwo(counterTwo+1)
    }
    const isEven = useMemo( () =>{
        let i = 0
        while(i<2000000000){
            i++;
        }
        return counterOne%2 === 0;
    },[counterOne]);
    return (
        <div>
            <button onClick={incrementone}>
                Counter one - {counterOne}
            </button>
            <span>{isEven?'Even':'Odd'}</span>

            <button onClick={incrementtwo}>
                Counter two - {counterTwo}

            </button>
        </div>
    )
}