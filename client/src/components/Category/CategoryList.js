import React from "react";
import styled from "styled-components";

const CategoryList = () => {
  return (
    <Wrapper>
      <StlyedCategory>
        <span>#음악</span>
      </StlyedCategory>
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
`;
