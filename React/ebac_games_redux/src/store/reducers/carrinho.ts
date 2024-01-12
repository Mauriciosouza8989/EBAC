import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type carrinhoState = {
  items: Game[]
}
const initialState: carrinhoState = {
  items: []
}

const carrinhoReducer = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.items.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoReducer.actions
export default carrinhoReducer.reducer
