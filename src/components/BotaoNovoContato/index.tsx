import { Botao } from './styles'

import seta from '../../assets/seta-esquerda.png'
import mais from '../../assets/simbolo-de-adicao-de-espessura.png'

type ButtonProps = {
  estaNaHome: boolean
}

const BotaoNovoContato = ({ estaNaHome }: ButtonProps) => {
  return (
    <>
      {estaNaHome ? (
        <Botao to="/novo">
          <img src={mais} alt="Cadastrar" />
        </Botao>
      ) : (
        <Botao to="/">
          <img src={seta} alt="voltar" />
        </Botao>
      )}
    </>
  )
}

export default BotaoNovoContato
