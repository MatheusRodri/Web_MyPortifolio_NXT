import styled from "styled-components";

export const Container = styled.div`
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
`;
