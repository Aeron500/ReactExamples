import React, { useState } from "react";
const App = () => {
  const [number, setNumber] = useState(1);
  const changeValue = (result) => {
    result === "inc" ? setNumber(number + 1) : setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => changeValue("inc")}>increase</button>
      <button onClick={() => changeValue("dec")}>decrease</button>
    </div>
  );
};
export default App;