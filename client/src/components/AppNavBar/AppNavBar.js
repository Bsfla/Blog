import React from "react";
import styled from "styled-components";
import AuthContainer from '../../containers/auth/AuthContainer'
import { useState } from "react";


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
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState({
    login: false,
    register: false,
  });

  const handleToggle = (isLogin) => {
       console.log(1);
       setOpen(!open);
     
      isLogin ? setIsAuth({
        login: !isAuth.login,
        register: false
      }) : setIsAuth({
        login: false,
        register: !isAuth.register
      })
  }

  return (
    <>
    <NavBarStyle>
        <span>
          Side Project(Bs Blog)
        </span>
        <AuthStyle>
          <span onClick={() => handleToggle(1)}>Login</span>
          <span onClick={() => handleToggle()}>Register</span>
        </AuthStyle>
    </NavBarStyle>
    <AuthContainer open={open} setOpen={setOpen} isAuth={isAuth} />
    </>
  );
};

export default AppNavBar;
