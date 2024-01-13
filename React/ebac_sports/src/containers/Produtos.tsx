import Produto from '../components/Produto'
import * as S from './styles'
console.log(Produto)

const ProdutosComponent = () => {
  return (
    <>
      <S.Produtos>
        <Produto />
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
