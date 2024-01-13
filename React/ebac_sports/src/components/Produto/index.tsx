import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritos'
import { useGetProdutosQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { Produto as ProtoType } from '../../App'
import { useState } from 'react'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      {produtos?.map((produto: ProtoType) => (
        <S.Produto key={produto.id}>
          <S.Capa>
            <img src={produto.imagem} alt={produto.nome} />
          </S.Capa>
          <S.Titulo>{produto.nome}</S.Titulo>
          <S.Prices>
            <strong>{paraReal(produto.preco)}</strong>
          </S.Prices>
          <S.BtnComprar
            onClick={() => dispatch(favoritar(produto))}
            type="button"
          >
            {itensFavoritos.some((item) => item.id === produto.id)
              ? '- Remover dos favoritos'
              : '+ Adicionar aos favoritos'}
          </S.BtnComprar>
          <S.BtnComprar
            onClick={() => dispatch(adicionar(produto))}
            type="button"
          >
            Adicionar ao carrinho
          </S.BtnComprar>
        </S.Produto>
      ))}
    </>
  )
}

export default ProdutoComponent
