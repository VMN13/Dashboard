import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>
        <span>{count}</span>
      </div>
    </>
  )
}