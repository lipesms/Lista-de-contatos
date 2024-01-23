import styled, { createGlobalStyle } from 'styled-components'

import { Botao } from '../components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 40px;
`

export const ContatoFrame = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  background: #d4d7e8;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 3px 5px 10px #00000047;

  & div {
    display: flex;
    justify-content: flex-end;
  }
`

export const InformacaoContato = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.input`
  color: #000;
  font-size: 20px;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  background: transparent;
  outline: none;
`

export const Dado = styled(Titulo)`
  font-size: 14px;
  border-bottom: 1px solid black;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`
export const BotaoCancelarExcluir = styled(Botao)`
  background-color: #c23616;
`

export default EstiloGlobal
