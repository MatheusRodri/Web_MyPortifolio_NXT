import styled from "styled-components";

export const Container = styled.main`
  margin-top: 80px;
  width: 100%;
  #first-content {
    background-color: black;
    height: 70vh;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p{
      font-size: 2rem;
      span {
        display: block;
        font-size: 2.5rem;
        font-weight: bold;
      }
    }
  }

  #about-me {
    background-color: gray;
    height: 120vh;
    padding: 0 50px;    
    
    #me{
        display: flex;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 2rem;
      color: white;
    }

    #text-me{
        font-size: 1.5rem;
        text-align: justify;
        padding-right: 30px;
    }
    
    #image-me{
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
`;
