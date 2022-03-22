import React from "react";
import styled from "styled-components";
import { MdClose } from 'react-icons/md';

const ModalStyle = styled.div`
  display: ${(props) => props.open ? 'flex' : 'none'};
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
  height: auto;
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
   margin: 30px 0px;
   border: none;
   outline: none;
   cursor: pointer;
   
`
const AlertErrorMsg = styled.div`
  background-color: #f8bbd0;
  width: 45em;
  padding: 10px;
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`


const Modal = ({ onChange, onSubmit, form, localMessage, open, setOpen, isAuth }) => {
    return (
        <ModalStyle open={open} >
            <ModalWrapper>
               <ModalHeader>
                  <h3>{isAuth.login ? 'Login' : 'Register'}</h3>
                  <MdClose size={20} onClick={() => setOpen(false)}/>
               </ModalHeader>
               <ModalForm onSubmit={onSubmit}>
               {localMessage.length ? <AlertErrorMsg><span>{localMessage}</span></AlertErrorMsg>  : null}
               {isAuth.register ? <> <label>Name</label>
                  <input placeholder="Name" name='name' value={form.name} onChange={onChange} /> </> : null} 
                  <label>Email</label>
                  <input placeholder="Email" name='email' value={form.email} onChange={onChange} />
                  <label>Password</label>
                  <input placeholder="Password" name='password' type='password' value={form.password} onChange={onChange} />
                  <SubmitButton>{isAuth.login ? 'Login' : 'Register'}</SubmitButton>
               </ModalForm>
            </ModalWrapper>
        </ModalStyle>
    )
}

export default Modal;
