import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: var(--darkGray);
`;


export const Content = styled.div`
  color: var(--white);
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px;

`;

export const Info = styled.div`
  background-color: var(--medGrey);
  width: 50%;
  margin-right: 40px;
  padding: 20px;
  border-radius: 26px;
  text-align: center;
  
  span {
    font-size: var(--fontSmall);
  }
  
  @media(max-width: 768px) {
    span {
      font-size: 12px;
      
    }
  }


`;