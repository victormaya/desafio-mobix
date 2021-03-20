import React, { useState } from "react";
import { DefaultPage } from "./styled";

import Analise from "../Analise/index";
import Contas from "../Contas/index";
import Customizacao from "../Customizacao/index";
import Financeiro from "../Financeiro/index";

function App() {
  const [allListagem, setAllListagem] = useState(false);
  const [allDetalhes, setAllDetalhes] = useState(false);
  const [allCriar, setAllCriar] = useState(false);
  const [allEditar, setAllEditar] = useState(false);
  const [allDeletar, setAllDeletar] = useState(false);

  const Imprimir = () => {
    let values = [];
    let finalValues = [];

    const checkboxes = document.querySelectorAll(
      `input[type='checkbox']:checked`
    );
    checkboxes.forEach((checkbox) => {
      if (values.includes(checkbox.value)) {
        return;
      } else {
        values.push(checkbox.value);
      }
    });

    values.forEach((item) => {
      if (item !== "on") {
        finalValues.push(item);
      }
    });

    console.log(finalValues);
  };

  function check(checked, names) {
    names.map((item) => {
      const cbs = document.querySelectorAll(`input[name^='${item}']`);
      cbs.forEach((cb) => {
        cb.checked = checked;
      });
    });
  }

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
            <li className='legenda listagem'>
              <input
                type='checkbox'
                onClick={() => [
                  setAllListagem(!allListagem),
                  check(!allListagem, [
                    "Analise_Listagem",
                    "Contas_Listagem",
                    "Customizacao_Listagem",
                    "Financeiro_Listagem",
                  ]),
                ]}
              />
            </li>
            <li className='legenda detalhes'>
              <input
                type='checkbox'
                onClick={() => [
                  setAllDetalhes(!allDetalhes),
                  check(!allDetalhes, [
                    "Analise_Detalhes",
                    "Contas_Detalhes",
                    "Customizacao_Detalhes",
                    "Financeiro_Detalhes",
                  ]),
                ]}
              />
            </li>
            <li className='legenda criar'>
              <input
                type='checkbox'
                onClick={() => [
                  setAllCriar(!allCriar),
                  check(!allCriar, [
                    "Analise_Criar",
                    "Contas_Criar",
                    "Customizacao_Criar",
                    "Financeiro_Criar",
                  ]),
                ]}
              />
            </li>
            <li className='legenda editar'>
              <input
                type='checkbox'
                onClick={() => [
                  setAllEditar(!allEditar),
                  check(!allEditar, [
                    "Analise_Editar",
                    "Contas_Editar",
                    "Customizacao_Editar",
                    "Financeiro_Editar",
                  ]),
                ]}
              />
            </li>
            <li className='legenda deletar'>
              <input
                type='checkbox'
                onClick={() => [
                  setAllDeletar(!allDeletar),
                  check(!allDeletar, [
                    "Analise_Deletar",
                    "Contas_Deletar",
                    "Customizacao_Deletar",
                    "Financeiro_Deletar",
                  ]),
                ]}
              />
            </li>
          </ul>
          <Analise />
          <Contas />
          <Customizacao />
          <Financeiro />
        </div>
      </div>
      <button type='submit' onClick={() => Imprimir()}>
        CADASTRAR
      </button>
    </DefaultPage>
  );
}

export default App;
