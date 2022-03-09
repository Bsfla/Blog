import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavBarStyle = styled.nav`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0px 250px;
  span {
      color: white;
  }
`;

const AppNavBar = () => {
  return (
    <NavBarStyle>
        <span>
          Side Project(Bs Blog)
        </span>
    </NavBarStyle>
  );
};

export default AppNavBar;
