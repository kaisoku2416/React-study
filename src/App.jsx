import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const contentPinkStyle = {
    color: "pink",
    fontSIze: "20px"
  };

  return (
    <>
      <h5 style={{ color: "red" }}>Line 1</h5>
      <h5 style={contentPinkStyle}>Line 2</h5>
      <ColoredMessage />
      <ColoredMessage>Children</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
