import styled from 'styled-components'

import { Titulo, Dado } from '../../styles'

export const Cadastro = styled.form`
  width: 600px;
  padding: 0 8px;
  margin-top: 132px;
`

export const TituloNovo = styled(Titulo)`
  border: 1px solid black;
  border-radius: 16px;
  background-color: #fff;
  padding: 8px 0 8px 8px;

  &:focus {
    outline: 2px solid gray;
  }
`

export const DadoNovo = styled(Dado)`
  border: 1px solid black;
  border-radius: 16px;
  background-color: #fff;
  padding: 8px 0 8px 8px;

  &:focus {
    outline: 2px solid gray;
  }
`
