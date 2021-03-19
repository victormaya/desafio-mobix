import styled from "styled-components";


export const Content = styled.div`
  .seta{
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform: ${props => props.showItens ? 'rotate(180deg)' : null } ;
  }
  .conteudo{
    transition: max-height 0.5s;
    max-height: ${props => props.showItens ? '500px' : 0 };
    visibility: ${props => props.showItens ? 'visible' : 'hidden' } ;
  }
`;
