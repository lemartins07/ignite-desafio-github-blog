import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 460px;
  max-height: 260px;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.25rem;
  }

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) => props.theme['font-l']};
  }

  span {
    display: block;
    min-width: fit-content;
    font-size: ${(props) => props.theme['font-s']};
  }

  &:hover {
    border-color: ${(props) => props.theme['base-span']};
  }
`
