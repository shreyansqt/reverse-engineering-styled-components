import React from "react";
import ReactDOM from "react-dom";
import styled from "./styled";

const StyledH1 = styled("h1")`
  color: red;
`;

const App = () => {
  return (
    <>
      <StyledH1>Red Heading</StyledH1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
