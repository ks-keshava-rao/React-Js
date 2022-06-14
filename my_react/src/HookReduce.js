import React,{useReducer} from "react";
// can use additional data 
// state is an object
// maintain state and action as object
const intialState = {
    firstCounter : 0 ,
    secondCounter : 10
} ;
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter+action.value};
        case 'decrement':
            return {...state,firstCounter :state.firstCounter - action.value };
        case 'incrementSecondCounter':
            return {...state,secondCounter: state.secondCounter + action.value};
        case 'decrementSecondCounter':
            return {...state,secondCounter :state.secondCounter - action.value };
        case 'reset':
            return intialState;
        default:
            return state;
        
    }
}

function HookReduce(){
    const [count , dispatch] = useReducer(reducer,intialState);
    return (
        <div>
            <div>Count - {count.firstCounter} </div>
            <button onClick={() => dispatch({type:'increment',value : 1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value : 1})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <button onClick={() => dispatch({type:'increment' , value : 5 })}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement' , value : 5 })}>Decrement 5</button>
            <div>
            <div>Count - {count.secondCounter} </div>
            <button onClick={() => dispatch({type:'incrementSecondCounter' , value : 1 })}>Increment secondCounter</button>
            <button onClick={() => dispatch({type:'decrementSecondCounter' , value : 1 })}>Decrement secondCounter</button>
            </div>
        </div>
    )
}
export default HookReduce;