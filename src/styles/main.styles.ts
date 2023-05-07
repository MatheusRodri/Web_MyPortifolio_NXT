import styled from "styled-components";

export const Container = styled.main`
  margin-top: 80px;
  width: 100%;
  
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    color: white;
    padding: 6rem 0 30px 0;
  }
  #projects{
    background-color: #063780;
    height: 80vh;
    padding: 0 30px;

    #project{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: right;
      justify-content: center;
    }

    #group-projects{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .project{
      background-color: white;
      display: flex;
      width: 500px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: 20px;
    }
  }
  

  @media (max-width: 768px){
    #about-me{
      height: 340vh;
    }
    #me{
      display:flex;
      flex-direction: column;
    }
    #image-me{
      margin-top: 20px;
    }
    #skills{
      height: 130vh;
    }
    #projects{
      height: 100vh;
    }
  }
`;