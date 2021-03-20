import React, { useState } from "react";
import { Content } from "./styled";
import seta from "../../assets/icons/seta.png";

function App() {
  const [showItens, setShowItems] = useState(false);

  const [allCustomizacaoListagem, setAllCustomizacaoListagem] = useState(false);
  const [allCustomizacaoDetalhes, setAllCustomizacaoDetalhes] = useState(false);
  const [allCustomizacaoCriar, setAllCustomizacaoCriar] = useState(false);
  const [allCustomizacaoEditar, setAllCustomizacaoEditar] = useState(false);
  const [allCustomizacaoDeletar, setAllCustomizacaoDeletar] = useState(false);

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
          Customização
          <div className='seta'>
            <img src={seta} alt='seta' />
          </div>
        </li>
        <li className='legenda listagem'>
          <input
            type='checkbox'
            name='Customizacao_Listagem'
            onClick={() => [
              setAllCustomizacaoListagem(!allCustomizacaoListagem),
              check(!allCustomizacaoListagem, "Customizacao_Listagem"),
            ]}
          />
        </li>
        <li className='legenda detalhes'>
          <input
            type='checkbox'
            name='Customizacao_Detalhes'
            onClick={() => [
              setAllCustomizacaoDetalhes(!allCustomizacaoDetalhes),
              check(!allCustomizacaoDetalhes, "Customizacao_Detalhes"),
            ]}
          />
        </li>
        <li className='legenda criar'>
          <input
            type='checkbox'
            name='Customizacao_Criar'
            onClick={() => [
              setAllCustomizacaoCriar(!allCustomizacaoCriar),
              check(!allCustomizacaoCriar, "Customizacao_Criar"),
            ]}
          />
        </li>
        <li className='legenda editar'>
          <input
            type='checkbox'
            name='Customizacao_Editar'
            onClick={() => [
              setAllCustomizacaoEditar(!allCustomizacaoEditar),
              check(!allCustomizacaoEditar, "Customizacao_Editar"),
            ]}
          />
        </li>
        <li className='legenda deletar'>
          <input
            type='checkbox'
            name='Customizacao_Deletar'
            onClick={() => [
              setAllCustomizacaoDeletar(!allCustomizacaoDeletar),
              check(!allCustomizacaoDeletar, "Customizacao_Deletar"),
            ]}
          />
        </li>
      </ul>

      <div className='conteudo'>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Limites e horários</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Customizacao_Listagem_Limites_Horarios'
              value='Customizacao_Listagem_Limites_Horarios'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Customizacao_Detalhes_Limites_Horarios'
              value='Customizacao_detalhes_Limites_Horarios'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Customizacao_Criar_Limites_Horarios'
              value='Customizacao_Criar_Limites_Horarios'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Customizacao_Editar_Limites_Horarios'
              value='Customizacao_Editar_Limites_Horarios'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Customizacao_Deletar_Limites_Horarios'
              value='Customizacao_Deletar_Limites_Horarios'
            />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Tarifas</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Customizacao_Listagem_Tarifas'
              value='Customizacao_Listagem_Tarifas'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Customizacao_Detalhes_Tarifas'
              value='Customizacao_detalhes_Tarifas'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Customizacao_Criar_Tarifas'
              value='Customizacao_Criar_Tarifas'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Customizacao_Editar_Tarifas'
              value='Customizacao_Editar_Tarifas'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Customizacao_Deletar_Tarifas'
              value='Customizacao_Deletar_Tarifas'
            />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Tarifas personalizadas</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Customizacao_Listagem_Tarifas_Personalizadas'
              value='Customizacao_Listagem_Tarifas_Personalizadas'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Customizacao_Detalhes_Tarifas_Personalizadas'
              value='Customizacao_Detalhes_Tarifas_Personalizadas'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Customizacao_Criar_Tarifas_Personalizadas'
              value='Customizacao_Criar_Tarifas_Personalizadas'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Customizacao_Editar_Tarifas_Personalizadas'
              value='Customizacao_Editar_Tarifas_Personalizadas'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Customizacao_Deletar_Tarifas_Personalizadas'
              value='Customizacao_Deletar_Tarifas_Personalizadas'
            />
          </li>
        </ul>
        <ul className='tabela__linha legendas'>
          <li className='legenda titles'>Conta</li>
          <li className='legenda listagem'>
            <input
              type='checkbox'
              name='Customizacao_Listagem_Conta'
              value='Customizacao_Listagem_Conta'
            />
          </li>
          <li className='legenda detalhes'>
            <input
              type='checkbox'
              name='Customizacao_Detalhes_Conta'
              value='Customizacao_detalhes_Conta'
            />
          </li>
          <li className='legenda criar'>
            <input
              type='checkbox'
              name='Customizacao_Criar_Conta'
              value='Customizacao_Criar_Conta'
            />
          </li>
          <li className='legenda editar'>
            <input
              type='checkbox'
              name='Customizacao_Editar_Conta'
              value='Customizacao_Editar_Conta'
            />
          </li>
          <li className='legenda deletar'>
            <input
              type='checkbox'
              name='Customizacao_Deletar_Conta'
              value='Customizacao_Deletar_Conta'
            />
          </li>
        </ul>
      </div>
    </Content>
  );
}

export default App;
