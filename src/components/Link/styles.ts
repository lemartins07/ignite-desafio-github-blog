import styled from 'styled-components'

export const LinkContainer = styled.span`
  & a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: fit-content;

    font-size: ${(props) => props.theme['font-normal']};
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    margin-bottom: 0.5rem;

    cursor: pointer;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const LinkAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: fit-content;

  font-size: ${(props) => props.theme['font-normal']};
  font-weight: bold;
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  margin-bottom: 0.5rem;

  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`
