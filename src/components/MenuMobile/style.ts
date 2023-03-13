import styled, { css } from "styled-components";
interface IMenuMobileProps {
  isVisible: boolean;
}
export const Container = styled.section<IMenuMobileProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #063780;
  opacity: 0;
  pointer-events: none;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        li{
            padding: 20px 0px;
        }
        a{
            color: white;
            font-size: 25px;
            text-decoration: none;
        }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
