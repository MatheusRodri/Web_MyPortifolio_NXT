import styled from "styled-components";

export const Container = styled.footer`
    background-color: #063780;
    height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;

    ul{
        display: flex;
        list-style: none;
        
        li{
            padding: 0 20px;
        }
        a{
            color: white;
        }
    }
`;