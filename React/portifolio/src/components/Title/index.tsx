import { TitleComponent } from './style'
export type Props = {
  children: string
  fontSize?: number
}

export const Title = (props: Props) => (
  <TitleComponent fontSize={props.fontSize}>{props.children}</TitleComponent>
)
