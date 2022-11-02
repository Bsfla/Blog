import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { PASSWORD_EDIT_REQUEST } from "../redux/types";

const ProfilePage = () => {
  const [profileForm, handleInputChange] = useInput({
    password: "",
    newPassWord: "",
    confirmPassword: "",
  });

  const { name, _id } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const { password, newPassWord, confirmPassword } = profileForm;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const body = {
      password,
      newPassWord,
      confirmPassword,
      token,
      userName: name,
      userId: _id,
    };

    dispatch({
      type: PASSWORD_EDIT_REQUEST,
      payload: body,
    });
  };

  return (
    <Profile>
      <span className="title">Edit Password</span>
      <ProfileForm onSubmit={handleFormSubmit}>
        <label>기존 비밀번호</label>
        <Input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
        />
        <label>새로운 비밀번호</label>
        <Input
          type="password"
          value={newPassWord}
          onChange={handleInputChange}
          name="newPassWord"
        />
        <label>비밀번호 확인</label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={handleInputChange}
          name="confirmPassword"
        />
        <Button>제출하기</Button>
      </ProfileForm>
    </Profile>
  );
};

export default ProfilePage;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 29rem;
  height: auto;
  border: solid #bdbdbd;
  margin-top: 20px;
  background-color: white;

  .title {
    width: 100%;
    padding: 15px;

    font-size: 20px;
    font-weight: bold;
    background-color: #bdbdbd;
  }
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  height: 100%;

  label {
    margin-top: 10px;
    margin-bottom: 12px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 25rem;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  width: 7em;
  background-color: green;
  color: white;
  padding: 5px;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
