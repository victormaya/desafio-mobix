import React, { useState } from "react";
import { Content } from "./styled";
import seta from "../../assets/icons/seta.png";

function App() {
  const [showItens, setShowItems] = useState(false);
  const [allFinanceiroListagem, setAllFinanceiroListagem] = useState(false);
  const [allFinanceiroDetalhes, setAllFinanceiroDetalhes] = useState(false);
  const [allFinanceiroCriar, setAllFinanceiroCriar] = useState(false);
  const [allFinanceiroEditar, setAllFinanceiroEditar] = useState(false);
  const [allFinanceiroDeletar, setAllFinanceiroDeletar] = useState(false);

  function check(checked, name) {
    const cbs = document.querySelectorAll(`input[name^='${name}']`);
    cbs.forEach((cb) => {
      cb.checked = checked;
    });
  }

  return (
    <Content showItens={showItens}>
      <ul className='tabela__linha tabela__linha__principal legendas'>
        <li
          className='legenda titles title__principal'
          onClick={() => setShowItems(!showItens)}
        >
          Financeiro
          <div className='seta'>
            <img src={seta} alt='seta' />
          </div>
        </li>
        <li className='legenda listagem'>
          <input
            type='checkbox'
            name='Financeiro_Listagem'
            onClick={() => [
              setAllFinanceiroListagem(!allFinanceiroListagem),
              check(!allFinanceiroListagem, "Financeiro_Listagem"),
            ]}
          />
        </li>
        <li className='legenda detalhes'>
          <input
            type='checkbox'
            name='Financeiro_Detalhes'
            onClick={() => [
              setAllFinanceiroDetalhes(!allFinanceiroDetalhes),
              check(!allFinanceiroDetalhes, "Financeiro_Detalhes"),
            ]}
          />
        </li>
        <li className='legenda criar'>
          <input
            type='checkbox'
            name='Financeiro_Criar'
            onClick={() => [
              setAllFinanceiroCriar(!allFinanceiroCriar),
              check(!allFinanceiroCriar, "Financeiro_Criar"),
            ]}
          />
        </li>
        <li className='legenda editar'>
          <input
            type='checkbox'
            name='Financeiro_Editar'
            onClick={() => [
              setAllFinanceiroEditar(!allFinanceiroEditar),
              check(!allFinanceiroEditar, "Financeiro_Editar"),
            ]}
          />
        </li>
        <li className='legenda deletar'>
          <input
            type='checkbox'
            name='Financeiro_Deletar'
            onClick={() => [
              setAllFinanceiroDeletar(!allFinanceiroDeletar),
              check(!allFinanceiroDeletar, "Financeiro_Deletar"),
            ]}
          />
        </li>
      </ul>

      <div className='conteudo'>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Entradas</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Financeiro_Listagem_Entradas'
              value='Financeiro_Listagem_Entradas'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Financeiro_Detalhes_Entradas'
              value='Financeiro_Detalhes_Entradas'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Financeiro_Criar_Entradas'
              value='Financeiro_Criar_Entradas'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Financeiro_Editar_Entradas'
              value='Financeiro_Editar_Entradas'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Financeiro_Deletar_Entradas'
              value='Financeiro_Deletar_Entradas'
            />
          </li>
        </ul>
      </div>
    </Content>
  );
}

export default App;
