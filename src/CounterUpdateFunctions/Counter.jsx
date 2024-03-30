import React, {useState} from "react";
import "./Counter.css";

function CountComponent() {
    const [count, setCount] = useState(0);

    function increment(count) {
        setCount(c => (c+1));
        setCount(c => (c+1));
        setCount(c => (c+1));
    }

    function decrement(count) {
        setCount(c => (c-1));
        setCount(c => (c-1));
        setCount(c => (c-1));
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h2>Count</h2>
            <h1>{count}</h1>
            <div className="button-container">
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default CountComponent;