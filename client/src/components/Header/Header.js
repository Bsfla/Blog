import React from "react";
import styled from "styled-components";
import img from "../../assets/img/image.jpg";

const HeaderStyle = styled.header`
  width: 100%;
  height: 200px;
  background: url(${img});
  background-position: 54% 89%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Read Our Blog</h1>
      <p>BS의 개발블로그 입니다</p>
    </HeaderStyle>
  );
};

export default Header;
