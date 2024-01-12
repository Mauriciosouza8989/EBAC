import styled from 'styled-components'
import { Props } from './index'

export const TitleComponent = styled.h3<Props>`
  color: ${(props) => props.theme.primaryTextColor};
  margin-bottom: 16px;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
`
