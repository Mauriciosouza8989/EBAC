import { Card, ButtonLink } from './style'
import { Title } from '../Title'
import { Text } from '../Text'
type Props = {
  taskTitle: string
  taskDescription: string
}
export const Project = ({ taskTitle, taskDescription }: Props) => (
  <Card>
    <Title fontSize={16}>{taskTitle}</Title>
    <Text typetext="secondary">{taskDescription}</Text>
    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)
