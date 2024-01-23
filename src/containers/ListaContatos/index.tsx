import { useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../store'

import Contato from '../../components/Contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const { mensagem } = useSelector((state: RootReducer) => state.filtro)

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (mensagem !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(mensagem.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos2 = filtrarContatos()

  return (
    <S.Main>
      <S.Contatos>
        {contatos2.map((contato) => (
          <Contato
            key={contato.id}
            nome={contato.nome}
            email={contato.email}
            telefone={contato.telefone}
            id={contato.id}
          />
        ))}
      </S.Contatos>
    </S.Main>
  )
}

export default ListaContatos
