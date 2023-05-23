import React, { useState, useRef } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const increment = (value: number) => {
    setCount(count + value);
  };

  const decrement = (value: number) => {
    setCount(count - value);
  };

  const reset = () => {
    setCount(0);
  };

  const updateCount = () => {
    setCount(countRef.current);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    countRef.current = newValue;
  };

  return (
    <div>
      <h2 style={{ color: "red", fontSize: 24 }}>Counter: {count}</h2>
      <input
        type="number"
        onChange={handleInputChange}
        style={{ marginBottom: 8 }}
      />
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(2)}>+2</button>
        <button onClick={() => decrement(1)}>-1</button>
        <button onClick={() => decrement(2)}>-2</button>
        <button onClick={reset}>Reset</button>
        <button onClick={updateCount}>Mettre à jour</button>
      </div>
    </div>
  );
};

export default Counter;