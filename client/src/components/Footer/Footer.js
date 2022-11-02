import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterStyle>Copyright @ 2022</FooterStyle>;
};

export default Footer;

const FooterStyle = styled.footer`
  width: 100%;
  height: 10rem;
  background: #343a40;
  color: white;
  padding: 20px 20px 40px 20px;
  display: flex;
  justify-content: center;
`;
