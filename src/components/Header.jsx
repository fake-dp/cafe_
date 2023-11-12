import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "../images/starbucks_logo.png";
import { useNavigate } from "react-router";
function Header({ setActiveContetns }) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    console.log("activeMenu", activeMenu);
    setActiveMenu(null);
  };

  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer>
          <Logo src={logoImage} alt="Starbucks" />
          <Title>카페 뷰리</Title>
        </LogoContainer>
        <MainMenu onMouseLeave={handleMouseLeave}>
          <Item onMouseEnter={() => handleMouseEnter("main")}>
            <ItemName isActive={activeMenu === "main"}>메인 페이지</ItemName>
            <SubMenu isActive={activeMenu === "main"}>
              <SubMenuContent>
                <MenuItem onClick={() => setActiveContetns("mainhome")}>
                  메인
                </MenuItem>
                <MenuItem onClick={() => setActiveContetns("event")}>
                  이벤트
                </MenuItem>
              </SubMenuContent>
            </SubMenu>
          </Item>

          <Item onMouseEnter={() => handleMouseEnter("order")}>
            <ItemName isActive={activeMenu === "order"}>주문 페이지</ItemName>
            <SubMenu isActive={activeMenu === "order"}>
              <SubMenuContent>
                <MenuItem onClick={() => setActiveContetns("manu")}>
                  메뉴
                </MenuItem>
                <MenuItem onClick={() => setActiveContetns("category")}>
                  카테고리
                </MenuItem>
                <MenuItem onClick={() => setActiveContetns("option")}>
                  옵션
                </MenuItem>
              </SubMenuContent>
            </SubMenu>
          </Item>

          <Item onMouseEnter={() => handleMouseEnter("menu")}>
            <ItemName isActive={activeMenu === "menu"}>메뉴</ItemName>
            <SubMenu isActive={activeMenu === "menu"}>
              <SubMenuContent>
                <MenuItem onClick={() => setActiveContetns("menucategory")}>
                  메뉴 카테고리
                </MenuItem>
                <MenuItem onClick={() => setActiveContetns("intromenu")}>
                  메뉴 소개
                </MenuItem>
                <MenuItem onClick={() => setActiveContetns("review")}>
                  리뷰
                </MenuItem>
              </SubMenuContent>
            </SubMenu>
          </Item>

          <Item onMouseEnter={() => handleMouseEnter("etc")}>
            <ItemName isActive={activeMenu === "etc"}>기타</ItemName>
            <SubMenu isActive={activeMenu === "etc"}>
              <SubMenuContent>
                <MenuItem onClick={() => setActiveContetns("signup")}>
                  회원가입
                </MenuItem>
                <MenuItem onClick={handleLoginPage}>로그인</MenuItem>
                <MenuItem onClick={() => setActiveContetns("userinfo")}>
                  회원정보
                </MenuItem>
                <MenuItem onClick={() => setActiveContetns("orderlist")}>
                  주문내역
                </MenuItem>
              </SubMenuContent>
            </SubMenu>
          </Item>
        </MainMenu>
      </Inner>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 75px;
`;

const Title = styled.h4`
  font-size: 24px;
  color: #333;
  margin-left: 1rem;
`;

const MainMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const Item = styled.li`
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  &:hover > div {
    display: block;
  }
`;

const ItemName = styled.div`
  font-family: Arial, sans-serif;
  font-size: 18px;
  margin-top: 20px;
  padding: 20px 20px 30px 20px;
  background-color: ${({ isActive }) => (isActive ? "#2c2a29" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#669900" : "#333")};
  border-radius: ${({ isActive }) => (isActive ? "6px 6px 0 0" : "none")};
  &:hover {
    background-color: #2c2a29;
    color: #669900;
    border-radius: 6px 6px 0 0;
  }
`;

const SubMenu = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  &:hover {
    display: block;
  }
`;

const SubMenuContent = styled.div`
  padding: 40px 0;
  background-color: #2c2a29;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MenuItem = styled.h4`
  font-size: 16px;
  color: #fff;
  padding: 10px 0;
  &:hover {
    color: #669900;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
