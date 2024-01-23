import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 300px;
  width: 100%;
  top: 0px;
  background-color: #fff;
  width: 100vw;
  padding-top: 32px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 660px;
    width: 100%;
  }
`

export const Input = styled.input`
  max-width: 660px;
  width: 100%;
  padding: 8px;
  margin-top: 36px;
  border-radius: 8px;
  border: 2px solid black;
`
