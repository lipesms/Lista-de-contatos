import { useDispatch, useSelector } from 'react-redux'

import { editar } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as S from './styles'

type PropsType = {
  estaNaHome: boolean
}

const Cabecalho = ({ estaNaHome }: PropsType) => {
  const { mensagem } = useSelector((state: RootReducer) => state.filtro)

  const dispatch = useDispatch()
  return (
    <S.Header>
      {estaNaHome ? (
        <div>
          <h1>Sua lista de contatos</h1>
          <S.Input
            type="text"
            placeholder="buscar"
            value={mensagem}
            onChange={(e) => dispatch(editar(e.target.value))}
          />
        </div>
      ) : (
        <h1>Cadastrar novo contato</h1>
      )}
    </S.Header>
  )
}

export default Cabecalho
