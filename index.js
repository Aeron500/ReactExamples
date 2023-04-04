import React, { useState } from "react";
const App = () => {
  const [color, setcolor] = useState("grey");
  const [count, setCount] = useState(0);
  const [reactOptions, setReactOptions] = useState(false);
  const changeColor = () => {
    if (count === 1) {
      setcolor("grey");
      setCount(count - 1);
    } else {
      setcolor("blue");
      setCount(count + 1);
    }
  }
    const showReactionDiv = () => {
      setReactOptions(true);
    };
  

  return (
    <div>
      {reactOptions ? (
        <div>
          <button>Haha</button>
          {count}
          <button>Angry</button>
          {count}
        </div>
      ) : null}
      <button onClick={changeColor} onMouseEnter={showReactionDiv} style={{ backgroundColor: color }} >
        Like
      </button>
      {count}
    </div>
  );
};
export default App;
