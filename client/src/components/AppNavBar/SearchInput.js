import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${inputValue}`);
    setInputValue("");
  };

  return (
    <SearchForm onSubmit={handleFormSubmit}>
      <BiSearchAlt2 size={25} />
      <Input value={inputValue} onChange={handleInputChange} />
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
