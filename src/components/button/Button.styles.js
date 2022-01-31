import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background-color: var(--darkGray);
  width: 15%;
  min-width: 200px;
  height: 60px;
  border-radius : 25px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 10px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }

`;