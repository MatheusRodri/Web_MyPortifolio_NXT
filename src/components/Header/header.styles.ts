import styled from 'styled-components';

export const Container = styled.header`
    background-color: blue;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    
    ul{
        list-style: none;
        display: flex;

        li{
            padding: 0 20px;
        }
        a{
            color: white;
            text-decoration: none;
        }
    }
`;