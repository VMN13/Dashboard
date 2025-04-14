import { useState } from "react";
import IMAGE from './image.png';
import LOGO from './react.svg'
export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <img src={IMAGE} alt="image" height={100} />
        <img src={LOGO} alt="logo" height={100} />
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>
        <span>{count}</span>

      </div>
    </>
  )
}