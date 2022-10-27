import React from "react";
import styled from "styled-components";
import Category from "./Category";

const CategoryList = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map((category) => (
        <Category category={category} key={category._id} />
      ))}
    </Wrapper>
  );
};

export default CategoryList;

const Wrapper = styled.section`
  width: 100%;
  padding: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border-bottom: solid;
  border-bottom-color: #ab47bc;
`;
