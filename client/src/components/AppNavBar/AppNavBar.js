import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavBarStyle = styled.nav`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 250px;
  span {
      color: white;
  }
`;

const AuthStyle = styled.div`
  span {
    color: white;
    margin-right: 20px;
    cursor: pointer;
  }
`

const AppNavBar = () => {
  return (
    <NavBarStyle>
        <span>
          Side Project(Bs Blog)
        </span>
        <AuthStyle>
          <span>Login</span>
          <span>Register</span>
        </AuthStyle>
    </NavBarStyle>
  );
};

export default AppNavBar;
