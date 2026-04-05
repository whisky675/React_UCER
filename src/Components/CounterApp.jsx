import {useState} from 'react'

function CounterApp(){
    const[count, setCount]=useState(0)

    function Increment(){
        if(count<10)
        setCount(count+1)
    }
    function Decrement(){
        if(count>0)
        setCount(count-1)
    }

    function Reset(){
        setCount(0)
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}> Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterApp