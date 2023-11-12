import React from "react";
import { styled } from "styled-components";
import banner from "../../images/banner.png";

function Main(props) {
  return <BannerImg src={banner} alt="banner" />;
}

export default Main;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
