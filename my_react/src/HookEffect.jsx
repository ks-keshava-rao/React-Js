// Performs side effects in functional components like data fetching 
// setting up a subscription and manual changing of DOM , api call
// Side effects are all the operations that affect your component and can't be done during rendering.
//combination of componentDidMount , componentDidUpdate, and ComponentWillUnmount
//empty dependency array means componentdidmount and happes only once
import React, { useState, useEffect} from 'react';
function HookEffect() {
  //useState returns Current data and updated function
  const [count,setCount] = useState(0);
  const [countDecrement , DecrementCount] = useState(50);
  useEffect(()=>{
    document.title = `Current count ${count}`
    console.log("Use effect called")
  },[count]);//unmounting
  return (
    <>
        <div className='card-body'>
          <h1> Counter App</h1>
          <h2 className='my-5'> {count} </h2>
          <button className='btn btn-success mx-3' onClick={()=>setCount(count+1)}>Increment</button>
          <button className='btn btn-danger mx-3'onClick={()=>setCount(count-1)}>Decrement</button>
          <button className='btn btn-secondary mx-3'onClick={()=>setCount(0)}>Reset</button>
        </div>
        <h1> Counter App</h1>
        <h2 className='my-5'> {countDecrement} </h2>
        <button className='btn btn-danger mx-3'onClick={()=>DecrementCount(countDecrement-1)}>Decrement</button>
        
    </>
  );
}

export default HookEffect;