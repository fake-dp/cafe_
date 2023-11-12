import React from "react";
import styled from "styled-components";

// 이미지 경로는 프로젝트의 구조에 따라 변경해야 할 수 있습니다.
import sb1Image from "../../images/sb1.png";
import sb2Image from "../../images/sb2.png";
import sb3Image from "../../images/sb3.png";
import sb4Image from "../../images/sb4.png";
import sb5Image from "../../images/su1.png";
import sb6Image from "../../images/su2.png";
import sb7Image from "../../images/su3.png";

// ... 다른 이미지들도 이와 같이 import

const OrderTitle = styled.h3`
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  color: #2c2a29;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const CategoryBox = styled.div`
  width: 150px;
  height: 150px;
  background: #669900;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  margin: 10px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryImgBoxContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const CategoryImgBox = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #669900;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
`;

function Menu() {
  return (
    <OrderContainer>
      <OrderTitle>Category</OrderTitle>
      <CategoryBoxContainer>
        <CategoryBox>Coffee</CategoryBox>
        <CategoryBox>Ade</CategoryBox>
        <CategoryBox>Smoothie</CategoryBox>
        <CategoryBox>Tea</CategoryBox>
        <CategoryBox>Dessert</CategoryBox>
      </CategoryBoxContainer>

      <OrderTitle>Menu</OrderTitle>
      <CategoryImgBoxContainer>
        <CategoryImgBox style={{ backgroundImage: `url(${sb1Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb2Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb3Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb4Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb5Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb6Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb7Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb2Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb3Image})` }} />
        <CategoryImgBox style={{ backgroundImage: `url(${sb4Image})` }} />
      </CategoryImgBoxContainer>
    </OrderContainer>
  );
}

export default Menu;
