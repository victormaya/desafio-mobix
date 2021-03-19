import styled from "styled-components";
import { DefaultStyled } from "../../shared/styled";

export const DefaultPage = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ul {
    list-style: none;
  }

  .container {
    width: 80%;
    height: 70%;
  }

  button {
    margin: 0 auto;
    background: #6b7375;
    height: 42px;
    width: 216px;
    left: 0px;
    top: 0px;
    border-radius: 200px;
    border: none;
    color: white;
    font-weight: bold;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      cursor: pointer;
      transform: scale(1.1)
    }
  }

  ${DefaultStyled}
`;
