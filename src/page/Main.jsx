import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
function Main(props) {
  return (
    <>
      <Header />
      <Box />
      <BoxContainer>
        <TestBox />
        <TestBox />
        <TestBox />
      </BoxContainer>
      <Boxy />
    </>
  );
}

export default Main;

const Box = styled.div`
  background-color: green;
  width: 100%;
  height: 300px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestBox = styled.div`
  width: 33%;
  height: 200px;
  background-color: red;
  margin: 10px;
`;

const Boxy = styled.div`
  background-color: yellow;
  width: 100%;
  height: 300px;
`;
