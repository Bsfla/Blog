import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = () => {
  return (
    <SearchForm>
      <BiSearchAlt2 size={25} />
      <Input />
    </SearchForm>
  );
};

export default SearchInput;

const SearchForm = styled.form`
  width: 20rem;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 15px;

  svg {
    margin-left: 10px;
  }
`;

const Input = styled.input`
  width: 20rem;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 15px;
`;
