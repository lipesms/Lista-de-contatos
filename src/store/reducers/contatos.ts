import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ContatoType } from '../../components/Contato'

type StateType = {
  itens: ContatoType[]
}

const initialState: StateType = {
  itens: [
    {
      nome: 'Felipe da Silva Martins',
      email: 'felipe@maritins.com',
      telefone: `(11)91234-5678`,
      id: 1
    },
    {
      nome: 'Gabriela Nunes de Jesus',
      email: 'gabriela@nunes.com',
      telefone: `(11)91234-5679`,
      id: 2
    },
    {
      nome: 'Beatriz Martins',
      email: 'beatriz@martins.com',
      telefone: `(11)91234-5670`,
      id: 3
    },
    {
      nome: 'Verônica da Silva Martins',
      email: 'veronica@silva.com',
      telefone: `(11)91234-5671`,
      id: 4
    },
    {
      nome: 'Edson Martins',
      email: 'edson@martins.com',
      telefone: `(11)91234-5672`,
      id: 5
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<ContatoType>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const idUltimoContato = state.itens.length
        const novoContato = { ...action.payload, id: idUltimoContato + 1 }

        state.itens.push(novoContato)
      }
    },
    editar: (state, action: PayloadAction<ContatoType>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    excluir: (state, action: PayloadAction<string>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.nome != action.payload)
      ]
    }
  }
})

export const { cadastrar, editar, excluir } = contatoSlice.actions

export default contatoSlice.reducer
