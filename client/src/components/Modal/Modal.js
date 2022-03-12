import React from "react";
import styled from "styled-components";
import { MdClose } from 'react-icons/md';

const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`
const ModalWrapper = styled.div`
  width: 500px;
  height: 320px;
  background-color: white;
  position: fixed;
  top: 30px;

`
const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-bottom: 1px solid;

  h3 {
      flex: 1;
  }
  svg {
      cursor: pointer;
  }

`
const ModalForm = styled.form `
  width: 100%;
  height: 100%;
  padding: 20px 20px 0px 20px;

  label {
      display: block;
  }

  input {
      width: 35em;
      padding: 10px;
      margin-top: 10px;
  }
  
`
const SubmitButton = styled.button`
   background-color:#212529;
   color: white;
   width: 35em;
   padding: 15px;
   margin-top: 30px;
   border: none;
   outline: none;
   cursor: pointer;
   
`


const Modal = () => {
    return (
        <ModalStyle>
            <ModalWrapper>
               <ModalHeader>
                  <h3>Login</h3>
                  <MdClose size={20}/>
               </ModalHeader>
               <ModalForm>
                  <label>Email</label>
                  <input placeholder="Email"></input>
                  <label>Password</label>
                  <input placeholder="Password"></input>
                  <SubmitButton>Login</SubmitButton>
               </ModalForm>
            </ModalWrapper>
        </ModalStyle>
    )
}

export default Modal;
