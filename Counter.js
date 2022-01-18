import React, {useState} from 'react'

export default function Counter(props) {

    const [count, setCounter]= useState(0);

    const Increment = ()=> setCounter(count+1);
    const Decrement = () => setCounter(count-1);
    const AlertIncrement =() => alert('Increment');
    const AlertDecrement =() => alert('Decrement');

    return (
        <div>
            <h1>{count}</h1>
        <button onClick={Increment}>{props.increment}</button>
        {/* <button onClick={() => { Increment(); AlertIncrement();}}>{props.decrement}</button> */}

        {/* <button onClick={Decrement}>{props.decrement}</button> */}
        <button onClick={() => { Decrement(); AlertDecrement();}}>{props.decrement}</button>
        
        </div>
    )
}
