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
    padding: 20px 0;
  }
  
  #first-content {
    background-color: #02266A;
    height: 70vh;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2rem;
      span {
        display: block;
        font-size: 2.5rem;
        font-weight: bold;
      }
    }
  }

  #about-me {
    background-color: #063780;
    height: 120vh;
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
  }
  #skills {
    background-color: #02266A;
    height: 150vh;
    color: white;

    #skill {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    #group-skills {
      display: grid;
      width: 100%;
      grid-gap: 10px;
      grid-template-areas:
        "html css js"
        "react nodejs rn"
        "tailwind nextjs sc"
        "dart flutter kotlin"
        "git github sql"
        "csharp dotnet docker"
        ;
        
      .html {
        grid-area: html;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .css {
        grid-area: css;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .js {
        grid-area: js;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .react {
        grid-area: react;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .nodejs {
        grid-area: nodejs;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .rn {
        grid-area: rn;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .tailwind {
        grid-area: tailwind;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .nextjs {
        grid-area: nextjs;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .sc {
        grid-area: sc;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .dart {
        grid-area: dart;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .flutter {
        grid-area: flutter;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .csharp {
        grid-area: csharp;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .dotnet {
        grid-area: dotnet;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .sql{
        grid-area: sql;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .kotlin {
        grid-area: kotlin;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .git {
        grid-area: git;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .github {
        grid-area: github;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
      .docker {
        grid-area: docker;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
    }
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
  #contact{
      background-color: #02266A;
      height: 40vh;
      padding: 0 50px;

      .contact-info{
        li{
          padding: 5px 0;
          list-style: none;
          color: white;
        }
        a{
          color: white;
        }
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
