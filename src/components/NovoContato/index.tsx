import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import { cadastrar } from '../../store/reducers/contatos'

import * as S from './styles'

import {
  ContatoFrame,
  InformacaoContato,
  BotaoSalvar,
  BotaoCancelarExcluir
} from '../../styles'
import { useNavigate } from 'react-router-dom'

const NovoContato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function cadastrarContato(e: FormEvent) {
    e.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        id: 1
      })
    )
    navigate('/')
  }

  return (
    <S.Cadastro onSubmit={cadastrarContato}>
      <ContatoFrame>
        <S.TituloNovo
          type="text"
          placeholder="Nome"
          autoFocus={true}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InformacaoContato>
          <S.DadoNovo
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.DadoNovo
            type="text"
            placeholder="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </InformacaoContato>
        <div>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
          <BotaoCancelarExcluir type="reset">Apagar</BotaoCancelarExcluir>
        </div>
      </ContatoFrame>
    </S.Cadastro>
  )
}

export default NovoContato
