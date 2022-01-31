import styled from "styled-components";


export const ThumbNailTitle = styled.div`
  background-color: var(--darkGray);
  color: var(--white);
  position: absolute;
  opacity: 0.7;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 2px;
  width: 100%;
  padding: 20px 10px;
  transform: translateY(110%);
  transition: transform 0.5s ease-in-out;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  h2 {
    font-size: var(--fontSmall)
  }
  span {
    font-size: 12px;
  }

`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:hover ${ThumbNailTitle} {
    transform: translateY(0%);

  }

`;


export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  &:hover {
    opacity: 0.8;
  }


  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;