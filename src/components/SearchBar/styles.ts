import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  margin-bottom: 3rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span:first-child {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: ${(props) => props.theme['font-normal']};
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: ${(props) => props.theme['font-sm']};
    }
  }
`
