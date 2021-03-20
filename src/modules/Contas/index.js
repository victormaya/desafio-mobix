import React, { useState } from "react";
import { Content } from "./styled";
import seta from "../../assets/icons/seta.png";

function App() {
  const [showItens, setShowItems] = useState(false);
  const [allContasListagem, setAllContasListagem] = useState(false);
  const [allContasDetalhes, setAllContasDetalhes] = useState(false);
  const [allContasCriar, setAllContasCriar] = useState(false);
  const [allContasEditar, setAllContasEditar] = useState(false);
  const [allContasDeletar, setAllContasDeletar] = useState(false);

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
          Contas
          <div className='seta'>
            <img src={seta} alt='seta' />
          </div>
        </li>
        <li className='legenda listagem'>
          <input
            type='checkbox'
            name='Contas_Listagem'
            onClick={() => [
              setAllContasListagem(!allContasListagem),
              check(!allContasListagem, "Contas_Listagem"),
            ]}
          />
        </li>
        <li className='legenda detalhes'>
          <input
            type='checkbox'
            name='Contas_Detalhes'
            onClick={() => [
              setAllContasDetalhes(!allContasDetalhes),
              check(!allContasDetalhes, "Contas_Detalhes"),
            ]}
          />
        </li>
        <li className='legenda criar'>
          <input
            type='checkbox'
            name='Contas_Criar'
            onClick={() => [
              setAllContasCriar(!allContasCriar),
              check(!allContasCriar, "Contas_Criar"),
            ]}
          />
        </li>
        <li className='legenda editar'>
          <input
            type='checkbox'
            name='Contas_Editar'
            onClick={() => [
              setAllContasEditar(!allContasEditar),
              check(!allContasEditar, "Contas_Editar"),
            ]}
          />
        </li>
        <li className='legenda deletar'>
          <input
            type='checkbox'
            name='Contas_Deletar'
            onClick={() => [
              setAllContasDeletar(!allContasDeletar),
              check(!allContasDeletar, "Contas_Deletar"),
            ]}
          />
        </li>
      </ul>

      <div className='conteudo'>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Cliente</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Contas_Listagem_Cliente'
              value='Contas_Listagem_Cliente'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Contas_Detalhes_Cliente'
              value='Contas_Detalhes_Cliente'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Contas_Criar_Cliente'
              value='Contas_Criar_Cliente'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Contas_Editar_Cliente'
              value='Contas_Editar_Cliente'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Contas_Deletar_Cliente'
              value='Contas_Deletar_Cliente'
            />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Transações</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Contas_Listagem_Transações'
              value='Contas_Listagem_Transações'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Contas_Detalhes_Transações'
              value='Contas_Detalhes_Transações'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Contas_Criar_Transações'
              value='Contas_Criar_Transações'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Contas_Editar_Transações'
              value='Contas_Editar_Transações'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Contas_Deletar_Transações'
              value='Contas_Deletar_Transações'
            />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Contas digitais</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Contas_Listagem_Contas_Digitais'
              value='Contas_Listagem_Contas_Digitais'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Contas_Detalhes_Contas_Digitais'
              value='Contas_Detalhes_Contas_Digitais'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Contas_Criar_Contas_Digitais'
              value='Contas_Criar_Contas_Digitais'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Contas_Editar_Contas_Digitais'
              value='Contas_Editar_Contas_Digitais'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Contas_Deletar_Contas_Digitais'
              value='Contas_Deletar_Contas_Digitais'
            />
          </li>
        </ul>
      </div>
    </Content>
  );
}

export default App;
