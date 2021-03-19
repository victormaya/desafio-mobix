import React from "react";
import { DefaultPage } from "./styled";

import Analise from '../Analise/index'
import Contas from '../Contas/index'
import Customizacao from '../Customizacao/index'
import Financeiro from '../Financeiro/index'

function App() {
  return (
    <DefaultPage>
      <div className='container'>
        <h1 className='titulo__principal'>Tabela de Permissões</h1>
        <div className='tabela'>
          <ul className='tabela__linha legendas'>
            <li className='legenda titles'></li>
            <li className='legenda listagem'>Ver listagem </li>
            <li className='legenda detalhes'>Ver detalhes </li>
            <li className='legenda criar'>Criar</li>
            <li className='legenda editar'>Editar</li>
            <li className='legenda deletar'>Deletar</li>
          </ul>
          <ul className='tabela__linha todos'>
            <li className='legenda titles'>Todos</li>
            <li className='legenda listagem'><input type='checkbox' /></li>
            <li className='legenda detalhes'><input type='checkbox' /></li>
            <li className='legenda criar'><input type='checkbox' /></li>
            <li className='legenda editar'><input type='checkbox' /></li>
            <li className='legenda deletar'><input type='checkbox' /></li>
          </ul>
          <Analise/>
          <Contas/>
          <Customizacao/>
          <Financeiro/>
        </div>
      </div>
      <button type='submit'>CADASTRAR</button>
    </DefaultPage>
  );
}

export default App;
