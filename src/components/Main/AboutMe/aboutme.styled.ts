import styled from "styled-components";

export const AboutMeContainer = styled.div`
  background-color: #063780;
  height: 130vh;
  padding: 0 50px;

  #me {
    display: flex;
  }

  #text-me {
    font-size: 1.5rem;
    text-align: justify;
    padding-right: 30px;
    color: white;
  }

  #image-me {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px){
    height: 340vh;
  }

`;


    
