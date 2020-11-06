import * as React from "react";
import ReactDOM from "react-dom";
import styled from "./styled";

const RedH1 = styled("h1")`
  color: red;
`;

const BlueH1 = styled("h1")`
  color: blue;
`;

const BlueH2 = styled("h2")`
  color: blue;
`;

const RedH1WithYellowBg = styled(RedH1)`
  background: yellow;
`;

const App = () => {
  return (
    <>
      <RedH1>RedH1</RedH1>
      <BlueH1>BlueH1</BlueH1>
      <BlueH2>BlueH2</BlueH2>
      <RedH1WithYellowBg>RedH1WithYellowBg</RedH1WithYellowBg>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
