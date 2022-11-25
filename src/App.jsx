import { useState, memo, useCallback } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { MuiButton } from "./components/MuiButton";

export const App = memo(() => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  const contentPinkStyle = {
    color: "pink",
    fontSIze: "20px"
  };

  return (
    <>
      <h5 style={{ color: "red" }}>Line 1</h5>
      <h5 style={contentPinkStyle}>Line 2</h5>
      <ColoredMessage>Children</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickReset}>リセット</button>
      <p>{num}</p>
      <MuiButton />
    </>
  );
});
