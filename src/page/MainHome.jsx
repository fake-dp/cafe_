import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Category from "../components/menu/Category";
import Main from "../components/menu/Main";
import Menu from "../components/menu/Menu";
import Option from "../components/menu/Option";
import Event from "../components/menu/Event";
import MenuCategory from "../components/menu/MenuCategory";
import Review from "../components/menu/Review";
import IntroMenu from "../components/menu/IntroMenu";
function MainHome(props) {
  const [activeContents, setActiveContetns] = useState("mainhome");

  return (
    <Container>
      <Header setActiveContetns={setActiveContetns} />
      {/* 메인 */}
      {activeContents === "mainhome" ? (
        <Main />
      ) : activeContents === "event" ? (
        <Event />
      ) : // 주문페이지
      activeContents === "manu" ? (
        <Menu />
      ) : activeContents === "category" ? (
        <Category />
      ) : activeContents === "option" ? (
        <Option />
      ) : // 메뉴
      activeContents === "menucategory" ? (
        <MenuCategory />
      ) : activeContents === "intromenu" ? (
        <IntroMenu />
      ) : activeContents === "review" ? (
        <Review />
      ) : null}
    </Container>
  );
}

export default MainHome;

const Container = styled.div`
  margin-top: 120px;
`;
