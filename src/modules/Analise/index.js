import React, { useState } from "react";
import { Content } from "./styled";
import seta from "../../assets/icons/seta.png";

function App() {
  const [showItens, setShowItems] = useState(false);
  const [allAnaliseListagem, setAllAnaliseListagem] = useState(false);
  const [allAnaliseDetalhes, setAllAnaliseDetalhes] = useState(false);
  const [allAnaliseCriar, setAllAnaliseCriar] = useState(false);
  const [allAnaliseEditar, setAllAnaliseEditar] = useState(false);
  const [allAnaliseDeletar, setAllAnaliseDeletar] = useState(false);

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
          Análise
          <div className='seta'>
            <img src={seta} alt='seta' />
          </div>
        </li>
        <li className='legenda listagem'>
          <input
            type='checkbox'
            name='Analise_Listagem'
            onClick={() => [
              setAllAnaliseListagem(!allAnaliseListagem),
              check(!allAnaliseListagem, "Analise_Listagem"),
            ]}
          />
        </li>
        <li className='legenda detalhes'>
          <input
            type='checkbox'
            name='Analise_Detalhes'
            onClick={() => [
              setAllAnaliseDetalhes(!allAnaliseDetalhes),
              check(!allAnaliseDetalhes, "Analise_Detalhes"),
            ]}
          />
        </li>
        <li className='legenda criar'>
          <input
            type='checkbox'
            name='Analise_Criar'
            onClick={() => [
              setAllAnaliseCriar(!allAnaliseCriar),
              check(!allAnaliseCriar, "Analise_Criar"),
            ]}
          />
        </li>
        <li className='legenda editar'>
          <input
            type='checkbox'
            name='Analise_Editar'
            onClick={() => [
              setAllAnaliseEditar(!allAnaliseEditar),
              check(!allAnaliseEditar, "Analise_Editar"),
            ]}
          />
        </li>
        <li className='legenda deletar'>
          <input
            type='checkbox'
            name='Analise_Deletar'
            onClick={() => [
              setAllAnaliseDeletar(!allAnaliseDeletar),
              check(!allAnaliseDeletar, "Analise_Deletar"),
            ]}
          />
        </li>
      </ul>
      
      <div className='conteudo'>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Análise de contas</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Analise_Listagem_Contas'
              value='Analise_Listagem_Contas'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Analise_Detalhes_Contas'
              value='Analise_Detalhes_Contas'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Analise_Criar_Contas'
              value='Analise_Criar_Contas'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Analise_Editar_Contas'
              value='Analise_Editar_Contas'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Analise_Deletar_Contas'
              value='Analise_Deletar_Contas'
            />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Análise de transações</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Analise_Listagem_Transacoes'
              value='Analise_Listagem_Transacoes'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Analise_Detalhes_Transacoes'
              value='Analise_Detalhes_Transacoes'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Analise_Criar_Transacoes'
              value='Analise_Criar_Transacoes'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Analise_Editar_Transacoes'
              value='Analise_Editar_Transacoes'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Analise_Deletar_Transacoes'
              value='Analise_Deletar_Transacoes'
            />
          </li>
        </ul>
      </div>
    </Content>
  );
}

export default App;
