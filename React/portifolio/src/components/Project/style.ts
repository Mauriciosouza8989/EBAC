import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`
export const ButtonLink = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  background-color: ${(props) => props.theme.backgroundButtonColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
