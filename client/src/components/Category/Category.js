import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <Link to={`/category/${category.categoryName}`}>
      <StlyedCategory>
        <span>#{category.categoryName}</span>
      </StlyedCategory>
    </Link>
  );
};

export default Category;

const StlyedCategory = styled.div`
  width: 5rem;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
  background: #0097a7;
  color: white;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
