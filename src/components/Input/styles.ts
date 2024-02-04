import styled from 'styled-components'

export const InputContent = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};

  color: ${(props) => props.theme['base-text']};

  &:focus {
    border-color: ${(props) => props.theme.blue};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
