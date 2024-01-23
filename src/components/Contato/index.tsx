import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import {
  ContatoFrame,
  Dado,
  Titulo,
  InformacaoContato,
  BotaoCancelarExcluir,
  BotaoSalvar
} from '../../styles/index'

import { editar, excluir } from '../../store/reducers/contatos'

export interface ContatoType {
  nome: string
  telefone: string
  email: string
  id: number
}

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: ContatoType) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (nomeOriginal && telefoneOriginal && emailOriginal) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }
  return (
    <ContatoFrame>
      <Titulo
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        disabled={!estaEditando}
      />
      <InformacaoContato>
        <Dado
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!estaEditando}
        />
        <Dado
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          disabled={!estaEditando}
        />
      </InformacaoContato>
      <div>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarExcluir onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <BotaoCancelarExcluir
              onClick={() => dispatch(excluir(nomeOriginal))}
            >
              Excluir
            </BotaoCancelarExcluir>
          </>
        )}
      </div>
    </ContatoFrame>
  )
}

export default Contato
