import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter fade-in">
      <h1>Counter Page</h1>
      <p>Current count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
