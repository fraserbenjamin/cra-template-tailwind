import React from "react"

import styled from "styled-components"
import tw from "twin.macro"

const Test = styled.div`
  ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
  background-color: red;
`;

function App() {
  return (
      <Test>Hello</Test>
  );
}

export default App;