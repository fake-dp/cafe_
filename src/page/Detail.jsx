import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
function Detail(props) {
  return (
    <>
      <Header />
      <h2>카테고리</h2>
      <BoxContainer>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </BoxContainer>
      <h2>메뉴</h2>
      <BoxContainer>
        <Boxy />
        <Boxy />
        <Boxy />
        <Boxy />
        <Boxy />
      </BoxContainer>
      <BoxContainer>
        <Boxy />
        <Boxy />
        <Boxy />
        <Boxy />
        <Boxy />
      </BoxContainer>
    </>
  );
}

export default Detail;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const TestBox = styled.div`
  width: 18%;
  height: 200px;
  background-color: blue;
  margin: 10px;
`;

const Boxy = styled.div`
  width: 18%;
  height: 200px;
  background-color: green;
  margin: 10px;
`;
