import React, {useState} from "react";

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
        <div>
            Count Component
        </div>
    );
}

export default CountComponent;