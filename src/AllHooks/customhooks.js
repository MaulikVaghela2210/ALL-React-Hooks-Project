import { useState } from "react";

// Custom Hook
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

// Component 1
function Counter1() {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <h2>Counter 1: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

// Component 2
function Counter2() {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div>
            <h2>Counter 2: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default function Customhooks() {
    return (
        <div>
            <Counter1 />
            <Counter2 />
        </div>
    );
}
