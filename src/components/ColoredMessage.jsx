import { memo } from "react";
export const ColoredMessage = memo((props) => {
  console.log("Changed ColoredMessage.jsx");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "20px"
  };
  return <p style={contentStyle}>{children}</p>;
});
