import { TextComponent } from './style'
export type Props = {
  typetext?: 'primary' | 'secondary'
  children: string
  fontSize?: number
}

export const Text = ({ typetext = 'primary', children, fontSize }: Props) => (
  <TextComponent fontSize={fontSize} typetext={typetext}>
    {children}
  </TextComponent>
)
