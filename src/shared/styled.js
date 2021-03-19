import styled, { css } from "styled-components";

export const DefaultStyled = css`
  img {
    max-width: 100%;
    box-sizing: border-box;
  }
  .titulo__principal {
    margin-bottom: 3rem;
  }

  .tabela__linha {
    display: flex;
    width: 100%;
  }

  .tabela__linha__principal {
    background: #f8f8f8;
  }

  .title__principal {
    cursor: pointer;
  }

  .todos {
    background: #eff1f1;
  }

  .legendas,
  .todos {
    padding: 0.5rem 1rem;
  }

  .legenda {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .titles {
    width: 25%;
    justify-content: flex-start;
  }

  .seta {
    margin-left: 1rem;
  }

  .listagem,
  .detalhes,
  .criar,
  .editar,
  .deletar {
    width: 15%;
  }
`;
