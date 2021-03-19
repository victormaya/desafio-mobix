import React, { useState } from "react";
import { Content } from "./styled";
import seta from "../../assets/icons/seta.png";

function App() {
  const [showItens, setShowItems] = useState(false);

  return (
    <Content showItens={showItens}>
      <ul className='tabela__linha tabela__linha__principal legendas'>
        <li
          className='legenda titles title__principal'
          onClick={() => setShowItems(!showItens)}
        >
          Customização
          <div className='seta'>
            <img src={seta} alt='seta' />
          </div>
        </li>
        <li className='legenda listagem'>
          <input type='checkbox' />
        </li>
        <li className='legenda detalhes'>
          <input type='checkbox' />
        </li>
        <li className='legenda criar'>
          <input type='checkbox' />
        </li>
        <li className='legenda editar'>
          <input type='checkbox' />
        </li>
        <li className='legenda deletar'>
          <input type='checkbox' />
        </li>
      </ul>
      <div className='conteudo'>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Limites e horários</li>
          <li className='legenda listagem'>
            <input type='checkbox' />
          </li>
          <li className='legenda detalhes'>
            <input type='checkbox' />
          </li>
          <li className='legenda criar'>
            <input type='checkbox' />
          </li>
          <li className='legenda editar'>
            <input type='checkbox' />
          </li>
          <li className='legenda deletar'>
            <input type='checkbox' />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Tarifas</li>
          <li className='legenda listagem'>
            <input type='checkbox' />
          </li>
          <li className='legenda detalhes'>
            <input type='checkbox' />
          </li>
          <li className='legenda criar'>
            <input type='checkbox' />
          </li>
          <li className='legenda editar'>
            <input type='checkbox' />
          </li>
          <li className='legenda deletar'>
            <input type='checkbox' />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Tarifas personalizadas</li>
          <li className='legenda listagem'>
            <input type='checkbox' />
          </li>
          <li className='legenda detalhes'>
            <input type='checkbox' />
          </li>
          <li className='legenda criar'>
            <input type='checkbox' />
          </li>
          <li className='legenda editar'>
            <input type='checkbox' />
          </li>
          <li className='legenda deletar'>
            <input type='checkbox' />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Conta</li>
          <li className='legenda listagem'>
            <input type='checkbox' />
          </li>
          <li className='legenda detalhes'>
            <input type='checkbox' />
          </li>
          <li className='legenda criar'>
            <input type='checkbox' />
          </li>
          <li className='legenda editar'>
            <input type='checkbox' />
          </li>
          <li className='legenda deletar'>
            <input type='checkbox' />
          </li>
        </ul>
      </div>
    </Content>
  );
}

export default App;
