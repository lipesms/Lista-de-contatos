import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Botao = styled(Link)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44bd32;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
  color: #fff;

  img {
    width: 50%;
  }
`
