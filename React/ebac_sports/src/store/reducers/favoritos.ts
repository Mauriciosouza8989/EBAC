import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoriteState = {
  itens: Produto[]
}
const initialState: FavoriteState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoParaFavoritar = action.payload
      if (state.itens.find((item) => item.id === produtoParaFavoritar.id)) {
        state.itens = state.itens.filter(
          (item) => item.id !== produtoParaFavoritar.id
        )
      } else {
        state.itens.push(produtoParaFavoritar)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
