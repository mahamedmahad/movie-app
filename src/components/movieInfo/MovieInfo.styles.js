import styled from "styled-components";

import {IMAGE_BASE_URL, BACKDROP_SIZE} from "../../config";


export const Wrapper = styled.div`
  background: ${({backdrop}) =>
          backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#000"
  };
  background-size: cover;
  background-position: center;
  animation: animateMovieInfo 1s;
  padding: 20px 0;

  @keyframes animateMovieInfo {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`


export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  //padding: 20px 20px;


  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }

`;


export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  overflow: hidden;
  color: var(--white);
  opacity: 0.8;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    border-radius: 50%;
    font-weight: 800;
    margin-top: 20px;

  }

  .director {
    margin: 0 0 0 40px;
    
    
    h3 {
      padding-bottom: 20px;
    }


    p {
      margin: 0;
      

    }
  }

  h1 {
    font-size: var(--fontBig);

    @media (max-width: 768px) {
      font-size: var(--fontMed);

    }
  }
`;