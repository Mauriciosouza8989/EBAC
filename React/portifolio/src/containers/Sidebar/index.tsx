import { Avatar } from '../../components/Avatar'
import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import { Container, Button } from './style'
type Props = {
  changeTheme: () => void
}
export const Sidebar = ({ changeTheme }: Props) => (
  <aside>
    <Container>
      <Avatar />
      <Title fontSize={20}>Maurício</Title>
      <Text typetext="secondary" fontSize={16}>
        Mauriciosouza8989
      </Text>
      <Text typetext="primary" fontSize={12}>
        Desenvolvedor Full Stack Python
      </Text>
      <Button onClick={changeTheme} type="button">
        Trocar tema
      </Button>
    </Container>
  </aside>
)
