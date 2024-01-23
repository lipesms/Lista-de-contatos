import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  mensagem: string
}

const initialState: FiltroState = {
  mensagem: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<string>) => {
      state.mensagem = action.payload
    }
  }
})

export const { editar } = filtroSlice.actions

export default filtroSlice.reducer
