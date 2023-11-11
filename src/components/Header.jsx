import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);
  const menuItems = {
    ORDER: ["메뉴 카테고리", "메뉴", "옵션"],
    MENU: ["카테고리", "메뉴 소개", "리뷰"],
    OTHER: ["정보", "주문내역"],
  };
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // 현재 메뉴가 열려있다면 닫고, 아니면 열기
  };

  const goDetail = () => {
    navigate("/detail");
  };

  const goHome = () => {
    navigate("/home");
  };

  return (
    <HeaderWrapper>
      <InfoRound onClick={goHome} />

      <HeaderRight>
        <HeaderMenuContainer>
          {["Home", "ORDER", "MENU", "OTHER"].map((menu, index) => (
            <HeaderMenuText
              key={index}
              onClick={() =>
                menu === "Home" ? goHome() : handleMenuClick(menu)
              }
              isActive={activeMenu === menu}
            >
              {menu}
              {/* activeMenu 상태에 따라 DropdownContent를 조건부 렌더링 */}
              {activeMenu === menu && menuItems[menu] && (
                <DropdownContent>
                  {menuItems[menu].map((item, itemIndex) => (
                    <DropdownItem onClick={goDetail} key={itemIndex}>
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              )}
            </HeaderMenuText>
          ))}
        </HeaderMenuContainer>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 78px;
  border-bottom: 1px solid #b8b8b8;
  background: #fff;
  width: 100%;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const InfoRound = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  cursor: pointer;
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMenuText = styled.div`
  color: #344a39;
  font-size: 24px;
  margin-left: 20px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: pointer;
  position: relative;
  &:hover {
    color: #212529;
  }
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1; // 다른 요소 위에 표시
`;

const DropdownItem = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  color: #344a39;
  display: block; // 클릭 가능한 영역 확장
  &:hover {
    background-color: #f1f1f1;
  }
`;
