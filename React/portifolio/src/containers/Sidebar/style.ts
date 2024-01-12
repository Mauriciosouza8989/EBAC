import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  position: sticky;
  top: 80px;
  left: 0;
  p {
    margin-top: 24px;
    margin-bottom: 40px;
    line-height: 18px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`
export const Button = styled.button`
  background-color: ${(props) => props.theme.primaryTextColor};
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  padding: 8px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  border: none;
`
