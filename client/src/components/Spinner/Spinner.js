import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => {
    
    const colors = {
        blue: '#448aff',
        red: 'red',
        gray: 'gray',
        brown: '#d84315'
    }
   
    return (
       <LoadingDots>
            <LoadingDot color={colors.blue} />
            <LoadingDot color={colors.red} />
            <LoadingDot color={colors.gray} />
        <LoadingDot color={colors.brown} />
       </LoadingDots>
    )
}
const bounce = keyframes`
  0%, 80%, 100% {
      transform: scale(0);
  }
  40% {
      transform: scale(1);
  }
`

const LoadingDots = styled.div `
   height: 100vh;
   display: flex;
   justify-content: center;
`

const LoadingDot = styled.div `
   width: 1.5rem;
   height: 1.5rem;
   background-color: ${props => props.color};
   border-radius: 60%;
   margin-top: 30px;
   margin-right: 10px;
   animation: 1.5s ${bounce} infinite ease-in-out both;
    
`





export default Spinner;
